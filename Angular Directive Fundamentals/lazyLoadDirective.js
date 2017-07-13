angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {
    $scope.items = [1,22,32, 464]
});

angular.module('app').directive('myLazyRender', function myTransclude() {
    return {
        restrict: 'A',
        transclude: 'element',
        priority: 1200,
        link: function(scope, element, attributes, ctrl, transclude){
            var hasBeenShown = false;
            var unwatchFn = scope.$watch(attributes.myLazyRender, function (value) {
                if(value && !hasBeenShown){
                    hasBeenShown = true;
                    transclude(scope, function(clone){
                        element.after(clone);
                    });
                    unwatchFn();
                }
            });
        }
    }
});

angular.module('app').directive('echo', function myTransclude() {
    return {
        priority: 900, // lower priority, therefore this will execute after the lazyRender
        link: function(scope, element, attributes, ctrl, transclude){
            console.log('echo');
        }
    }
})