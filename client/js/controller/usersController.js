
myApp.controller("usersController", function($scope, usersFactory){

  function allUsers(){
    usersFactory.index(function(data){
      $scope.users = data;
    })
  }
  allUsers();

  $scope.newUser = function(){
    usersFactory.create($scope.user, allUsers);
    $scope.user = {};

  }

})
