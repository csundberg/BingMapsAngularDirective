(function () {
    
    var app = angular.module("userViewer");

    app.directive('bingmap', function () {

        return {
            restrict: 'EA',
            controller: function ($scope) {

            },
            link: function (scope, element, attrs) {
                scope.map = new Microsoft.Maps.Map(element[0], { zoom: 11, credentials: 'YOUR_BING_MAPS_KEY_HERE' });
                scope.$watch('users', function (newValue, oldValue) {
                    if (newValue != oldValue) {
                        console.log("I see a data change!");
                        var locations = [];
                        for (var i = 0; i < scope.users.length; i++) {
                            var loc = new Microsoft.Maps.Location(newValue[i].latitude, newValue[i].longitude);
                            locations.push(loc);
                            var pushpin = new Microsoft.Maps.Pushpin(loc);
                            scope.map.entities.push(pushpin);
                        }
                        var viewBoundaries = Microsoft.Maps.LocationRect.fromLocations(locations);
                        scope.map.setView({ bounds: viewBoundaries });
                    }
                }, true);
            }
        };
    });

}());