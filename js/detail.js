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
            <p class="text">${banner01.buy.contents}</p>`);
        }else if(index == 1){
            var banner02 = data.detail[1].banner02[0];
            $(".delbuy").html(`
            <h3>${banner02.buy.title}</h3>
            <span class="money">${banner02.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #949da6"></span><span style="background-color: #968a7f"></span><span style="background-color: #f3efec"></span></div>
            <p class="text">${banner02.buy.contents}</p>`);
        }else if(index == 2){
            var banner03 = data.detail[2].banner03[0];
            $(".delbuy").html(`
            <h3>${banner03.buy.title}</h3>
            <span class="money">${banner03.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #004f89"></span><span style="background-color: #2d1b19"></span><span style="background-color: #cec7cb"></span><span style="background-color: #c5b7ae"></span></div>
            <p class="text">${banner03.buy.contents}</p>`);
        }else if(index == 3){
            var banner04 = data.detail[3].banner04[0];
            $(".delbuy").html(`
            <h3>${banner04.buy.title}</h3>
            <span class="money">${banner04.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #3b3358"></span><span style="background-color: #63401a"></span><span style="background-color: #ae4e3b"></span><span style="background-color: #ca8f2f"></span><span style="background-color: #050505"></span><span style="background-color: #b9aca4"></span></div>
            <p class="text">${banner04.buy.contents}</p>`);
        }else if(index == 4){
            var banner05 = data.detail[4].banner05[0];
            $(".delbuy").html(`
            <h3>${banner05.buy.title}</h3>
            <span class="money">${banner05.buy.money}</span>
            <div class="span">颜色组成<span style="background-color: #555a6c"></span><span style="background-color: #010101"></span><span style="background-color: #e1dddb"></span></div>
            <p class="text">${banner05.buy.contents}</p>`);
        }
    },"json");
});
