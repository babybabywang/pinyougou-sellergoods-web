app.controller('brandController', function ($scope, brandService,$controller) {
    //$controller('baseController',{$scope:$scope});//继承
    $scope.findBrandAll = function () {
        brandService.findBrandAll().success(function (response) {
            if (response.code==200)
            {
                alert(response.message)
            }
            $scope.list = response;
        })
    }
})