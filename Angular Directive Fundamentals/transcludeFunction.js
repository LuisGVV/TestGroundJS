
angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {
    $scope.items = [1,2,3]
});

angular.module('app').directive('myTransclude', function myTransclude() {
    return {
        restrict: 'A',
        transclude: 'element',
        link: function(scope, element, attributes, ctrl, transclude){
            console.log(element[0]);
            transclude(scope, function (clone, scope) {
                console.log(clone);
                element.after(clone);
            });
        }
    }
})