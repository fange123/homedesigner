$.get("home.json",{},function (data) {
    var $data1 = data.about[1];
    $(".about-us").html(`
        <h2 class="ex2">${$data1.ourdesinger[0].title}</h2>
        <p>${$data1.ourdesinger[0].contents}</p>
    `);

},"json");

$('.abouttext .ex2').textyle({
    duration : 400,
    delay : 100,
    easing : 'swing',
    callback : function(){
        $(this).css({
            color : 'black',
            transition : '1s',
        });
        $('.desc').css('opacity',1);
    }
});
$(".abouttext p").fadeIn(3000);

$(window).scroll(function () {
    var scrollTop = parseInt($(window).scrollTop());
    var offsetTop = $(".ourdesigner").offset().top;
    var num = offsetTop - scrollTop;
    console.log(num);
    if(num < 600){
        $(".ourdesigner .tit").addClass("tit-slidetop-after");
    }else {
        $(".ourdesigner .tit").removeClass("tit-slidetop-after");
    }
    if(num < 0){
        $('.ourdesigner .ex2').textyle({
            duration : 400,
            delay : 100,
            easing : 'swing',
            callback : function(){
                $(this).css({
                    color : '#000',
                    transition : '1s'
                });
            }
        });
        $(".about-us p").fadeIn(3000);
    }
});
$(".about_first").mouseover(function () {

  $(this).addClass("about-slider");
  $(".abouttext").addClass("textslide");
});
/*左右箭头*/
$(".leftbtn").click(function () {
    $(".leftbtn").css({
        background:'url(img/despointright01.png)'
    });
    $(".rightbtn").css({
        background:"url('img/despoin-left01.png')"
    });

});
$(".rightbtn").click(function () {
    $(".leftbtn").css({
        background:'url(\'img/despoin-left.png\')'
    });
    $(".rightbtn").css({
        background:"url(img/despointright.png)"
    });

});
