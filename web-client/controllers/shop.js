'use strict';
spaApp_shop.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/shop/index', {
		templateUrl: 'views/shop/index.html',
		controller: 'cart'
	})
	.when('/shop/orders', {
		templateUrl: 'views/shop/orders.html',
		controller: 'orders',
	})
	.when('/shop/create', {
		templateUrl: 'views/shop/create.html',
		controller: 'create',
		resolve: {
			product: function(services, $route){
				return services.getProducts();
			}
        }
	})
	.when('/shop/order', {
		templateUrl: 'views/shop/order.html',
		controller: 'order',
		resolve: {
			product: function(services, $route){
				return services.getProducts();
			}
        }
	})
	.otherwise({
		redirectTo: '/site/index'
	});
}])
.controller('create', ['$scope', '$http', 'services','$location','product', 
	function($scope,$http,services,$location,product) {
	$scope.message = 'Let us add a new product.';
	$scope.createProduct = function(product) {
        var results = services.createProduct(product);
    }  
}])
.controller('order', ['$scope', '$http', 'services','$location','product', 
	function($scope,$http,services,$location,product) {
	$scope.message = 'Hi, Want to order a product? Feel free...';
	services.getProducts().then(function(data){
        $scope.products = data.data;
    });	
	$scope.createOrder = function(product) {
        var results = services.createOrder(product);
    }
}])
.controller('orders', ['$scope', '$http', 'services','$location', 
	function($scope,$http,services,$location) {
	$scope.message = 'Here are Todays Orders.';
	services.getOrders().then(function(data){
        $scope.orders = data.data;
    });	
	$scope.createOrder = function(product) {
        var results = services.createOrder(product);
    }
}])
.controller('index', ['$scope', '$http', 'services', 'ngCart', function($scope,$http,services,ngCart) {
	$scope.message = 'Hi there, Welcome to Southwell Solutions Africa Limited!';
	$scope.oneAtATime = true;
	$scope.status = {
	    isCustomHeaderOpen: false,
	    isFirstOpen: false,
	    isFirstDisabled: false
	};
	services.getProducts().then(function(data){
        $scope.products = data.data;
    });	
	$scope.deleteProduct = function(pID) {
		if(confirm("Are you sure to delete product number: " + pID)==true && pID>0){
			services.deleteProduct(pID);	
			$route.reload();
		}
	};
}])
.controller('cart', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(10.5);
    ngCart.setShipping(2.98);
}]);