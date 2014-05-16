var app= angular.module("darasa-app", ['ngSails']);

app.controller("userInfo", function ($scope, $sails) {
    $scope.user = null;

    (function () {
        $sails.get("/currentUser")
            .success(function (data) {
                $scope.user = data;
            })
            .error(function (data) {
                alert('Houston, we got a problem!');
            });
    }());
});