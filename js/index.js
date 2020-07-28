/*轮播图*/
$("#carousel-example-generic").on("slide.bs.carousel", function (obj) {
    // 当前轮播索引
    var index = $(this).find(".item").index(obj.relatedTarget);
    if(index == 0){
        alert(123)
        $(".nav h1 img").attr("src","img/logo01.png");
        $(".nav div img").attr("src","img/nav-top01.png");
        }else if(index == 1){
        $(".nav h1 img").attr("src","img/logo.png");
        $(".nav div img").attr("src","img/nav-top01.png");
    }else if(index == 2){
        $(".nav h1 img").attr("src","img/logo.png");
        $(".nav div img").attr("src","img/nav-top.png");
    }else if(index == 3){
        $(".nav h1 img").attr("src","img/logo.png");
        $(".nav div img").attr("src","img/nav-top.png");
         }else if(index == 4){
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
        html += `<div class="col-sm-6 col-md-3">
                <div class="thumbnail">
                    <div class="newtit">
                        <img src="${arr.image}" alt="newpro1">
                    </div>
                    <div class="caption">
                        <h3>${arr.title}</h3>
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
                <div class="thumbnail">
                    <div class="newtit">
                        <img src="${arr.image}" alt="newpro1">
                    </div>
                    <div class="caption">
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
/*公司新闻*/
/**/
$.getJSON("home.json",{},function (data) {
    for (var i = 0; i < 3; i++) {
        var arr = data.index[1].companynews[i];
        var html = ``;
        html += `<div class="news">
            <span>${arr.time}</span>
            <h3>${arr.tit}</h3>
            <p>${arr.contents}</p>
            <button class="newmore"></button>
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
            <span>${arr.time}</span>
            <h3>${arr.tit}</h3>
            <p>${arr.contents}</p>
            <button class="newmore"></button>
        </div>`;
            $(".comnews").append(html);
        }
        flag01 += 3;
    },"json");
});


