function SanPhamService() {
  
    this.getProductListIP = function () {

        return axios({
            method: 'get',
            url: 'https://62ee1290a785760e67737090.mockapi.io/Products',
           
          });
            
           
        

    }
    // this.addProduct = function (sp) {
    //     console.log(sp);
   
    //     return axios({
    //         method: 'post',
    //         url: `https://62ee1290a785760e67737090.mockapi.io/Products`,
    //         data: sp 
    //     });
    // }
    // this.deleteProduct = function (id) {
        
    //     return axios({
    //         method: 'delete',
    //         url: `https://62ee1290a785760e67737090.mockapi.io/Products`,

    //     });
       
    // }
    // this.getProductDetail = function (id) {
    //     return  axios({
    //         method: 'get',
    //         url: `https://62ee1290a785760e67737090.mockapi.io/Products`,

    //     });
        
    // }
    // this.updateproduct = function (id, sp) {
     
    //     return axios({
    //         method: 'put',
    //         url: `https://62ee1290a785760e67737090.mockapi.io/Products`,
    //         data: sp
    //     });
       
    // }
}