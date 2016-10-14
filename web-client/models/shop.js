'use strict';
spaApp_shop.factory("services", ['$http','$location','$route', 
	function($http,$location,$route) {
    var obj = {};
    obj.getProducts = function(){
        return $http.get(productBase + 'products');
    }	
    obj.getOrders = function(){
        return $http.get(productBase + 'orderrs');
    }	

	obj.createProduct = function (create) {
		return $http.post( productBase + 'products', create )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/shop/index');			
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/shop/create')
		}
	};
	obj.createOrder = function (order) {
		return $http.post( productBase + 'orderrs', order )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/shop/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/shop/order')
		}
	};

	obj.updateCart = function (product) {
	    return $http.put(productBase + 'orders/' + product.id, product )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/shop/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/shop/create/')
		}	
	};
    return obj;   
}]);