
function Carosel() {
    return `\n  <div class='banner'>\n  
    \n  <div class='main-cart'></div>\n 
    \n  <div class='nav'>\n   
        <button onclick='sideNav(1)'><i class='fas fa-shopping-cart' style='font-size:2rem;'></i></button>\n    
        <span class= 'total-qty'></span>
    \n  </div>
    \n  <div onclick='sideNav(0)' class='cover'></div>
    \n  <div class='cover purchase-cover'></div>
    \n  <div class='cart'></div>
    \n  <div class='stock-limit'>
        
    \n  </div>
    \n  <div  class='order-now'></div>\n  </div>`
}

// function Product(sp={}) {
//     var {name: n, price: p, imageUrl: i, heading: h, des: d} = sp;
//     return `\n  <div class='card'>
//                 \n    <div class='top-bar'>\n      <i class='fab fa-apple'></i>\n      <em class="stocks">In Stock</em>\n    </div>
//                 \n    <div class='img-container'>\n      <img class='product-img' src='${i}' alt='' />\n      <div class='out-of-stock-cover'><span>Out Of Stock</span></div>\n    </div>
//                 \n    <div class='details'>\n      <div class='name-fav'>\n        <strong class='product-name'>${n}</strong>\n        <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>\n      </div>\n      <div class='wrapper'>\n        <h5>${h}</h5>\n        <p>${d}</p>\n      </div>\n      <div class='purchase'>\n        <p class='product-price'>$ ${p}</p>\n        <span class='btn-add'>${AddBtn()}</span>\n      </div>\n    </div>
//             \n  </div>`
// }

function App() {
    return `\n  <div>\n    ${Carosel()}\n  </div>`
}
document.getElementById("root").innerHTML = App();