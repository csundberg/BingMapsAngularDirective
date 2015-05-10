(function () {

    var app = angular.module("userViewer", ["ngRoute"]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "app/main.html",
                controller: "MainController"
            })
            .when("/user/:userid", {
                templateUrl: "app/user.html",
                controller: "UserController"
            })
            .when("/map", {
                templateUrl: "app/map.html",
                controller: "MapController"
            })
            .otherwise({ redirectTo: "/main" });
    }]);

}());