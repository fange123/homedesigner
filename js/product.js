/*我们的产品*/
$.get("home.json",{},function (data) {

    for (var i = 0; i < 4; i++) {
       var arr = data.product[1].products[i];
        var html = ``;
        html += `<div>
                <div >
                <img src="${arr.image}" alt="产品">
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
        console.log(arr1.image);
        var html = ``;
        html += `<div>
                <div >
                <img src="${arr1.image}" alt="产品">
            </div>
              <h3>${arr1.name}</h3>
             <p>${arr1.money}</p>
            </div>`;
        $(".pro02").append(html);
    }
},"json");