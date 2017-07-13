angular.module("app", []);

angular.module("app").controller("mainCtrl", function ($scope) {
    $scope.person1 = {
        name: 'Luke Skywalker',
        address: {
            street: 'PO Box 123',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ],
        level: 0
    }
    $scope.person2 = {
        name: 'Han Solo',
        address: {
            street: 'PO Box 123',
            city: 'Mos Eisley',
            planet: 'Tattoine'
        },
        friends: [
            'Luke',
            'Leia',
            'Chewbacca'
        ],
        level: 2
    }
    $scope.droid1 = {
        name: 'R2-D2',
        specifications: {
            manufacturer: 'Industrial Automoton',
            type: 'Astromech',
            productLine: 'R2 Series'
        },
        owners: [
            'Anakin',
            'Leia',
            'Luke'
        ],
        level: 2
    }
});

angular.module('app').directive('personInfoCard', function () {
    return {
        templateUrl: "personInfoCard.html",
        restrict: "E",
        scope: {
            person: "=person",
            initialCollapsed: '@collapsed' // "primitive type"
        },
        controller: function ($scope) {
            $scope.knightMe = function (person) {
                person.rank = "knight";
            };



            $scope.removeFriend = function (friend){
                var idx = $scope.person.friends.indexOf(friend);
                if(idx > -1){
                    $scope.person.friends.splice(idx,1);
                }
            };
            
        }
    }
});

angular.module('app').directive('droidInfoCard', function () {
    return {
        templateUrl: "droidInfoCard.html",
        restrict: "E",
        scope: {
            droid: "=droid",
            initialCollapsed: '@collapsed' // "primitive type"
        },
        controller: function ($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');

            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed
            };
        }
    }
});

angular.module('app').directive('userPanel', function userPanel() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'userPanel.html',
        scope: {
            name: '@',
            level: '=',
            initialCollapsed: '@collapsed'
        },
        controller: function controllerUserPanel($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.nextState = function nextState(evt) {
                evt.stopPropagation();
                evt.preventDefault();
                $scope.level++;
                $scope.level = $scope.level % 3;
            }
            
            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed
            };
        }
    }
})

angular.module('app').directive('removeFriend', function (){
    return {
        restrict: 'E',
        templateUrl: 'removeFriend.html',
        scope: {
            notifyParent: '&method' // function as a parameter on attribute method
        },
        controller: function($scope) {
            $scope.removing = false;
            $scope.startRemove = function (){
                $scope.removing = true;
            };
            $scope.cancelRemove = function (){
                $scope.removing = false;
            };
            $scope.confirmRemove = function(){
                $scope.notifyParent(); // calls notifyParent declared in isolated scope
            }
        }
    }
});

angular.module('app').directive('address', function () {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'address.html',
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.collapseAddress = function () {
                $scope.collapsed = true;
            }
            $scope.expandAddress = function () {
                $scope.collapsed = false;
            }
        }
    }
});

angular.module('app').directive('stateDisplay', function () {
    return {
        restrict: 'A',
        link: function linkFunction(scope, element, attributes) {
            var parms = attributes['stateDisplay'].split(" ");
            var linkVar = parms[0];
            var classes = parms.slice(1);
            scope.$watch(linkVar, function(newVal){
                element.removeClass(classes.join(" "));
                element.addClass(classes[newVal]);
            });
        }
    }
});
