/*获取当前url的value值*/
function getValue() {
    var localurl = $(location).attr("href");
    var value = localurl.substr(localurl.length - 1, localurl.length);
    return value;
}
/*轮播图*/
$("#carousel-example-generic").on("slide.bs.carousel", function (obj) {

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
            <div class="buynow fl"><button>购买</button></div>`);
        }else if(index == 1){
            var banner02 = data.detail[1].banner02[0];
            $(".delbuy").html(`
            <h3>${banner02.buy.title}</h3>
            <span class="money">${banner02.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #949da6"></span><span style="background-color: #968a7f"></span><span style="background-color: #f3efec"></span></div>
            <p class="text">${banner02.buy.contents}</p>
            <div class="buynow fl"><button>购买</button></div>`);
        }else if(index == 2){
            var banner03 = data.detail[2].banner03[0];
            $(".delbuy").html(`
            <h3>${banner03.buy.title}</h3>
            <span class="money">${banner03.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #e2dcc6"></span><span style="background-color: #c9c7b8"></span><span style="background-color: #c8cac7"></span></div>
            <p class="text">${banner03.buy.contents}</p>
            <div class="buynow fl"><button>购买</button></div>`);
        }
    },"json");
});
