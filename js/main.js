/*导航条*/
var nav = document.getElementsByClassName("nav-top")[0];
nav.onclick = function () {
    var navlist = document.getElementById("navlist");
    navlist.style.display = "block";
};
var close = document.getElementById("nav-close");
close.onclick = function () {
    var navlist = document.getElementById("navlist");
    navlist.style.display = "none";
};
var showpro = document.getElementsByClassName("nav-pro")[0];
var first = document.getElementById("nav-first");
var li = first.getElementsByTagName("li")[1];
/*鼠标移入*/
showpro.onmouseenter = function () {
    var secondlist = document.getElementById("nav-second");
    secondlist.style.display = "block";
    showpro.classList.add("nav-prodown");
    showpro.classList.remove("nav-pro");
};
/*鼠标移出*/
showpro.onmouseleave = function () {
    var secondlist = document.getElementById("nav-second");
    secondlist.style.display = "none";
    showpro.classList.add("nav-pro");
    showpro.classList.remove("nav-prodown");
};





