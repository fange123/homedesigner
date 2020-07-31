/*轮播图*/
$("#carousel-example-generic").on("slide.bs.carousel", function (obj) {
    // 当前轮播索引
    var index = $(this).find(".item").index(obj.relatedTarget);
    if(index == 0){
        $(".nav h1 img").attr("src","img/logo01.png");
        $(".nav div img").attr("src","img/nav-top01.png");
        }else if(index == 1){
        $(".nav h1 img").attr("src","img/logo.png");
        $(".nav div img").attr("src","img/nav-top01.png");
    }else if(index == 2){
        $(".nav h1 img").attr("src","img/logo.png");
        $(".nav div img").attr("src","img/nav-top.png");
    }
});

  /*查看详情*/
  /*获取到主页面的按钮的索引值*/
  function delBtn(i){
     window.location.href = "detail.html?value="+ i;
  }

/*新品首发*/
    /*先获取前三个，在页面中显示出来*/
$.getJSON("home.json",{},function (data) {
    for (var i = 0; i < 4; i++) {
        var arr = data.index[0].newpro[i];
        var html = ``;
         html = `<div class="col-sm-6 col-md-3">
                        <div class="product-grid thumbnail">
	                        <div class="product-image newtit">
	                            <a href="#" class="image ">
	                                <img class="pic-1" src="${arr.image}">
	                                <img class="pic-2" src="${arr.image}">
	                            </a>
	                            <span class="product-sale-label">Sale</span>
	                            <div class="product-button-group">
	                                <a href="#" class="add-to-wishlist">添加收藏</a>
	                                <a href="#" class="quick-view">快速查看</a>
	                            </div>
	                        </div>
	                        <div class="product-content caption">
	                            <h3><a href="#">${arr.title}</a></h3>
	                            <p>${arr.money}</p>
	                        </div>
	                    </div>
                    </div>`;
        $(".newproduct .row").append(html);
    }
},"json");

/*接着取后面的，每次点击按钮，往后取四个*/
var flag = 4;
$(".newproduct .more button").click(function () {
    $.get("./home.json",{},function (data) {
        for (var i = flag; i < flag + 4; i++) {
            var arr = data.index[0].newpro[i];
            var html = ``;
            html += `<div class="col-sm-6 col-md-3">
                        <div class="product-grid thumbnail">
	                        <div class="product-image newtit">
	                            <a href="#" class="image ">
	                                <img class="pic-1" src="${arr.image}">
	                                <img class="pic-2" src="${arr.image}">
	                            </a>
	                            <span class="product-sale-label">Sale</span>
	                            <div class="product-button-group">
	                                <a href="#" class="add-to-wishlist">添加收藏</a>
	                                <a href="#" class="quick-view">快速查看</a>
	                            </div>
	                        </div>
	                        <div class="product-content caption">
	                            <h3>${arr.title}</h3>
	                            <p>${arr.money}</p>
	                        </div>
	                    </div>
                    </div>`;
            $(".newproduct .row").append(html);
        }
        flag += 4;
    },"json");
});
/*时间*/
function time() {
    var data = new Date();
    var year = data.getFullYear();  //获取年
    var month = data.getMonth() + 1;    //获取月
    var day = data.getDate(); //获取日
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var time = year + "/" + month + "/" + day;
   return time;
}

/*公司新闻*/
/**/

$.getJSON("home.json",{},function (data) {
    for (var i = 0; i < 3; i++) {
        var arr = data.index[1].companynews[i];
        var html = ``;
        html += `<div class="news">
            <span>${time()}</span>
            <h3>${arr.tit}</h3>
            <p>${arr.contents}</p>
            <div class="feed zan" id="${"feed" + i}">
            <p class="love">查看详情>></p>
            <div class="heart" id="${"like" + i}" rel="like"></div>
            <div class="likeCount" id="${"likeCount" + i}">${12 * i + 5}</div>
            </div>    
        </div>`;
        $(".comnews").append(html);
    }
},"json");
var flag01 = 3;
$(".companynews .more button").click(function () {
    $.get("./home.json",{},function (data) {
        for (var i = flag01; i < flag01 + 3; i++) {
            var arr = data.index[1].companynews[i];
            var html = ``;
            html += `<div class="news">
            <span>${time()}</span>
            <h3>${arr.tit}</h3>
            <p>${arr.contents}</p>
            <div class="feed zan" id="${"feed" + i}">
            <p class="love">查看详情>></p>
            <div class="heart" id="${"like" + i}" rel="like"></div>
            <div class="likeCount" id="${"likeCount" + i}">${12 * i + 5}</div>
            </div> 
        </div>`;
            $(".comnews").append(html);
        }
        flag01 += 3;
    },"json");
});
/*标题的动画*/
$(window).scroll(function () {
    /*新品首发*/
    var scrollTop = parseInt($(window).scrollTop());
    console.log("scrollTop" + scrollTop);
    var offsetTop = parseInt($(".newproduct").offset().top);
    var num = offsetTop - scrollTop;
    if(num <= 468){
        $(".newproduct .tit").addClass("tit-slide-after");
    }else {
        $(".newproduct .tit").removeClass("tit-slide-after");
    }
    /*
    *  页面元素距离浏览器工作区顶端的距离 = 元素距离文档顶端偏移值 - 网页被卷起来的高度即：
       页面元素距离浏览器工作区顶端的距离 = DOM元素对象.offsetTop - document.documentElement.scrollTop */
    var offsetTop1 = parseInt($(".photo").offset().top);

    var num1 = offsetTop1 - scrollTop;

    if(num1 <= 531){
        $(".leftpic").addClass("leftpic-slider");

    }else {
        $(".leftpic").removeClass("leftpic-slider");
    }
    if(num1 <= 350){
        $(".text-box").fadeIn(1500);
        $(".text-box h3 span:first-child").animate({

        })
    }else {
        $(".text-box").fadeOut(1000);
    }

    /*公司新闻*/
    var newtop = parseInt($(".companynews").offset().top);
    console.log("newtop" + newtop);
    var num2 = newtop - scrollTop;
    console.log(num2);
    if(num2 <= 572){
        $(".companynews .tit").addClass("tit-slide-after");
    }else {
        $(".companynews .tit").removeClass("tit-slide-after");
    }


});
/*点赞*/

$('body').on("click",'.heart',function() {
    var A=$(this).attr("id");
    var B=A.split("like");
    var messageID=B[1];
    var C=parseInt($("#likeCount"+messageID).html());
    $(this).css("background-position","");
    var D=$(this).attr("rel");
    if(D === 'like')
    {
        $("#likeCount"+messageID).html(C+1);
        $(this).addClass("heartAnimation").attr("rel","unlike");
    }
    else
    {
        $("#likeCount"+messageID).html(C-1);
        $(this).removeClass("heartAnimation").attr("rel","like");
        $(this).css("background-position","left");
    }

});




