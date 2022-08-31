
var spService = new SanPhamService();
var productlist = [];
var typeSP = [];
var cart = {quantity: 0, total: 0, data: []};

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
                    <i class="fa-solid fa-cannabis"></i> 
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
                            <button  class='add-btn' onclick="addproducts('${sp.id}')">Add To Cart<i class='fas fa-chevron-right'></i></button> 
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
                    <span class= 'totalicon'id="quantity" ></span>
                </div>
                
                <select name="" id="type" onchange="showtype()" class="form-control" style="width: 15%;">
                    <option value="all">Tất cả</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Samsung">Samsung</option>
                </select>

                <div class='side-nav' id='side-nav' > 
                    <button onclick="closeCart()"  ><i class='fas fa-times'></i></button> 
                     
                     <h2>Cart</h2>   
                    <div id="spShop">
                       <span class="empty-cart">The Cart</span>
                    </div>
                    <div class='final'>  

                        <strong>Total: $ <span class="total">0</span></strong>
                       
                        <div class='action'>     
                            <button onclick='' class='btn buy'>Thanh Toán <i class='fas fa-credit-card' style='color:#6665dd;'></i></button>
                            <button onclick="clearCart() " class='btn clear'>Xõa Giỏ hàng <i class='fas fa-trash' style='color:#bb342f;'></i></button>
                        </div>  
                    </div>
                </div>
           
                
                
             </div>
        `;
    document.getElementById("IDproduct").innerHTML = content;
}
showCart()


function showtype() {
    let typeSP = [];
    let search = document.querySelector('#type').value;
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
    let sp = productlist.find(function (item) {
        return item.id === id;
    })

    if (sp) {

        let spPush = cart.data.findIndex(function (index) {
            index.id === sp.id;

        })
        if (spPush == -1) {
            cart.data.push(sp);
            cart.quantity++;
            
        }
        else{
            cart.data[spPush].quantity++;
        }
        cart.total += Number(sp.price);

    }
    setlocalstorage();
    getlocalstorage();


}

function renderCartShop(cart) {
    console.log(cart)
    var content = "";

    cart.data.map(function (sp) {
        content += `
        <tr>
                <div class="cart-item">
                    <td ><img src="${sp.img}"></td>
                    <div class="name-cart">${sp.name} </div>
                    <div class="cart-action>
                       
                        <button class="btn-quantity" >
                        
                            <i class="fa-solid fa-chevron-left" onclick=""></i>
                        </button> 
                            <span class="sl-phone"> ${sp.quantity}</span>
                        <button class="btn-quantity" >
                            <i class="fa-solid fa-chevron-right" onclick="" ></i>
                        </button>
                       
                        <button class="btn-delete" onclick=""><i class="fa-solid fa-trash"></i></button>
                    
                        <div  class="cart-total"> $${sp.price * sp.quantity} </div>
                       
                    </div>
                </div>
            
        </tr>
        `

        
    });
    document.getElementById("spShop").innerHTML = content;


}
function clearCart() {
    cart = { quantity: 0, total: 0, data: [] };
    setlocalstorage();
    getlocalstorage();
}
function totalItem(total) {
    
    document.querySelector(".total").innerHTML = total.toLocaleString();
}
function congTotal(){
    document.getElementById("quantity").innerHTML = cart.quantity;
}


function showshopCart() {
    document.getElementById("side-nav").style.right = "0";
}

function closeCart() {
    document.getElementById("side-nav").style.right = "-100%";
}

function setlocalstorage() {

    localStorage.setItem("Products", JSON.stringify(cart));
}
function getlocalstorage() {
    if (localStorage.getItem("Products") != undefined) {
        cart = JSON.parse(localStorage.getItem("Products"));
    }
    renderCartShop(cart);
    congTotal(cart);
    totalItem(cart.total);

}
getlocalstorage();