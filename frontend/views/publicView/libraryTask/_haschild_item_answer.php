<?php
/**
 * Created by PhpStorm.
 * User: ling
 * Date: 2015/4/17
 * Time: 15:27
 *    49  209    题型显示    1    单选题    1
 * 50    209    题型显示    2    多选题    1
 * 51    209    题型显示    3    填空题    1
 * 52    209    题型显示    4    问答题    1
 * 53    209    题型显示    5    应用题    1
 * 96    209    题型显示    7    阅读理解    1
 * 95    209    题型显示    6    完形填空    1
 */


if (!empty($childList)) {
    ?>
    <ul class="sub_Q_List">
            <?php
            foreach ($childList as $key => $i) {
                echo '<li>';
                echo $this->render('//publicView/libraryTask/_itemChildAnswerType', ['item' => $i, 'no' => $key + 1, 'mainId' => $mainId, 'homeworkData' => $homeworkData]);
                echo '</li>';
            }
            ?>
    </ul>
<?php } ?>