angular.module('app', []);

angular.module('app').controller('mainCtrl', function mainCtrl($scope) {
    $scope.bountyHunters = [
        { name: "Boba Fett"},
        { name: "IG-88"},
        { name: "Dengar"},
        { name: "Bosk"},
        { name: "Cad Bane"}
    ]

    $scope.add = function add() {
        $scope.bountyHunters.push({ name: "4LOM"});
    }
    $scope.remove = function remove() {
        $scope.bountyHunters.pop();
    }
});

angular.module('app').directive('myRepeat', function myTransclude() {
    return {
        restrict: 'A',
        transclude: 'element',
        link: function(scope, element, attributes, ctrl, transclude){
            var pieces = attributes.myRepeat.split(' ');
            var itemString = pieces[0];
            var collectionName = pieces[2];
            var elements = [];

            scope.$watchCollection(collectionName, function(collection){
                if (elements.length > 0) {
                    elements.forEach(function (value) {
                        value.el.remove();
                        value.scope.$destroy();
                    });
                    elements = [];
                }

                collection.forEach(function (value){
                    var childScope = scope.$new();
                    childScope[itemString] = value
                    transclude(childScope, function(clone){
                        element.before(clone);
                        var item = {};
                        item.el = clone;
                        item.scope = childScope;
                        elements.push(item);
                    })
                });
            });
        }
    }
});