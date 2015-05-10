(function () {

    var app = angular.module("userViewer");

    app.directive('bingmap', function () {
        return {
            restrict: 'EA',
            controller: function ($scope) {
                
            },
            link: function (scope, element, attrs) {
                scope.map = new Microsoft.Maps.Map(element[0], { zoom: 11, credentials: 'AkCVXNg_nwpK9SViLahThOkwG2Vr8eKmwAJrPPHdM2Nf_pX1GAP4bCsH4UMc92XL' });
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

    var MapController = function ($scope, userService) {

        var onUsersGetComplete = function (data) {
            $scope.users = data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data: " + reason;
        };

        userService.getUsers().then(onUsersGetComplete, onError);
    };

    app.controller("MapController", MapController);

}());