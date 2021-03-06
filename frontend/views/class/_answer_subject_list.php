<?php
/**
 * Created by PhpStorm.
 * User: gaoling
 * Date: 2015/12/29
 * Time: 14:45
 */
use common\models\dicmodels\SubjectModel;

$department = loginUser()->getModel()->department;

$subjectArray = SubjectModel::getSubjectByDepartmentCache($department);
$countSubject = count($subjectArray);
?>
<div class="form_l tl subject_list class_id" cl="<?php echo $classId;?>">
	<a class="sel_ac" data-sel-item href="javascript:;"  subject="">全部学科</a>
</div>
<div class="form_r moreContShow">
	<?php if ($countSubject > 9) { ?>
		<a class="showMoreBtn" href="javascript:;">更多<i></i></a>
	<?php } ?>
	<ul>
		<?php
		$i = 0;
		foreach ($subjectArray as $key => $val) {
			++$i;
			?>
			<li class="subject_list">
				<a data-sel-item href="javascript:;"  subject="<?php echo $val->secondCode; ?>"><?php echo $val->secondCodeValue; ?></a>
			</li>

			<?php
			if ($i == 9) {
				echo '<br />';
			}
		} ?>
	</ul>
</div>
