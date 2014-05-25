/*global angular:false*/

var app = angular.module("darasa-app", ['ngSailsBind', "xeditable"]);

app.run(function (editableOptions, editableThemes) {
    'use strict'
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
app.controller("ClassroomListCtrl", [ "$scope", "$sailsBind", function ($scope, $sailsBind) {
    'use strict';

    $scope.newClassroom = {};
    $sailsBind.bind('classroom', $scope);
    $scope.addNewClassroom = function () {
        $scope.classrooms.push($scope.newClassroom);
        $scope.newClassroom = {};
    };
}]);

