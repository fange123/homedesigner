$("#photo").on("mouseover","img",function () {
    $(this).css({width:150,marginTop:-30});
    $(this).siblings().find("img").css({width: 30});
});
$("#photo").on("mouseout","img",function () {
    $(this).css({width:90,marginTop:-30});
});
// <p></p>
$(".words1").lbyl({
    content: "我们是谁？",
    speed: 200,
    type: 'show',
    finished: function(){
        $('.words2').lbyl({
            content:"做一个有品质、有艺术的家居品牌是Fange的一生追求，是最核心的价值观。珍惜品牌的荣誉，用心为他们设计、生产出最优质的的产品，并提供真诚的服务，做一个有品质、有气质、有艺术、受人喜欢爱戴尊敬的家居品牌。",
            speed: 100,
            type: 'fade',
            fadeSpeed: 500
        })
    } // Finished Callback
});
$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = parseInt($(".contactbg").offset().top);
    var num = offsetTop - scrollTop;
    console.log("num"+num);
    if(num < 430 && scrollTop < 360){

            $(".words3").lbyl({
                content: "我们能做什么？",
                speed: 200,
                type: 'show',
                finished: function(){
                    $('.words4').lbyl({
                        content:"做一个有品质、有艺术的家居品牌是Fange的一生追求，是最核心的价值观。珍惜品牌的荣誉，用心为他们设计、生产出最优质的的产品，并提供真诚的服务，做一个有品质、有气质、有艺术、受人喜欢爱戴尊敬的家居品牌。。",
                        speed: 100,
                        type: 'fade',
                        fadeSpeed: 500
                    })
                }
            });
    }
});
