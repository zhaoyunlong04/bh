<?php
use yii\helpers\Url;
?>

<a href="<?php echo Url::to(['/classstatistics/default/index','classId'=>$classId])?>" class="btn btn30 icoBtn_back gobackBtn"><i></i>返回</a>
<h4 class="test_title"><?php echo \yii\helpers\Html::encode($examName);?></h4>