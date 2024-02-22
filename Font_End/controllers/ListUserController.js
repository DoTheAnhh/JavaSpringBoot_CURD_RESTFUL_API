window.ListUserController = function($scope, $http){
    
    $scope.getData = function() {
        const API = "http://localhost:8080/user/all";
        $http.get(API).then(function(response){
            $scope.listUser = response.data;
        })
    }
    $scope.getData();

    $scope.delete = function(id) {
        const API = "http://localhost:3000/user/delete";
        $http.delete(`${API}/${id}`).then(function(response){
            window.location.href = "#!/user/all";
        })
    }
}