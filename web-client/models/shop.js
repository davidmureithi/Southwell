'use strict';
spaApp_shop.factory("services", ['$http','$location','$route', 
	function($http,$location,$route) {
    var obj = {};
    obj.getProducts = function(){
        return $http.get(productBase + 'products');
    }	
    obj.getOrders = function(){
        return $http.get(productBase + 'orders');
    }	

	obj.createProduct = function (product) {
		return $http.post( productBase + 'products', product )
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

	obj.createOrder = function (product) {
		return $http.post( productBase + 'orders', product )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/shop/order');			
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

	obj.updateOrder = function (order) {
	    return $http.put(productBase + 'orders/' + order.id, order )
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$location.path('/shop/index');
		}
		function errorHandler( result ){
			alert("Error data")
			$location.path('/order/update/' + order.id)
		}	
	};	

	obj.deleteOrder = function (orderID) {
	    return $http.delete(productBase + 'orders/' + orderID)
			.then( successHandler )
			.catch( errorHandler );
		function successHandler( result ) {
			$route.reload();
		}
		function errorHandler( result ){
			alert("Error data")
			$route.reload();
		}	
	};	
	
    return obj;   
}]);