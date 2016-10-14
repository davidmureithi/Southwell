'use strict';
spaApp_shop.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/shop/index', {
		templateUrl: 'views/shop/index.html',
		controller: 'index'
	})
	.when('/shop/create', {
		templateUrl: 'views/shop/create.html',
		controller: 'create',
		resolve: {
			create: function(services, $route){
				return services.getProducts();
			}
        }
	})
	.when('/shop/order', {
		templateUrl: 'views/shop/order.html',
		controller: 'order',
		resolve: {
			order: function(services, $route){
				return services.getProducts();
			}
        }
	})
	.otherwise({
		redirectTo: '/shop/index'
	});
}])
.controller('create', ['$scope', '$http', 'services','$location','create', 
	function($scope,$http,services,$location,create) {
	$scope.message = 'Let us add a new product.';
	$scope.createProduct = function(create) {
        var results = services.createProduct(create);
    }
}])
.controller('order', ['$scope', '$http', 'services','$location','order', 
	function($scope,$http,services,$location,order) {
	$scope.message = 'Hi, Want to order a product? Feel free...';
	$scope.createOrder = function(order) {
        var results = services.createOrder(order);
    }
}])
.controller('index', ['$scope', '$http', 'services', 'ngCart', function($scope,$http,services,ngCart) {
	ngCart.setTaxRate(10.5);
    ngCart.setShipping(2.98);
    services.getProducts().then(function(data){
        $scope.products = data.data;
    });
	$scope.oneAtATime = true;
	$scope.status = {
	    isCustomHeaderOpen: false,
	    isFirstOpen: false,
	    isFirstDisabled: false
	};
}]);