angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {

});


angular.module('app').directive('emperor', function myTransclude() {
    return {
        scope: 'true',
        link: {
            pre: function (scope, element, attributes, ctrl, transclude) {
                element.data('name', 'The Emperor');
                scope.master = 'The Emperor';
            }
        }
    }
});

angular.module('app').directive('vader', function myTransclude() {
    return {
        scope: 'true',
        link: {
            pre: function (scope, element, attributes) {
                element.data('name', 'Vader');
                element.data('master', scope.master);
                console.log('Vader\'s master is ', scope.master);
            }
        }
    }
});

angular.module('app').directive('starkiller', function myTransclude() {
    return {
        scope: 'true',
        link: {
            pre: function (scope, element, attributes) {
                element.data('name', 'Starkiller');
                element.data('master', scope.master);
                console.log('Starkiller\'s master is ', scope.master);
            }
        }
    }
});

