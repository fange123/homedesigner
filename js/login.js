$(".loginbg").ripples({
   resolution: 200,
   dropRadius: 20, //px
   perturbance: 0.04,

});
$('.form input').on('focus', function(event) {
   event.stopPropagation();
   $('.loginbg').ripples('destroy');
});
/*正则表达式*/
$("#text").blur(function () {
   var text = $("#text");
   var span = $("#span");
   if(text.val() == ""){
      span.html("用户名不能为空");
   }else {
      span.html("");
   }
});
$("#password").keyup(function () {
   var password = $("#password");
   var span1 = $("#span1");
//判断是否含有中文
   var reg03 = /[\u4e00-\u9fa5]/;
   var t3 = reg03.test(password.val());
//判断密码是否是连续数字
   var reg = /^1(2345678|23456789)$/;
   var reg01 = /^0(1234567|12345678|123456789)$/;
   var reg02 = /^2(3456789)$/;
   var t = reg.test(password.val());
   var t1 = reg01.test(password.val());
   var t2 = reg02.test(password.val());
//密码一种组合
   var reg04 = /^[a-z]+$/;//全是小写字母
   var t4 = reg04.test(password.val());
   var reg05 = /^[a-z]+$/;//全是大写字母
   var t5 = reg05.test(password.val());
   var reg06 = /^[0-9]+$/;//全是数字
   var t6 = reg06.test(password.val());
   var reg07 = /^[^a-zA-Z0-9\u4e00-\u9fa5]+$/;//全是特殊字符
   var t7 = reg07.test(password.val());
//密码是两种组合
//大写字母和小写字母
   var reg08 = /^[a-z][a-zA-Z]+$/;//小写字母开头
   var t8 = reg08.test(password.val());
   var reg09 = /^[A-Z][a-zA-Z]+$/;//大写字母开头
   var t9 = reg09.test(password.val());
//大写字母和数字
   var reg10 = /^[A-Z][A-Z0-9]+$/;//大写字母开头
   var t10 = reg10.test(password.val());
   var reg11 = /^[0-9][A-Z0-9]+$/;//数字开头
   var t11 = reg11.test(password.val());
//小写字母和数字
   var reg12 = /^[a-z][a-z0-9]+$/;//小写字母开头
   var t12 = reg12.test(password.val());
   var reg13 = /^[0-9][a-z0-9]+$/;//数字开头
   var t13 = reg13.test(password.val());
//特殊字符和数字
   var reg14 = /^[^a-zA-Z0-9\u4e00-\u9fa5][^a-zA-Z\u4e00-\u9fa5]+$/;//特殊字符开头
   var t14 = reg14.test(password.val());
   var reg15 = /^[0-9][^a-zA-Z\u4e00-\u9fa5]+$/;//数字开头
   var t15 = reg15.test(password.val());
//特殊字符和大写字母
   var reg16 = /^[^a-zA-Z0-9\u4e00-\u9fa5][^a-z0-9\u4e00-\u9fa5]+$/;//特殊字符开头
   var t16 = reg16.test(password.val());
   var reg17 = /^[A-Z][^a-z0-9\u4e00-\u9fa5]+$/;//大写开头
   var t17 = reg17.test(password.val());
//特殊字符和小写字母
   var reg18 = /^[^a-zA-Z0-9\u4e00-\u9fa5][^0-9\u4e00-\u9fa5A-Z]+$/;//特殊字符开头
   var t18 = reg18.test(password.val());
   var reg19 = /^[a-z][^A-Z0-9\u4e00-\u9fa5]+$/;//小写写开头
   var t19 = reg19.test(password.val());
   if(password.val() === ""){
      span1.html = "密码不能为空"
   }else if(t3){
      span1.html("不能包含中文");
   }else if(t || t1 || t2){
      span1.html("不能是连续数字");
   }else if(password.val().length < 8 || password.val().length > 12){
      span1.html("密码长度8-12")
   }else {
      if(t4 || t5 || t6 || t7) {
         span1.html("密码强度弱");
      }else if(t8 || t9 || t10 || t11 || t12 || t13 || t14 || t15 || t16 || t17 || t18 || t19){
         span1.html("密码强度中等");
      }else {
         span1.html("密码强");
      }

   }

});

