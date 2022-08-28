
var spService = new SanPhamService();
var productlist = [];
var typeSP = [];
var cart = [];
var clearcart =[];
let quantity = 0;
function getProductList() {
    spService.getProductListIP()
        .then(function (result) {
            productlist = result.data;
            showTable(productlist);
        })
        .catch(function (error) {

            console.log(error);
        });

}
getProductList();
function showTable(mangSP) {
    var content = "";
    mangSP.map(function (sp) {
        content += `
          <div class='card'> 
                <div class='top-bar'>      
                    <i class='fab fa-apple'></i>   
                    <em class="type">${sp.type}</em>
                </div>
                <div class='img-container'>
                    <img class='product-img' src='${sp.img}' alt='' />  
          
                </div>
               
                <div class='details'>  
                    <div class='name-fav'>    
                        <strong class='product-name'>${sp.name}</strong>   
                        <button class='heart'><i class='fas fa-heart'></i></button> 
                    </div>   
                    <div class='Parameter'>      
                             
                        <p>${sp.desc}</p>  
                        <p>${sp.screen}</p>
                        <p>${sp.backCamera}</p>
                        <p>${sp.frontCamera}</p>
                    </div>  
                   
                    <div class='purchase'>  
                        <p class='product-price'>$ ${sp.price}</p>  
                        <span class='btn-add'>
                            <button onclick='addproducts("${sp.id}")' class='add-btn'>Add<i class='fas fa-chevron-right'></i></button> 
                        </span>
                    </div> 
                </div>
             </div>
        `;
    });
    document.getElementById("itemCart").innerHTML = content;
}



// tách ra dây cái hàm render sp

function showCart() {
    var content = "";
    content += `
          <div id='mincard'>
                <div id="itemCart">
                </div>
                <div class='nav'> 
                    
                    <button onclick="showshopCart()"><i class='fas fa-shopping-cart' style='font-size:3rem;'></i></button>  
                    <span class= 'total'>0</span>
                </div>
                
                <select name="" id="type" onchange="showtype()" class="form-control" style="width: 20%;">
                    <option value="all">Tất cả</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Samsung">Samsung</option>
                </select>

                <div class='side-nav' id='side-nav' > 
                    <button onclick="closeCart()" ><i class='fas fa-times'></i></button> 
                     
                     <h2>Cart</h2>   
                     <div id="spShop">
                       <span class="empty-cart">The Cart</span>
                     </div>
                     <div class='final'>   
                        <strong>Total: $ <span class="total"></span></strong>
                        <div class='action'>     
                            <button onclick='' class='btn buy'>Purchase <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
                            <button onclick='' class='btn clear'>Clear Cart <i class='fas fa-trash' style='color:#bb342f;'></i></button>
                        </div>  
                    </div>
                 </div>
                
                
             </div>
        `;
    document.getElementById("IDproduct").innerHTML = content;
}
showCart()


function showtype() {
    var typeSP = [];
    var search = document.querySelector('#type').value;
    console.log(search);
    if (search == "Iphone") {
        for (let i = 0; i < productlist.length; i++) {
            if (productlist[i].type == "Iphone") {

                typeSP.push(productlist[i])
                showTable(typeSP);
                console.log(1)
            }
        }
    }
    else if (search == "Samsung") {
        for (let i = 0; i < productlist.length; i++) {
            if (productlist[i].type == "Samsung") {
                typeSP.push(productlist[i])
                showTable(typeSP);
                console.log(typeSP)
                console.log(2)
            }
        }
    }
    else {
        showTable(productlist)

    }
}


function addproducts(id) {
    var sp = productlist.find(function (item) {
        return item.id === id
    })
    console.log("🚀 ~ file: main.js ~ line 121 ~ sp ~ sp", sp)
    if (sp) {

        var spPush = cart.findIndex(function (index) {
            index.id === sp.id

        })
        if (spPush == -1) {
            cart.push(sp);
            console.log("🚀 ~ file: main.js ~ line 136 ~ addproducts ~ spPush", cart)
        }
        else {
            // cart.quantity++

        }



    }
    setlocalstorage();
    getlocalstorage();

}
function renderCartShop(cart) {
    var content = "";
    console.log(cart)
    cart.map(function (sp) {
        content += `
        <tr>
                <div class="cart-item">
                    <td ><img src="${sp.img}"></td>
                    <div class="name-cart">${sp.name} </div>
                    <div class="cart-action>
                       
                        <button class="btn-quantity" >
                        
                            <i class="fa-solid fa-chevron-left" onclick="nutGiam('${sp.id}')"></i>
                        </button> 
                            <span class="sl-phone"> ${sp.quantity}</span>
                        <button class="btn-quantity" >
                            <i class="fa-solid fa-chevron-right" onclick="nutTang('${sp.id}')" ></i>
                        </button>
                       
                        <button class="btn-delete" onclick="removerCart()"><i class="fa-solid fa-trash"></i></button>
                    
                        <div class="cart-total" >$${sp.price * sp.quantity} </div>
                       
                    </div>
                </div>
            
        </tr>
        `

        console.log(content)
    });
    document.getElementById("spShop").innerHTML = content;


}
function removerCart() {
    clearcart = [];
    setlocalstorage();
    getlocalstorage();
}


function showshopCart(){
    document.getElementById("side-nav").style.right = "0";
}

function closeCart(){
    document.getElementById("side-nav").style.right ="-100%";
}

function setlocalstorage() {

    localStorage.setItem("Products", JSON.stringify(cart));
}
function getlocalstorage() {
    if (localStorage.getItem("Products") != undefined) {
        cart = JSON.parse(localStorage.getItem("Products"));
    }
    renderCartShop(cart)

}
getlocalstorage();