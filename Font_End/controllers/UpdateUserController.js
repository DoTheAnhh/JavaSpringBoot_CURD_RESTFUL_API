window.UpdateUserController = function($scope, $http, $routeParams){

    $scope.id = $routeParams.id;

    $scope.getData = function() {
        const API = "http://localhost:8080/user/detail";
        $http.get(`${API}/${$scope.id}`).then(function(response){
            $scope.inputValue = response.data;
        });   
    }
    $scope.getData();

    $scope.update = function(){
        const API = "http://localhost:8080/user/update";
        $http.put(`${API}/${$scope.id}`, $scope.inputValue).then(function(){
            window.location.href = "#!/user/all";
        });
    }
}