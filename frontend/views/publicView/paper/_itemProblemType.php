<?php

/* @var $this yii\web\View */
use common\models\sanhai\ShTestquestion;
use frontend\components\helper\ImagePathHelper;
use frontend\components\helper\LetterHelper;
use frontend\components\helper\StringHelper;
use frontend\components\helper\ViewHelper;
use yii\helpers\Html;

/**
 * Created by PhpStorm.
 * User: yang
 * Date: 14-12-12
 * Time: 下午4:14
 */

/*
49  209	题型显示	1	单选题	1
50	209	题型显示	2	多选题	1
51	209	题型显示	3	填空题	1
52	209	题型显示	4	问答题	1
53	209	题型显示	5	应用题	1
96	209	题型显示	7	阅读理解	1
95	209	题型显示	6	完形填空	1

*/
?>

<?php if ($item->showTypeId ==null) {
   ViewHelper::emptyView();
}?>

<?php if ($item->showTypeId == ShTestquestion::QUESTION_DAN_XUAN_TI || $item->showTypeId == ShTestquestion::QUESTION_DUO_XUAN_TI) { ?>
    <h5>题 <?php echo $item->id ?></h5>
    <h6> <?php if($item->year):?>
            【<?php echo $item->year ?> 年】
        <?php endif; ?>
        &nbsp;<?php echo $item->provenanceName ?>  <?php echo $item->questiontypename ?></h6>
    <p><?php echo StringHelper::htmlPurifier($item->content) ?></p>
    <div class="checkArea">
        <?php
        $result = json_decode($item->answerOption);
        $result= empty($result)?array():$result;
      try {

          $select = (from($result)->select(function ($v) {
               if( isset($v->id) && isset( $v->content)){
                   return ''.LetterHelper::getLetter($v->id) . '&nbsp;<p>' . StringHelper::htmlPurifier($v->content) .'</p>';
               }
              return '';
          }, '$k')->toArray());
          if ($item->showTypeId == ShTestquestion::QUESTION_DAN_XUAN_TI) {
              echo Html::radioList('item[' . $item->id . ']', '', $select, ['encode'=>false,'separator' => '<br/>','class'=>'radio',]);
          } else {
              echo Html::checkboxList('item[' . $item->id . ']', '', $select, ['encode'=>false,'separator' => '<br/>','class'=>'checkbox']);
          }
      }catch(Exception $e){
          \Yii::error('多选题答案备选项失败错误信息' . '------' . $e->getMessage());
      }
        ?>
    </div>
<?php } ?>

<?php if ($item->showTypeId == ShTestquestion::QUESTION_BU_KE_PAN_TIAN_KONG_TI) { ?>
    <h5>题 <?php echo $item->id ?></h5>
    <h6> <?php if($item->year):?>
            【<?php echo $item->year ?>
            年】
        <?php endif; ?> &nbsp;<?php echo $item->provenanceName ?>  <?php echo $item->questiontypename ?></h6>
    <p><?php echo StringHelper::htmlPurifier($item->content); ?></p>
    <div class="checkArea">
        <?php if (empty($item->childQues)) { ?>
            <p><label>填空</label><input type="text" class="text" name="item[<?php $item->id ?>]" title=""/></p>
        <?php } else {
            foreach ($item->childQues as $key => $i) {
                ?>
                <p><label><?php echo $key+1 ?>、<?php echo  StringHelper::htmlPurifier($i->content) ?> </label><input type="text" class="text" name="item[<?php $i->id ?>]"/></p>
            <?php }
        }
        ?>
    </div>
<?php } ?>


<?php if ($item->showTypeId == ShTestquestion::QUESTION_JIE_DA_TI) { ?>
    <h5>题 <?php echo $item->id ?></h5>
    <h6> <?php if($item->year):?>
            【<?php echo $item->year ?>
            年】
        <?php endif; ?>&nbsp;<?php echo $item->provenanceName ?>  <?php echo $item->questiontypename ?></h6>
    <p><?php echo StringHelper::htmlPurifier($item->content) ?></p>
    <ul class="sub_Q_List">
        <li>
            <?php
            foreach ($item->childQues as $key => $i) {
                echo $this->render('//publicView/paper/_itemChildProblemType', array('item' => $i, 'no' => $key+1));
            }
            ?>
        </li>
    </ul>
<?php } ?>


