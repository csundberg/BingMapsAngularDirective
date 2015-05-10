(function () {

    var app = angular.module("userViewer");

    var UserController = function ($scope, userService, $routeParams) {

            var onUserComplete = function (data) {
                $scope.user = data;
            };

            var onError = function (reason) {
                $scope.error = "Could not fetch the data: " + reason;
            };

            $scope.userid = $routeParams.userid;
            userService.getUser($scope.userid).then(onUserComplete, onError);

    };

    app.controller("UserController", UserController);

}());