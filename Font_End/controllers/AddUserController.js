window.AddUserController = function($scope, $http){

    $scope.getData = function() {
        const API = "http://localhost:8080/user/all";
        $http.get(API).then(function(response){
            $scope.listUser = response.data;
        })
    }

    $scope.add = function(){
        const API = "http://localhost:8080/user/add";
        $http.post(API, $scope.inputValue);
        window.location.href = "#!/user/all";
        $scope.getData();
    }  
}