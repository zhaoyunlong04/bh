<?php
namespace mobileWeb\modules\api\modules\courseware\controllers;


use common\clients\material\MaterialSign;
use common\models\pos\SeMaterialDownloadRecord;
use common\models\pos\SeMaterialPreviewRecord;
use common\models\pos\SeMaterialShowRecord;
use common\models\pos\SeUserMaterialPrivilege;
use common\models\sanhai\SrMaterial;
use common\clients\material\MaterialMicroService;
use common\clients\XuemiMicroService;
use Exception;
use frontend\components\helper\ImagePathHelper;
use mobileWeb\components\HttpAndCookiesBearerAuth;
use mobileWeb\controllers\RestfulBaseController;
use Yii;
use yii\helpers\Url;
use yii\web\BadRequestHttpException;
use yii\web\ForbiddenHttpException;
use yii\web\NotFoundHttpException;

/**
 * Created by PhpStorm.
 * User: zyl
 * Date: 17-10-12
 * Time: 下午2:31
 */
class MaterialController extends RestfulBaseController
{

    public function behaviors()
    {
        $arr1 = parent::behaviors(); // TODO: Change the autogenerated stub
        $arr2 = [
            'authenticator' => [
                'class' => HttpAndCookiesBearerAuth::className(),
                'optional'=>[
                    'detail'
                ]
            ]
        ];

        return array_merge($arr1, $arr2);
    }

    /**
     * 收藏课件
     */
    public function actionCollect()
    {

        $favoriteId = (int)app()->request->post('file-id');
        $userId = user()->id;

        if (empty($favoriteId)) {
            throw new BadRequestHttpException('请求参数不能为空');
        }

        $materialService = new MaterialMicroService();
        $result = $materialService->collect($favoriteId, $userId);

        if (isset($result->status) && $result->status != 200) {
            if($result->status == 401){
                throw new ForbiddenHttpException($result->message);
            }
            throw new BadRequestHttpException($result->message);
        }

        return $result;
    }

    /**
     * 取消收藏
     * @return array|mixed
     * @throws BadRequestHttpException
     */
    public function actionCancleCollect()
    {
        $favoriteId = app()->request->post('file-id');
        $userId = user()->id;

        $materialService = new MaterialMicroService();
        $result = $materialService->cancelCollect($favoriteId, $userId);

        if (isset($result->code) && $result->code != 200) {
            throw new BadRequestHttpException($result->message);
        }

        return $favoriteId;
    }

    /**
     * 下载课件
     */
    public function actionDownload()
    {
        $id = (int)app()->request->post('file-id');

        $userId = (int)user()->id;

        $materialService = new MaterialMicroService();
        $result = $materialService->download($id, $userId);

        if (isset($result->code) && $result->code != 200) {
            if($result->status == 401){
                throw new ForbiddenHttpException($result->message);
            }
            throw new BadRequestHttpException($result->message);
        }

        $sign = MaterialSign::getDownMaterialSign();

        return 'http://www.banhai.com' . Url::to(['/ajax/download-file', 'id' => $id,'time'=>time(),'sign'=>$sign]);
    }


    /**
     * 课件预览
     */
    public function actionPreview()
    {

        $id = app()->request->get('file-id');
        $userId = user()->id;

        $materialService = new MaterialMicroService();
        $result = $materialService->preview($id, $userId);

        if (isset($result->code) && $result->code != 200) {
            if($result->status == 401){
                throw new ForbiddenHttpException($result->message);
            }
            throw new BadRequestHttpException($result->message);
        }

        $materialModel = SrMaterial::getMaterialInfo($id);
        $url = $materialModel->url;

        try {

            if (ImagePathHelper::judgeImage($url)) {
                $url = ImagePathHelper::resUrl1($url);
            } else {
                $url = 'https://officeweb365.com/o/?i=13233&furl=' . urlencode(ImagePathHelper::resUrl1($url));
            }

            return $url;
        } catch (Exception $e) {

            \Yii::error('课件文件无法预览错误信息' . '------' . $e->getMessage());
            throw new BadRequestHttpException('预览失败');
        }
    }


    /**
     * 判断课件是否收藏
     */
    public function actionIsCollected()
    {

        $fileIds = (string)app()->request->get('file-ids');
        $userId = user()->id;

        $materialService = new MaterialMicroService();
        $result = $materialService->isCollected($fileIds, $userId);

        if (isset($result->code) && $result->code != 200) {
            throw new BadRequestHttpException($result->message);
        }

        return $result;

    }

    /**
     * 课件详情
     */
    public function actionDetail()
    {

        $id = app()->request->get('file-id');

        $materialService = new MaterialMicroService();
        $result = $materialService->detail($id);

        if (isset($result->code) && $result->code != 200) {
            throw new BadRequestHttpException($result->message);
        }

        $result->image = ImagePathHelper::imgThumbnail($result->image, 250, 140);

        return $result;
    }

    /**
     * 投屏
     * @return string
     * @throws BadRequestHttpException
     * @throws ForbiddenHttpException
     */
    public function actionShow(){
        $id = app()->request->get('file-id');
        $userId = user()->id;
        $materialService = new MaterialMicroService();
        $result = $materialService->show($id, $userId);

        if (isset($result->code) && $result->code != 200) {
            if($result->status == 401){
                throw new ForbiddenHttpException($result->message);
            }
            throw new BadRequestHttpException($result->message);
        }

        $materialModel = SrMaterial::getMaterialInfo($id);
        $url = $materialModel->url;

        if (ImagePathHelper::judgeImage($url)) {
            $url = ImagePathHelper::resUrl1($url);
        } else {
            $url = 'https://officeweb365.com/o/?i=13233&furl=' . urlencode(ImagePathHelper::resUrl1($url));
        }

        return $url;
    }



}