angular

angular.module("app", []);

angular.module('app').controller("mainCtrl", function ($scope) {
    $scope.messages = [];
    $scope.handlePause = function (e) {
        console.log(e);
        $scope.messages.push({text: 'paused!'});
        console.log('paused!');
    }
    $scope.programmer = { 
        name: 'Luis Gerardo Velasquez',
        age: 26,
        hobbies: ['guitar', 'movies', 'eating'],
        clickedOn: false
    }
    $scope.clickHandler= function(p){
        p.clickedOn = !p.clickedOn;
    }
});

angular.module('app').directive('eventPause', function ($parse) {
    return {
        restrict: 'A',
        /* this is intrusive and can interfere with other decorator directives
        * scope: {
        *  eventPause: '&'
        * },
        */
        link: function (scope, el, attrs) {
            var fn = $parse(attrs['eventPause']);
            el.on('pause', function (event) {
                scope.$apply(function () {
                    fn(scope, {evt: event});
                });
            })
        }
    }
});

angular.module('app').directive('spacebarSupport', function () {
    return {
        restrict: "A",
        link: function(scope, element, attributes){
            $('body').on('keypress', function(evt) {
                var vidEl = element[0];
                if(evt.keyCode === 32) {
                    if(vidEl.paused){
                        vidEl.play();
                    } else {
                        vidEl.pause();
                    }
                }
            });
        }
    }
});

angular.module('app').directive('myClick', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes){
            /**
             * remember this doesn't the function in the expression, instead it converts 
             * an Angular Expression into a function which represents the compiled expression
             *  */
            var fn = $parse(attributes['myClick']); 
            element.on('click', function(event){
                scope.$apply(function (){
                    fn(scope);
                });
            });
        }
    }
});
