
var demoApp = angular.module('demoApp', ['ngRoute']);

demoApp.controller('SimpleController', function($scope, simpleFactory){
    $scope.customers = []; 
    
    init();

    function init(){
        $scope.customers = simpleFactory.getCustomers();
    }

    $scope.addCustomer = function(){
        $scope.customers.push(
             { 
                name: $scope.newCustomer.name, 
                city: $scope.newCustomer.city
            });
    }
});

demoApp.config(function($routeProvider){
    $routeProvider
        .when('/',
            {
                controller: 'SimpleController',
                templateUrl: 'Partials/View1.html'
            })
        .when('/view2',
            {
                controller: 'SimpleController',
                templateUrl: 'Partials/View2.html'
            })
        .otherwise({ redirectTo: '/'});
});

demoApp.factory('simpleFactory', function(){
    var customers = [
        {name: 'John Smith', city: 'Phoenix'}, 
        {name: 'John Doe', city:'New York'},
        {name: 'Jane Doe', city: 'San Fancisco'}
    ];

    var factory = {};
    factory.getCustomers = function (){
        return customers;
    }

    factory.postCustomer = function(customer){

    };

    return factory;
});
