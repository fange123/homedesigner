/*推荐*/
/*轮播图*/
$("#first").on("slide.bs.carousel",function (obj) {
// 当前轮播索引
    var index = $(this).find(".item").index(obj.relatedTarget);
    $.get("home.json",{},function (data) {
        if(index == 0){
            var banner01 = data.product[0].recommend[0].one;
            $(".first").html(`
             <h3>${banner01[0].title}</h3>
            <h6>${banner01[0].subtit}</h6>
            <div class="span"><span></span><span></span><span></span></div>
            <p>${banner01[0].p1}</p>
            <p>${banner01[0].p2}</p>
            <span class="money">${banner01[0].money}</span>
            <div class="buynow"><i class="effect effect-1">立即购买</i></div>`);

        }else if(index == 1){
            var banner01 = data.product[0].recommend[0].one;
            $(".first").html(`
             <h3>${banner01[1].title}</h3>
            <h6>${banner01[1].subtit}</h6>
            <div class="span"><span style="background-color: #a57b5b"></span><span style="background-color: #7f4844"></span><span style="background-color: #a3a1a1"></span></div>
            <p>${banner01[1].p1}</p>
            <p>${banner01[1].p2}</p>
            <span class="money">${banner01[1].money}</span>
            <div class="buynow"><i class="effect effect-1">立即购买</i></div>`);
        }else if(index == 2){
            var banner01 = data.product[0].recommend[0].one;
            $(".first").html(`
             <h3>${banner01[2].title}</h3>
            <h6>${banner01[2].subtit}</h6>
            <div class="span"><span style="background-color: #a6a7a8"></span><span style="background-color: #e8dcc3"></span></div>
            <p>${banner01[2].p1}</p>
            <p>${banner01[2].p2}</p>
            <span class="money">${banner01[2].money}</span>
            <div class="buynow"><i class="effect effect-1">立即购买</i></div>`);
        }
    },"json");
});

/*轮播图*/
$("#second").on("slide.bs.carousel",function (obj) {
// 当前轮播索引
    var index = $(this).find(".item").index(obj.relatedTarget);
    $.get("home.json",{},function (data) {
        if(index == 0){
            var banner01 = data.product[0].recommend[1].two;
            $(".second").html(`
             <h3>${banner01[0].title}</h3>
            <h6>${banner01[0].subtit}</h6>
            <div class="span"><span></span><span></span><span></span></div>
            <p>${banner01[0].p1}</p>
            <p>${banner01[0].p2}</p>
            <span class="moneyright">${banner01[0].money}</span>
            <div class="more1 buynow fr"><i class="effect effect-1">立即购买</i></div>`);

        }else if(index == 1){
            var banner01 = data.product[0].recommend[1].two;
            $(".second").html(`
             <h3>${banner01[1].title}</h3>
            <h6>${banner01[1].subtit}</h6>
            <div class="span"><span style="background-color: #fc6a87"></span><span style="background-color: #fc4465"></span></div>
            <p>${banner01[1].p1}</p>
            <p>${banner01[1].p2}</p>
            <span class="moneyright">${banner01[1].money}</span>
            <div class="more1 buynow fr"><i class="effect effect-1">立即购买</i></div>`);
        }else if(index == 2){
            var banner01 = data.product[0].recommend[1].two;
            $(".second").html(`
             <h3>${banner01[2].title}</h3>
            <h6>${banner01[2].subtit}</h6>
            <div class="span"><span style="background-color: #a6a7a8"></span><span style="background-color: #9ca49b"></span></div>
            <p>${banner01[2].p1}</p>
            <p>${banner01[2].p2}</p>
            <span class="moneyright">${banner01[2].money}</span>
            <div class="more1 buynow fr"><i class="effect effect-1">立即购买</i></div>`);
        }
    },"json");
});

/*我们的产品*/
$.get("home.json",{},function (data) {

    for (var i = 0; i < 4; i++) {
       var arr = data.product[1].products[i];
        var html = ``;
        html += `<div>
                <div>
                    <img src="${arr.image}" alt="产品">
                    <div class="blur">
                    <span>${arr.money}</span>
                    <h2>${arr.name}</h2>
                    <button>购买</button>
                </div>
                </div>
              <h3>${arr.name}</h3>
             <p>${arr.money}</p>
            </div>`;
        $(".pro01").append(html);
    }

},"json");

$.get("home.json",{},function (data) {

    for (var i = 4; i < 8; i++) {
        var arr1 = data.product[1].products[i];
        var html = ``;
        html += `<div>
                <div>
                    <img src="${arr1.image}" alt="产品">
                    <div class="blur">
                    <span>${arr1.money}</span>
                    <h2>${arr1.name}</h2>
                    <button>购买</button>
                </div>
                </div>
              <h3>${arr1.name}</h3>
             <p>${arr1.money}</p>
            </div>`;
        $(".pro02").append(html);
    }
},"json");

$('.p-tit .ex2').textyle({
    duration : 400,
    delay : 100,
    easing : 'swing',
    callback : function(){
        $(this).css({
            color : '#fff',
            transition : '0.5s'
        });
        $('.p-tit .desc').css('opacity',1);
    }
});
$(".proline").on("mouseenter","img",function () {
     var $this = $(this);
    $(this).next().stop(true, true).animate({
        width:224
    },500,function () {
        $this.parent().find(".intro1").stop(true, true).find("*").css("opacity",1)
    })
});
$(".proline").on("mouseleave",".intro1",function () {
     var $this = $(this);
    $(this).stop(true, true).animate({
        width:0,
    },100,function () {
        $this.find("*").stop(true, true).css("opacity",0)
    })
});
$(".proline").mouseout(function () {
   $(this).find(".intro1").find("*").css("opacity",0);
});
/*滚动条事件*/
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop01 = parseInt($(".recommend").offset().top);
    var offsetTop = parseInt($(".ourproduct").offset().top);
    var num = offsetTop - scrollTop;
    var num1 = offsetTop01 - scrollTop;
    console.log(num1);
    if(num1 < 500){
        $(".retit h2").addClass("pro-h2-slider");
        $(".retit p").addClass("pro-p-slider");
    }else {
        $(".retit h2").removeClass("pro-h2-slider");
        $(".retit p").removeClass("pro-p-slider");
    }

    if(num < 563){
       $(".pro-tit01 h2").addClass("pro-h2-slider");
       $(".pro-tit01 p").addClass("pro-p-slider");
    }else {
        $(".pro-tit01 h2").removeClass("pro-h2-slider");
        $(".pro-tit01 p").removeClass("pro-p-slider");
    }

});