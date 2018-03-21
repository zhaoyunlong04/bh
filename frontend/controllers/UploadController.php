<?php
namespace frontend\controllers;

use frontend\components\BaseAuthController;

/**
 * Created by PhpStorm.
 * User: a
 * Date: 14-6-24
 * Time: 下午2:45
 */
class UploadController extends BaseAuthController
{
    public function actions()
    {

        return array(
            'header' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/header',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/header',
                'subfolderVar' => 'parent_id',
                'width' => 460,
                'options' => ['accept_file_types' => '/\.(gif|jpe?g|png)$/i', 'max_file_size' => 1024 * 1024 * 2]
            ],
            'pic' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/pic',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/pic',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(gif|jpe?g|png)$/i', 'max_file_size' => 1024 * 1024 * 4]
            ],
            'paper' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/pic',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/pic',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(jpg|png)$/i', 'max_file_size' => 1024 * 1024 * 4]
            ],
            'page' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/page',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/page',
                'subfolderVar' => 'parent_id',
                'width' => 500,
            ],

            'doc' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/doc',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/doc',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(doc|doc?x|pdf)$/i', 'max_file_size' => 1024 * 1024 * 2]
            ],

            'audio' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/audio',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/audio',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(mp3)$/i', 'max_file_size' => 1024 * 1024 * 2]
            ],
            //source 是素材里用的东西
            'source' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/source',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/source',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(doc|doc?x|pdf|ppt|jpg|png|avi|flv|mkv|wmv|mov|rmvb|mp4|mp3|wav)$/i', 'max_file_size' => 1024 * 1024 * 40]
            ],
            'video' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/video',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/video',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(avi|flv|mkv|wmv|mov|rmvb|mp4)$/i', 'max_file_size' => 1024 * 1024 * 40]
            ],
            'prepare' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/prepare',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/prepare',
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(pdf|doc|docx|ppt|pptx|zip|rar|jpg|png)$/i', 'max_file_size' => 1024 * 1024 * 4]
            ],
            'excel' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/excel',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/excel',
                'endStr'=>'_'.user()->id,
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(xlsx)$/i', 'max_file_size' => 1024 * 1024 * 4]
            ],
            'template' => [
                'class' => '\frontend\widgets\xupload\actions\XUploadAction',
                'path' => \Yii::getAlias('@webroot') . '/uploads/template',
                'publicPath' => \Yii::getAlias('@web') . '/uploads/template',
                'endStr'=>'_'.user()->id,
                'subfolderVar' => 'parent_id',
                'options' => ['accept_file_types' => '/\.(xlsx)$/i', 'max_file_size' => 1024 * 1024 * 4]
            ],
        );
    }

}