function Carosel() {
    return `\n  <div class='banner'>\n  
    \n  <div class='main-cart' >${DisplayProduct()}</div>\n 
    \n  <div class='nav'>\n   
    
        <button><i class='fas fa-shopping-cart' style='font-size:3rem;'></i></button>\n    
        <span class= 'total-qty'></span>
    \n  </div>
    \n  <div  class='cover'></div>
    \n  <div class='cover purchase-cover'></div>
    \n  <div class='cart'></div>
    \n  <div class='stock-limit'>
        
    \n  </div>
    \n  <div  class='order-now'></div>\n  </div>`
}

function Product(sp = {}) {
    var { name: n, price: p, screen: s, img: i, backCamera: bc, frontCamera: fc, desc: d, type: t } = sp;
    return `\n  <div class='card'>
                    \n <div class='top-bar'>\n      
                    <i class='fab fa-apple'></i>\n      
                    <em class="stocks">In Stock</em>
            \n  </div>
            \n  <div class='img-container'>\n  
                    <img class='product-img' src='${i}' alt='' />\n  
                    <div class='out-of-stock-cover'>
                    <span>Out Of Stock</span></div>
            \n  </div>
            \n   <div class='details'>\n    
                    <div class='name-fav'>\n    
                        <strong class='product-name'>${n}</strong>\n      
                        <button class='heart'><i class='fas fa-heart'></i></button>\n    
                    </div>\n     
                    <div class='wrapper'>\n       
                             
                        <p>${d}</p>\n  
                        <p>${s}</p>\n  
                        <p>${bc}</p>\n  
                        <p>${fc}</p>\n   
                    </div>\n    
                    \n  <div class='type'>\n  
                   
                    <select class="form-control" id="thuonghieu">${t}
									<option>Chọn Thương hiệu</option>
									<option>iphone</option>
									<option>Samsung</option>
					</select>
                    
            \n  </div>
                    <div class='purchase'>\n     
                        <p class='product-price'>$ ${p}</p>\n   
                        <span class='btn-add'></span>\n  
                    </div>\n   
                </div>
            \n  </div>`
}

function DisplayProduct() {
    return productDetails.map(sp => Product(sp)).join("")
}
const productDetails = [{
    name: "iphoneX",
    price: "1000",
    screen: "screen 68",
    backCamera: "2 camera 12 MP",
    frontCamera: "7 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
    desc: "Thiết kế mang tính đột phá",
    type: "iphone"
}, {
    name: "Samsung Galaxy M51 ",
    price: "35",
    screen: "screen 69",
    backCamera: " Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
    frontCamera: " 32 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
    type: "Samsung"
}, {
    name: "Samsung Galaxy M22",
    price: "45000",
    screen: "screen 70",
    backCamera: "Chính 12 MP & Phụ 64 MP, 12 MP",
    frontCamera: " 32 MP",
    img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
    desc: "Thiết kế mang tính đột phá",
    type: "Samsung"
}, {
    name: "Iphone 11",
    price: "1000",
    screen: "screen 54",
    backCamera: "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
    frontCamera: "32 MP",
    img: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
    desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
    type: "Iphone"
},], cartDetails = [];



function App() {
    return `\n  <div>\n    ${Carosel()}\n  </div>`
}
document.getElementById("root").innerHTML = App();