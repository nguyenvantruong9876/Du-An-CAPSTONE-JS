function SanPhamService() {
    // chữa các phương thức giao tiếp với api ( restful API: GET, POST, PUT, DELETE)
    // axios: truyện vào đối tượng chứa các thông tin kết nối API
    // method phương thức giao tiếp
    // url : đường dẫn API
    // trả về đối tượng promise (chứa các phương thúc xử lý thành công "then", thất bại "catch")
    this.getProductList = function () {

        var promise = axios({
            method: 'get',
            url: 'https://62ee1290a785760e67737090.mockapi.io/Products',

        });
        return promise;

    }
    this.addProduct = function (sp) {
        console.log(sp);
        // data nhận vào kiểu đối tượng, chính là dữ liệu cần lưu đổi với BE
        return axios({
            method: 'post',
            url: 'https://62ee1290a785760e67737090.mockapi.io/Products',
            data: sp 
        });
    }
    this.deleteProduct = function (id) {
        console.log(id);
        return axios({
            method: 'delete',
            url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,

        });
       
    }
    this.getProductDetail = function (id) {
        return  axios({
            method: 'get',
            url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,

        });
        
    }
    this.updateproduct = function (id, sp) {
        console.log(id);
        return axios({
            method: 'put',
            url: `https://62ee1290a785760e67737090.mockapi.io/Products/${id}`,
            data: sp
        });
       
    }
}