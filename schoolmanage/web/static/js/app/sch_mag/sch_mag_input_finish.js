﻿define(["popBox", 'jquery_sanhai', 'jqueryUI'], function(popBox,jquery_sanhai,jqueryUI) {
    //编辑
    $('#editBtn').click(function(){
        $('#editCont').removeClass().addClass('edit_input').addClass('editCont');
        $('#input_table').find('input').removeAttr('disabled');
    });

   function create_table(data){
       var subject={'10010':'语文','10011':'数学','10012':'英语','10013':'生物','10014':'物理','10015':'化学','10016':'地理','10017':'历史','10018':'政治','10023':'信息技术','10026':'科学','10027':'理综','10028':'文综','10029':'思想品德','10030':'品德与社会','10031':'心理','10032':'健康','10033':'校本课程','10034':'地方课程','10035':'劳动与技术','10037':'学法指导','10038':'写字','10039':'蒙古语文','10040':'汉语','10041':'俄语'}
       //var data = data;
       var html='<form id="input_form">';
       var html2="";
           html2+='<table class="sUI_table name_table fl" style="width: 200px;border-right: 1px solid #dcdcdc;">';
           html2+='<thead><tr>';
           html2+='<th>学号</th><th>姓名</th></tr></thead>';
           for(var i=0;i<data.student.length;i++){
               html2+='<tr>';
               html2+='<td><em title="'+data.student[i].num+'">'+data.student[i].num+'</em></td><td><em title="'+data.student[i].name+'">'+data.student[i].name+'</em></td>';
               html2+='</tr>';
           }
           html2+='</table>';
       html+=html2;

       html+='<div class="tableWrap fl" style="width: 800px; overflow: auto; padding-bottom: 10px; overflow-Y:hidden">';
       html+='<table id="input_table" class="sUI_table input_table ">';
       html+='<thead><tr>';
        for(var i=0; i<data.subject.length;  i++){
            html+='<th>'+subject[data.subject[i].name]+'</th>';
        }
       html+='</tr></thead>';
       html+='<tbody>';
           for(var i=0; i<data.student.length;  i++){
               html+='<tr id="'+data.student[i].autoId+'_score">';
               var obj_l=0;
               for(var key in data.student[i].subject ){
                   //html+='<td class="hide"><input type="hidden" value="'+data.student[i].num+'"> </td>';
                   html+='<td><input  class="excel_text" name="'+'scoreInput['+data.student[i].autoId+']['+ key +']" title="最高分为'+data.subject[obj_l].max+'分"  data-max="'+data.subject[obj_l].max+'" type="text" value="'+data.student[i].subject[key]+'" disabled="disabled"></td>';
                   obj_l++;
               }
               html+='</tr>';
           }
       html+='</tbody>';
       html+='</table>';
       html+='</div>';


       html+='<table class="sUI_table total_table fl" style="width: 100px;border-left: 1px solid #dcdcdc;">';
       html+='<thead><tr><th>总分</th></tr></thead>';
       html+='<tbody>';
       for(var i=0; i<data.student.length;  i++){
           html+='<tr>';
           var sum=0;
           for(var key in data.student[i].subject ){
               //sum+=data.student[i].subject[key];
               sum+=parseFloat(data.student[i].subject[key]);
           }
           sum=parseFloat(sum);
           sum=Number(sum.toFixed(2));
           html+='<td id="'+data.student[i].autoId+'_sum">'+sum+'</td>';
           html+='</tr>';
       }
       html+=' </tbody>';
       html+='</table>';
       html+='<div class="tc clearBoth submit_Bar" style="height:80px; padding-top:30px; border-bottom: 1px solid #dcdcdc">';
       //html+=' 还没有全部录入完，暂时 <button type="button" style="width: 110px" class="bg_blue btn40 input_save_btn">保存成绩</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="height: 24px; border-right: 1px solid #dcdcdc"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
       html+='成绩已经录入完成！<button type="button" style="width: 110px" class="bg_white btn40 input_finish_btn">完成录入</button></div>';
       html+='</form>';
       $('#input_table_bar').append(html);




       //input回车自动跳转
       var inputAry = $("#input_table").find("input:text");
       inputAry.focus(function(){
           var _this= $(this);
           _this.keyup(function(event){
               if(event.keyCode==13){
                   _this.blur();
                   var nxtIdx = inputAry.index(this) + 1;
                   inputAry.eq(nxtIdx).focus().select();

               }
           })
       });
       //输入验证
       inputAry.blur(function(){
           var _this=$(this);
           var val= _this.val();
           var rg=/\d*[A-Za-z]|\.{2}|\d*\.\d{3}|\s/g;
           var max= parseInt(_this.attr('data-max'));
           if(rg.test(val)|| val>max || val<0 || isNaN(val)){
               popBox.errorBox('输入错误');
               _this.addClass('input_error');
           }
           else if( val==""){
               popBox.errorBox('不能为空');
               _this.addClass('input_error');
           }
           else{
               _this.removeClass('input_error');
               score_sum(_this);
           }
       });


       //提交表单
       $('.input_finish_btn').click(function(){
           var chk_error=$('#input_table').find('.input_error').size();
           if(chk_error>0){
               popBox.errorBox('录入表单存在错误,请修正后再提交!');
           }
           else{
               //完成录入
                   var input_form = $('#input_form');
               popBox.confirmBox('确定录入完成吗',function(){
                   $.post('final-update-score', input_form.serialize(),function(data){
                       if(data){
                           popBox.successBox("修改成功");
                           setTimeout("window.location.reload()",1000);
                       }else{
                           popBox.successBox("修改失败");
                       }
                   });
               })

           }

       });



       function score_sum(elm){
           var val=elm.val();
           var pa=elm.parents('tr');
           var p_id=pa.attr('id');
           var val_sum=0;
           pa.find('.excel_text').each(function(){//累计分数
               var temp=parseFloat($(this).val());
               if(isNaN(temp) ||temp=="") temp=0;
               val_sum+=temp;
           });
           val_sum=Number(val_sum.toFixed(2));
           var id=p_id.split('_')[0];
           $('#'+id+'_sum').text(val_sum);
       }


   }

    create_table(data);

    //录入成绩保存教师关联
    $("#btn_sav").click(function () {
        popBox.successBox("保存成功！");
    });

});