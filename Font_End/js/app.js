var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/user/all', {
            templateUrl: "views/list_user.html",
            controller: ListUserController
        })
        // .when('/add', {
        //     templateUrl: "views/add.html",
        //     controller: AddController
        // })
        // .when('/update/:id', {
        //     templateUrl: "views/update.html",
        //     controller: UpdateController
        // })
        // .when('/detail/:id', {
        //     templateUrl: "views/detail.html",
        //     controller: DetailController
        // })
        .otherwise({
            redirectTo: '/user/all'
        })
})