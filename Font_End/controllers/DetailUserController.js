window.DetailUserController = function($scope, $http, $routeParams){
    
    $scope.id = $routeParams.id;

    $scope.getData = function() {
        const API = "http://localhost:8080/user/detail";
        $http.get(`${API}/${$scope.id}`).then(function(response){
            $scope.inputValue = response.data;
        });   
    }
    $scope.getData();
}