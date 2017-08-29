angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {

});

angular.module('app').directive('swTabstrip', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function($scope){
            $scope.panes = [];
            $scope.select = function (pane) {
                pane.selected = true;
                $scope.panes.forEach(function(currentPane) {
                    if(currentPane !== pane){
                        currentPane.selected = false;
                    }
                });
            }

            this.addPane = function(pane){
                $scope.panes.push(pane);
                if ($scope.panes.length === 1) {
                    pane.selected = true;
                }
            }
        },
        templateUrl: 'swTabstrip.html'
    }
});


angular.module('app').directive('swPane', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        require: '^swTabstrip',
        link: function(scope, element, attributes, tabscriptCtrl){
            tabscriptCtrl.addPane(scope);
        },
        templateUrl: 'swPane.html'
    }
});
