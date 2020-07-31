/*获取当前url的value值*/
    var localurl = $(location).attr("href");
    var value = localurl.substr(localurl.length - 1, localurl.length);
    $("#carousel-example-generic .item:eq("+ value+")").addClass("active");
    $("#carousel-example-generic .item:eq("+ value+")").siblings().removeClass("active");
    $(".slidenum li:eq("+ value +")").addClass("active");
    $(".slidenum li:eq("+ value +")").siblings().removeClass("active");


/*轮播图*/
$("#carousel-example-generic").on("slide.bs.carousel",function (obj) {
// 当前轮播索引
    var index = $(this).find(".item").index(obj.relatedTarget);
    $.get("home.json",{},function (data) {

        if(index == 0){
            var banner01 = data.detail[0].banner01[0];
            $(".delbuy").html(`
            <h3>${banner01.buy.title}</h3>
            <span class="money">${banner01.buy.money}</span>
            <div class="span">颜色组成<span></span><span></span><span></span><span></span><span></span></div>
            <p class="text">${banner01.buy.contents}</p>
           <div class="buynow fl"><a href="#" class="btn btn-sm coffee"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></div>`);

        }else if(index == 1){
            var banner02 = data.detail[1].banner02[0];
            $(".delbuy").html(`
            <h3>${banner02.buy.title}</h3>
            <span class="money">${banner02.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #cbcbcb"></span><span style="background-color: #d1d0cc"></span></div>
            <p class="text">${banner02.buy.contents}</p>
            <div class="buynow fl"><a href="#" class="btn btn-sm coffee"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></div>`);
        }else if(index == 2){
            var banner03 = data.detail[2].banner03[0];
            $(".delbuy").html(`
            <h3>${banner03.buy.title}</h3>
            <span class="money">${banner03.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #e2dcc6"></span><span style="background-color: #c9c7b8"></span><span style="background-color: #c8cac7"></span></div>
            <p class="text">${banner03.buy.contents}</p>
            <div class="buynow fl"><a href="#" class="btn btn-sm coffee"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</a></div>`);
        }
    },"json");
});
/*滚动条事件*/
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop01 = parseInt($(".prodetail").offset().top);
    var offsetTop = parseInt($(".enviro-tit").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop01 - scrollTop;
    console.log(num);
    if(num1 < 630){
        $(".pro-detail .title .fl").addClass("retitl-slider");
        $(".pro-detail .title .fr").addClass("retitl-slider");

    }else {
        $(".pro-detail .title .fl").removeClass("retitl-slider");
        $(".pro-detail .title .fr").removeClass("retitl-slider");
    }
    if(num1 < 367){
        $(".review").addClass("reviewshow");
    }else {
        $(".review").removeClass("reviewshow");
    }
    if(num1 < 180){
        $(".reviewtop").addClass("reviewslider");

    }else {
        $(".reviewtop").removeClass("reviewslider");
    }

    if(num < 650){
        $(".enviro-tit .title .fl").addClass("retitl-slider");
        $(".enviro-tit .title .fr").addClass("retitl-slider");
    }else {
        $(".enviro-tit .title .fl").removeClass("retitl-slider");
        $(".enviro-tit .title .fr").removeClass("retitl-slider");
    }

    if(num < 280){
        $(".enviro-photo > img").addClass("evrophoto-slider");
    }else {
        $(".enviro-photo > img").removeClass("evrophoto-slider");
    }
    if(num < 167){
        $(".enviro-text").addClass("enviro-text01");
    }else {
        $(".enviro-text").removeClass("enviro-text01");
    }

});
