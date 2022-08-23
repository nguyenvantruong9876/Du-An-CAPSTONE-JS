
var spService = new SanPhamService();
var productlist = [];
var typeSP=[];
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
                        <span class='btn-add'></span>
                    </div> 
                </div>
             </div>
        `;
    });
    document.getElementById("itemCart").innerHTML = content;
}



// tách ra dây cái hàm render sp

function showCart(){
    var content = "";
        content += `
          <div id='mincard'>
                <div id="itemCart">
                </div>
                <div class='nav'> 
                    
                    <button><i class='fas fa-shopping-cart' style='font-size:3rem;'></i></button>\n    
                    <span class= 'total-qty'></span>
                </div>
                
                <select name="" id="type" onchange="showtype()" class="form-control" style="width: 20%;">
                    <option value="all">Tất cả</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Samsung">Samsung</option>
                </select>
                
                
             </div>
        `;
        document.getElementById("IDproduct").innerHTML = content;
    }
showCart()


function showtype() {
   var typeSP= [];
    var search = document.querySelector('#type').value;
    console.log(search);
    if(search == "Iphone"){
        for (let i = 0; i < productlist.length; i++) {
            if(productlist[i].type =="Iphone"){

                typeSP.push(productlist[i])
                showTable(typeSP);
                console.log(1)
            }
        }
    }
    else if(search == "Samsung"){
        for (let i = 0; i < productlist.length; i++) {
            if(productlist[i].type =="Samsung"){
                typeSP.push(productlist[i])
                showTable(typeSP);
                console.log(typeSP)
                console.log(2)
            }
        }
    }
    else{
        showTable(productlist)
        console.log(3)
    }
}
function showcartitem(){
    
}