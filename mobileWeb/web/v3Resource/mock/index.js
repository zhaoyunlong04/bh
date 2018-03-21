const express = require('express')
const router = express.Router()

const generateData = require('./generateData')
router.all('/user/privilege', generateData('privilege'))
router.all('/user/total-account', generateData('userTotalAccount'))
router.all('/class/total-account', generateData('classTotalAccount'))
router.all('/tool/tool-info', generateData('toolInfo'))
router.all('/tool/convert', generateData('toolConvert'))
router.all('/activity/activity-info', generateData('activityInfo'))
router.all('/user/user-contribute', generateData('userContribute'))
router.all('/class/class-contribute', generateData('classContribute'))
router.all('/rank/user', generateData('rankUser'))
router.all('/rank/class', generateData('rankClass'))
router.all('/activity/total-number', generateData('totalNumber'))
router.all('/pk/leader', generateData('classLeader'))
router.all('/pk/pk-list', generateData('pkList'))
router.all('/activity/tasks', generateData('activityTasks'))

module.exports = router