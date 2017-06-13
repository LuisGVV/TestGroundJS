angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {
    $scope.size = 12;
});

angular.module('app').directive('fontScale', function fontScale() {
    return {
        link: function linkFunction(scope, el, attrs) {
            scope.$watch(attrs['fontScale'], function (newVal) {
                el.css('font-size', newVal + 'px');
            });
        }
    }
})