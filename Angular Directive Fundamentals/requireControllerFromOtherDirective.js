angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {

});


angular.module('app').directive('emperor', function () {
    var name = 'The Emperor';
    return {
        scope: 'true',
        controller: function ($scope) {
            this.name = name;
        },
        link: function (scope, element, attributes) {
            element.data('name', name);
        }
    }
});

angular.module('app').directive('vader', function () {
    var name = 'Vader';
    return {
        scope: 'true',
        require: '^emperor', //grab the controller from the emperor directive which is a parent node,
        controller: function ($scope) {
            this.name = name;
        },
        link: function (scope, element, attributes, emperorCtrl) {
            element.data('name', name);
            element.data('master', emperorCtrl.name);
            console.log('Vader\'s master is', emperorCtrl.name);
        }
    }
});

angular.module('app').directive('starkiller', function () {
    var name = 'Starkiller';
    return {
        scope: 'true',
        require: '^vader', //? vaderCtrl becomes null, no symbol means to look at the same current node
        controller: function starkillerController($scope) {
            this.name = name;
        },
        link: function (scope, element, attributes, vaderCtrl) {
            element.data('name', name);
            element.data('master', vaderCtrl.name);
            console.log('Starkiller\'s master is', vaderCtrl.name);
        }
    }
});

angular.module('app').directive('droid', function () {
    var name = 'R2-D2';
    return {
        scope: 'true',
        require: ['^vader', '^emperor'], // Require multiple controllers
        controller: function droidController($scope) {
            this.name = name;
        },
        link: function (scope, element, attributes, controllers) { //passes controllers as an array
            if(controllers.length !==0){
                element.data('name', name);
                element.data('master', controllers[0].name);
                console.log('Droids\'s master is', controllers[0].name);
                console.log('Droids\'s master\'s master is', controllers[1].name);
            }
        }
    }
});
