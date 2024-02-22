var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/user/all', {
            templateUrl: "views/list_user.html",
            controller: ListUserController
        })
        .when('/user/add', {
            templateUrl: "views/add_user.html",
            controller: AddUserController
        })
        .when('/user/update/:id', {
            templateUrl: "views/update_user.html",
            controller: UpdateUserController
        })
        .when('/user/detail/:id', {
            templateUrl: "views/detail_user.html",
            controller: DetailUserController
        })
        .otherwise({
            redirectTo: '/user/all'
        })
})