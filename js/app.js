import { data } from "../data.module.js"

console.log(data) // через Лив сервер работает!

console.log(data[0].name) // Sony Ericsson T68i

console.log(data[0].priceRu) // 7750 руб

console.log('--------------')

for (let key in data) {
    console.log(data[key].name) // все нэймы
    console.log(data[key].icon1) // все нэймы
}

let catalog = document.querySelector('.catalog2')
let out = ''

for (let key in data) {
    out += `<div class="block">`
        out += `<h3>${data[key].name}</h3>`
        out += `<div class="top-block">`
            out += `<div class="text">${data[key].text}</div>`
            out += `<img class="telephone" src="img/${data[key].img}">`
        out += `</div>`
        out += `<div class="middle-block">`
            out += `<button class="price" data-title="Цены 2003 года">${data[key].priceUs}</button>`
            out += `<button class="price" data-title="Цены 2003 года">${data[key].priceRu}</button>`
        out += `</div>`
        out += `<div class="bottom-block">`
            out += `<div class="characteristics">`
              out += `<img class="icon-img" src="img/icons/${data[key].icon1}.jpg" alt="icon">`
              out += `<div class="char">${data[key].weight}</div>`
            out += `</div>`
            out += `<div class="characteristics">`
              out += `<img class="icon-img" src="img/icons/${data[key].icon2}.jpg" alt="icon">`
              out += `<div class="char">${data[key].dimensions}</div>`
            out += `</div>`
            out += `<div class="characteristics">`
              out += `<img class="icon-img" src="img/icons/${data[key].icon3}.jpg" alt="icon">`
              out += `<div class="char">${data[key].workingHours}</div>`
            out += `</div>`
            out += `<div class="characteristics">`
              out += `<img class="icon-img" src="img/icons/${data[key].icon4}.jpg" alt="icon">`
              out += `<div class="char border-none">${data[key].batteryType}</div>`
            out += `</div>`
        out += `</div>`
        out += `<div class="footer">`
            out +=  `<img class="icon-img" src="img/icons/${data[key].icon5}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon6}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon7}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon8}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon9}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon10}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon11}.jpg" alt="&nbsp;">`
            out += `<img class="icon-img" src="img/icons/${data[key].icon12}.jpg" alt="&nbsp;">`
        out += `</div>`
        out += `<div class="advertising">`
            out += `<div class="advertising-top">При &nbsp;подключении &nbsp;значительные &nbsp;скидки</div>`
            out += `<div class="advertising-bottom"><span>см.</span> ЭКОНОМ-ПЛАН</div>`
        out += `</div>`
    out += `</div>`
}

 catalog.innerHTML = out

