﻿define(["popBox", 'userCard', 'jquery_sanhai', 'validationEngine', 'validationEngine_zh_CN', 'jqueryUI'], function (popBox, userCard, jquery_sanhai, ec, validationEngine, validationEngine_zh_CN) {

	(function () {
		//选择课程
		$('.classes_file_list .row').openMore(36);
		$('#classes_sel_list .row').sel_list('single');

		//取消按钮、
		$(document).on("click", ".QA_cancelBtn", function () {
			var pa = $(this).parents('.QA_li');
			pa.removeClass('open_ask');
			pa.find(".upload_img").remove();
			pa.find('.uploadFileBtn').show();

		});
		//科目变化，列表自动刷新
		$(document).on("click", ".subject_list", function () {
			var department = $(".is_department").find(".sel_ac").attr("department_type");
			var subjectID = $(this).find(".sel_ac").attr('subject');
			var solved_type = $('.is_solved').find('.sel_ac').attr("solved_type");
			$.get('/platform/answer/answer-questions-list', {
				department: department,
				subjectID: subjectID,
				solved_type: solved_type
			}, function (data) {
				$(".check_answer_list").html(data);
			})
		});

		//解决状态筛选
		$(document).on("click", ".is_solved", function () {
			var _this = $(this);
			var solved_type = _this.find('.sel_ac').attr("solved_type");
			var subjectID = $('.subject_list').find('.sel_ac').attr('subject');
			$.get('/platform/answer/answer-questions-list', {
				subjectID: subjectID,
				solved_type: solved_type
			}, function (data) {
				$(".check_answer_list").html(data);
			})
		});

		//打开回答
		$(document).on("click", ".reply", function () {
			var _this = $(this);
			var pa = _this.parents('.QA_li');

			if (!pa.hasClass('open_ask')) {

				pa.addClass('open_ask').removeClass('open_answer');
				pa.siblings('li').removeClass('open_ask open_answer');

				var aqId = $(this).parents('.aqId').attr("aqId");
				$.get('/answernew/response-open', {aqId: aqId}, function (data) {

					$('#response' + aqId).html(data);
				})
			}
			else {
				pa.removeClass('open_ask');
			}
		});

		//答案列表\
		$(document).on("click", ".answer", function () {
			var rep_num = $(this).find("b").html();
			var pa = $(this).parents('.QA_li');
			if (rep_num == 0) {
				popBox.errorBox('暂无答案！');
				return false;
			} else {
				if (!pa.hasClass('open_answer')) {
					pa.addClass('open_answer').removeClass('open_ask');
					pa.siblings('li').removeClass('open_answer open_ask');
					var apid = $(this).attr('aqid');
					$.post("/answernew/reply-list", {apid: apid}, function (data) {
						$('#reply_list' + apid).html(data);
					})
				}
				else {
					pa.removeClass('open_answer')
				}
			}
		});
		//回答
		$(document).on("click", ".answer_questions_btn", function () {
			var _this = $(this);
			var img_num = _this.parents('.form_r').find('.picList li img').length;

			var pa = _this.parents('.QA_li');
			var aqid = _this.attr('val');
			var answer = $(".textarea_content" + aqid).val();
			var img_val = $('.uploadFile ').parents('.picList').find(' li input').val();
			if ($.trim(answer) == '' && img_num <= 0) {

				popBox.errorBox("内容不能为空!");

				return false;
			}
			if (answer.length > 1001) {
				popBox.alertBox('超过1000字数限制，请重新编辑！');
				return false;
			} else {
				_this.removeClass("answer_questions_btn");
				$.post('/answernew/result-question', {answer: answer, aqid: aqid, img_val: img_val}, function (data) {
					if (data.success) {
						popBox.successBox('回答成功');

						$(".textarea_content" + aqid).val("");
						$(".upload_img").remove();
						pa.removeClass('open_ask').addClass('open_answer').siblings('li').removeClass('open_answer open_ask');
						answerNumber = $("a[aqid=" + aqid + "]").find("b").html();
						answerNumber = parseInt(answerNumber) + 1;
						$("a[aqid=" + aqid + "]").find("b").html(answerNumber);
						//打开回答列表
						$.post('/answernew/reply-list', {apid: aqid}, function (result) {
							$('#reply_list' + aqid).html(result);
						})
					} else {
						popBox.errorBox(data.message);
					}
				});
				_this.parent().parent('.pop_up_js').hide();
			}
		});

		/*增加同问的数字*/
		$(document).on("click", ".quiz_btn_add", function () {
			var _this = $(this);
			var creatorid = _this.attr('user');
			var userid = _this.attr('uuser');

			if (creatorid == userid) {
				popBox.errorBox("请勿同问自己问答！");
				return false;
			} else {
				var aqid = $(this).attr('val');
				//同问数+1
				var same_number = $(this).children('#same' + aqid).attr('val');
				same_number++;
				$.get('/answernew/same-question', {aqid: aqid}, function (data) {
					if (data.success) {
						popBox.successBox(data.message);
						$.get('/answernew/also-ask-head', {aqId: aqid}, function (data) {
							$('#head_img' + aqid).children('span').append().html(data);
						});
						$("#same" + aqid).text(same_number);
					} else {
						popBox.errorBox(data.message);
					}
				})
			}
		});
		/*点击采用变成已采用*/
		$(document).on("click", ".adopt_btn", function () {
			var _this = $(this);
			_this.removeClass('adopt_rem');
			_this.parent().find('li').addClass('bestAnswer');
			_this.parents('.QA_li').addClass('solve');
			var creatorID = _this.parents("li").attr('creatorID');
			var aqid = _this.attr('u');
			var resultid = _this.attr('val');
			$.post('/answernew/use-the-answer', {
				resultid: resultid,
				creatorID: creatorID,
				aqid: aqid
			}, function (data) {
				if (data.success) {
					popBox.successBox(data.message);
					$.post('/answernew/answer-detail', {aqid: aqid}, function (datas) {
						$('.answerBigBox' + aqid).children('.answerW').show();
						//打开回答列表
						$.post('/answernew/reply-list', {apid: aqid}, function (result) {
							$('#reply_list' + aqid).html(result);
						})
					});
				}
				else {
					popBox.errorBox(data.message);
				}
			})
		});
		$('.QA_cancelBtn').click(function () {
			var pa = $(this).parents('.QA_li');
			pa.removeClass('open_ask');
		})

		$('.QA_answerBtn').click(function () {
			//$.post('url',{id:"abdc"},function(result){
			//
			//})
		});
	})();

	//	显示卡片
	(function () {
		var overTime, outTime;
		$('.icon_card').live({
			mouseover: function () {
				clearTimeout(overTime);
				var _this = $(this);
				overTime = setTimeout(function () {
					var userID = _this.attr('creatorID');
					var source = _this.attr('source');
					$.ajax({
						url: "/answernew/show-per-msg",
						data: {userID: userID, source: source},
						type: 'get',
						global: false,
						success: function (data) {
							if (data.success) {
								userCard.userCard(_this, data.data);
							}
						}
					});
				}, 300);
			},
			mouseout: function () {
				clearTimeout(overTime);
				var card = $('.userCard');

				function removeCard() {
					outTime = setTimeout(function () {
						card.remove();
					}, 60);
				}

				removeCard();
				overTime = setTimeout(function () {
					removeCard()
				}, 100);
				card.mouseover(function () {
					clearTimeout(overTime);
					clearTimeout(outTime);
				});
				card.mouseout(function () {
					removeCard();
				});
			}
		});
	})();
})