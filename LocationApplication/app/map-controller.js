(function () {

    var app = angular.module("userViewer");

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