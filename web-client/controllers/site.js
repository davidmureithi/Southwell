'use strict';
spaApp_site.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/site/welcome', {
		templateUrl: 'views/site/index.html',
		controller: 'welcome'
	})
	.when('/site/data-source', {
		templateUrl: 'views/site/data-source.html',
		controller: 'data-source'
	})
	.when('/site/view-orders', {
		templateUrl: 'views/site/view-orders.html',
		controller: 'view-orders'
	})
	.otherwise({
		redirectTo: '/site/welcome'
	});
}])
.controller('welcome', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Hi there, Welcome to Southwell Solutions Africa Limited.';
}])
.controller('data-source', ['$scope', '$http', function($scope,$http) {
	// create a message to display in our view
	$scope.message = 'Run on postman : http://localhost/Southwell/web-service/web/products';
}])
.controller('view-orders', ['$scope', '$http', 'services','$location', 
	function($scope,$http,services,$location) {
	$scope.message = 'Here are Todays Orders.';
	$scope.api = 'Run on postman : http://localhost/Southwell/web-service/web/orders';
	services.getOrders().then(function(data){
        $scope.orders = data.data;
    });	
}]);