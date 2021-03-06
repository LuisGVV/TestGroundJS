angular.module("app", []);

angular.module("app").controller("mainCtrl", function ($scope) {
    $scope.user1 = {
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
    $scope.user2 = {
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
});

angular.module('app').directive('userInfoCard', function () {
    return {
        templateUrl: "userInfoCard.html",
        restrict: "E",
        scope: {
            user: "=person",
            initialCollapsed: '@collapsed' // "primitive type"
        },
        controller: function ($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.nextState = function nextState() {
                $scope.user.level++;
                $scope.user.level = $scope.user.level % 3;
            }
            $scope.knightMe = function (user) {
                user.rank = "knight";
            };
            $scope.collapse = function () {
                $scope.collapsed = !$scope.collapsed
            };

            $scope.removeFriend = function (friend){
                var idx = $scope.user.friends.indexOf(friend);
                if(idx > -1){
                    $scope.user.friends.splice(idx,1);
                }
            };
            
        }
    }
});

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
            scope.$watch(attributes['stateDisplay'], function(newVal){
                switch (newVal) {
                    case 0:
                        element.css('background-color', 'white');
                        break;
                    case 1:
                        element.css('background-color', 'yellow');
                        break;
                    case 2:
                        element.css('background-color', 'red');
                        break;
                }
            })
        }
    }
});
