/**
 * Created by dpamio on 16/05/14.
 */
//var app= angular.module("darasa-app")

app.controller("UserDropdownCtrl", function ($scope) {
    $scope.isCollapsed = true;
    $scope.toggle = function() {
        alert('laputamadre')
        $scope.isCollapsed = !$scope.isCollapsed;
    }
});

