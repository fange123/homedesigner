$("#photo").on("mouseover","img",function () {
    $(this).css({width:150,marginTop:-30});
    $(this).siblings().find("img").css({width: 30});
});
$("#photo").on("mouseout","img",function () {
    $(this).css({width:90,marginTop:-30});
});