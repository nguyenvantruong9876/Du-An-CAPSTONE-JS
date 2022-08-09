//global
var spService = new SanPhamService();
var validation = new Validation();

function getProductList() {
    spService
        .getProductList()
        .then(function (restful) {
            // thành công
            console.log(restful);
            // hiện thị len table
            showTable(restful.data);
        })
        .catch(function (error) {
            // thất bại
            console.log(error);
        });
    // nếu gọi showTable() nằm ngoài then => Bất đồng bộ dữ liệu
    // tHì hiện thi showTable sẽ bị thực thi trước khi lấy được data
    // sai nghiệp vụ
}
getProductList();
function showTable(mangSP) {
    var content = "";
    var stt = 1;
    mangSP.map(function (sp) {
        content += `
        <tr>
        
            <td>${stt++}</td>
            <td>${sp.name}</td>
            <td>${sp.price}</td>
            <td>${sp.screen}</td>
            <td>${sp.backCamera}</td>
            <td>${sp.frontCamera}</td>
            <td>${sp.img}</td>
            <td>${sp.desc}</td>
            <td>${sp.type}</td>
            <td>
                <button  data-toggle="modal"
                data-target="#myModal" class="btn btn-info " onclick="getProductDetail('${sp.id}')">Xem</button>
                <button class="btn btn-danger" onclick="deleteProduct('${sp.id}')">Xõa</button>
            </td>
        </tr>
        `;
    });
    document.getElementById("tblDanhSachSP").innerHTML = content;
}
function handleFOrm() {
    document.querySelector("#myModal .modal-footer").innerHTML = `
        <button class="btn btn-info" onclick="addProduct()">Add</button>
            
    `;
    //khi dùng hàm reset()=> chỉ dùng được thẻ forrm
    var formELE = document.querySelectorAll("#myModal .form-control");
    console.log(formELE);
    //map() => chỉ dùng với array
    //formELE => NodeLIst => dùng for
    for (var i = 0; i < formELE.length; i++) {
        formELE[i].value = "";

    }
}
document.querySelector("#btnThemSP").onclick = handleFOrm;
async function addProduct() {
    var name = document.querySelector("#TenSP").value;
    var price = document.querySelector("#GiaSP").value;
    var screen = document.querySelector("#manhinhsp").value;
    var backCamera = document.querySelector("#camSauSP").value;
    var frontCamera = document.querySelector("#camtruocSP").value;
    var img = document.querySelector("#HinhSP").value;
    var desc = document.querySelector("#motaSP").value;
    var type = document.querySelector("#ThuongHieuSP").value;
    var sp = new SanPham(name, price, screen, backCamera, frontCamera, img, desc, type);
    console.log(sp);
    // Fetch với API để truyền data sp mới xuống BE

    var isValid = true;
    
    isValid &= validation.checkEmpty(name, "tbname", "Chố này không được để trống");
    isValid &= validation.checkEmpty(price, "tbgia", "Chố này không được để trống") && validation.checkscore(price, "tbgia", "giá sản phẩm phải là số");
    isValid &= validation.checkEmpty(screen, "tbmanhinh", "Chố này không được để trống");
    isValid &= validation.checkEmpty(backCamera, "tbcamsau", "Chố này không được để trống");
    isValid &= validation.checkEmpty(frontCamera, "tbcamtruoc", "Chố này không được để trống");
    isValid &= validation.checkEmpty(img, "tbhinhanh", "Chố này không được để trống");
    isValid &= validation.checkEmpty(desc, "tbmota", "Chố này không được để trống");
    isValid &= validation.checkEmpty(type, "tbthuonghieu", "Chố này không được để trống");

    if (isValid) {
        try {
            //xử lý thành công
            var response = await fetch('https://62ee1290a785760e67737090.mockapi.io/Products',
                {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sp),
    
                });
            var data = await response.json();
            console.log(data);
            document.querySelector("#myModal .close").click();
            getProductList();
        } catch (error) {
            // thất bại
            console.log(error);
        }
    }

    

}
function deleteProduct(id) {
    spService.deleteProduct(id)
        .then(function (result) {
            //thành công
            console.log(result);

            getProductList();

        }).catch(function (error) {
            //thất bại
            console.log(error);
        });
}
function getProductDetail(id) {
    spService.getProductDetail(id)

        .then(function (result) {
            //thành công
            console.log(result.data);
            document.querySelector("#TenSP").value = result.data.name;
            document.querySelector("#GiaSP").value = result.data.price;
            document.querySelector("#manhinhsp").value = result.data.screen;
            document.querySelector("#camSauSP").value = result.data.backCamera;
            document.querySelector("#frontCamera").value = result.data.frontCamera;
            document.querySelector("#HinhSP").value = result.data.img;
            document.querySelector("#motaSP").value = result.data.desc;
            document.querySelector("#ThuongHieuSP").value = result.data.type;

            document.querySelector("#myModal .modal-footer").innerHTML = `
        <button class="btn btn-info" onclick="updateproduct('${result.data.id}')">Update</button>
            
    `;

        }).catch(function (error) {
            //thất bại
            console.log(error);
        });
}
function updateproduct(id) {
    var name = document.querySelector("#TenSP").value;
    var price = document.querySelector("#GiaSP").value;
    var screen = document.querySelector("#manhinhsp").value;
    var backCamera = document.querySelector("#camSauSP").value;
    var frontCamera = document.querySelector("#camtruocSP").value;
    var img = document.querySelector("#HinhSP").value;
    var desc = document.querySelector("#motaSP").value;
    var type = document.querySelector("#ThuongHieuSP").value;
    var spupdate = new SanPham(name, price, screen, backCamera, frontCamera, img, desc, type);
    console.log(spupdate);
    spService.updateproduct(id, spupdate)
        .then(function (result) {
            //thành công
            console.log(result);
            document.querySelector("#myModal .close").click();
            //load lại table ddwwe hiện thị nội dung
            getProductList();


        }).catch(function (error) {
            //thất bại
            console.log(error);
        });
}
