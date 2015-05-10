(function () {

    var userService = function ($http) {

        var getUsers = function () {
            return $http.get("api/users")
                        .then(function (response) {
                            return response.data;
                        });
        };

        var getUser = function (id) {
            return $http.get("api/users/" + id)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            getUsers: getUsers,
            getUser: getUser
        };

    };

    var module = angular.module("userViewer");
    module.factory("userService", userService);

}());