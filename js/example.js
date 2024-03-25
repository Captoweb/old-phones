function goodsOut() {
    // вывод товаров на главную страницу
    //let goods = JSON.parse(data);
    //goods = JSON.stringify(data);
    //console.log(data);
	
    let out = '';
    for (let key in cat) {
       // console.log(cat);
        out += `<a href="${cat[key].href}">`;
        out +='<div class="category-card">';
        out +=`<h3 class="category-name">${cat[key].catName}</h3>`;
        out +=`<img class="category-img" src="images/category/${cat[key].catImg}" alt="category">`;
        out +='</div>';
        out += `</a>`;
    }
    $('.setka').html(out);
    $('.add-to-cart').on('click', addToCart);
}