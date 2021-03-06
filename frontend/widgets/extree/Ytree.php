<?php
/**
 * Created by PhpStorm.
 * User: ling
 * Date: 2014/12/11
 * Time: 13:58
 * 章节目录
 */
namespace frontend\widgets\extree;

use yii\base\InvalidConfigException;
use yii\helpers\Html;
use yii\web\View;
use yii\widgets\InputWidget;


class Ytree extends InputWidget
{

    /**
     * the url to the upload handler
     * @var string
     */
    public $buTitle = '编辑章节';

    /**
     * @var string name of the form view to be rendered
     */
    public $formView = 'chapterTreeForm';

    public $treeNodes = 'zNodes';
    /**
     * 知识点
     * @var int
     */
    public $treeType = 0;
    public $htmlOptions = [];


    /**
     * Publishes the required assets
     */
    public function init()
    {

        parent::init();
        $this->publishAssets();
    }

    /**
     * Generates the required HTML and Javascript
     */
    public function run()
    {


        list($name, $id) = $this->resolveNameID();
        if (!isset($this->htmlOptions['id']))
            $this->htmlOptions['id'] = $id;

        if (isset($this->htmlOptions['name']))
            $name = $this->htmlOptions['name'];

        $htmlOptions = $this->htmlOptions;
        if (!isset($htmlOptions["class"])) {
            $htmlOptions["class"] = "addPointBtn";
        }

        $treeNodes = $this->treeNodes;
        $buTitle = $this->buTitle;
    return     $this->render($this->formView, [ 'model'=>$this->model,'attribute'=>$this->attribute,'value'=>$this->value,'hasModel'=>$this->hasModel(), 'htmlOptions'=>$htmlOptions, 'treeNodes'=>$treeNodes, 'buTitle'=>$buTitle, 'name'=>$name]);

    }

    protected function resolveNameID()
    {
        if ($this->name !== null)
            $name = $this->name;
        elseif (isset($this->options['name']))
            $name = $this->options['name'];
        elseif ($this->hasModel())
            $name = Html::getInputName($this->model, $this->attribute);
        else
            throw new InvalidConfigException('{class} must specify "model" and "attribute" or "name" property values.');
        if (($id = $this->getId(false)) === null) {
            if (isset($this->options['id']))
                $id = $this->options['id'];
            else
                $id = self::getIdByName($name);
        }

        return array($name, $id);
    }

    private static function getIdByName($name)
    {
        return str_replace(['[]', '][', '[', ']', ' '], ['', '_', '_', '', '_'], $name);
    }

    /**
     * Publises and registers the required CSS and Javascript
     * @throws CHttpException if the assets folder was not found
     */
    public function publishAssets()
    {
        $view = $this->getView();
        $baseUrl = BH_CDN_RES.'/pub';
        $view->registerCssFile($baseUrl . '/js/ztree/zTreeStyle/zTreeStyle.css'.RESOURCES_VER);
        $view->registerJsFile($baseUrl . '/js/ztree/jquery.ztree.all-3.5.min.js'.RESOURCES_VER, ['position' => View::POS_END]);
    }
}
