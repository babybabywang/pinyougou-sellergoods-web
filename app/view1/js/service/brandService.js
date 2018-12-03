app.service('brandService',function ($http) {

    this.findBrandAll=function () {
        return $http.get('http://localhost:9999/apisellergoods/tbBrand/findAllBrands');
    }
})