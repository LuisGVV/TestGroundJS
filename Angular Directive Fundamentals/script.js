angular.module('app').directive('address', function(){
    return {
        restrict: 'E',
        templateUrl: 'address.html',
        controller: function($scope){
            $scope.collapsed = false;
            $scope.collapseAddress() = function(){
                
            }
        }
    }
})