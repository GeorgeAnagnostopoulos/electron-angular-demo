'use strict';

angular.module('electronApp', [])
.controller('mainCtrl', ['$scope', '$http', ($scope, $http) => {

    $scope.msg = 'JSONPlaceHolder User List';
    $scope.users = [];

    const   base_url = 'http://jsonplaceholder.typicode.com';
    $http.get(base_url + '/users').success((data) => {        
        $scope.users = data;
    })
    .error((error) => {
        console.log(error);
    });
}]);