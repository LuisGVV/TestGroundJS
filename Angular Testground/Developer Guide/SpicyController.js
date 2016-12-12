(function IIFE() {
    'use strict';

    angular
        .module('SpicyApp', []);

    angular
        .module('SpicyApp')
        .controller('SpicyController', ['$scope', SpicyController
        ]);

    function SpicyController($scope) {
        $scope.spice = 'very';

        $scope.setSpice = function (newSpice){
            $scope.spice = newSpice;
        }
    }
})();
