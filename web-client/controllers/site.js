'use strict';
spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/index', {
		templateUrl: 'views/site/index.html',
		controller: 'index'
	})
	.when('/site/data-source', {
		templateUrl: 'views/site/data-source.html',
		controller: 'data-source'
	})
	.when('/site/view-orders', {
		templateUrl: 'views/site/view-orders.html',
		controller: 'view-orders'
	})
	.when('/site/learnt', {
		templateUrl: 'views/site/learnt.html',
		controller: 'learnt'
	})
	.when('/site/shop', {
		templateUrl: 'views/site/shop.html',
		controller: 'shop'
	})
	.otherwise({
		redirectTo: '/site/index'
	});
}])
.controller('index', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Hi there, Welcome to Southwell Solutions Africa Limited.';
}])
.controller('data-source', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Run on postman : http://localhost/Southwell/web-service/web/products';
}])
.controller('learnt', ['$scope', '$http', function($scope,$http) {
	$scope.message = '!';
}])
.controller('view-orders', ['$scope', '$http', 'services','$location', 
	function($scope,$http,services,$location) {
	$scope.message = 'Here are Todays Orders.';
	$scope.api = 'Run on postman : http://localhost/Southwell/web-service/web/orders';
	services.getOrders().then(function(data){
        $scope.orders = data.data;
    });	
	$scope.createOrder = function(product) {
        var results = services.createOrder(product);
    }
}]);