
myApp.controller("dashboardController", function($scope, dashboardFactory, usersFactory, $location){

  function allQuest(){
    dashboardFactory.index(function(data){
      $scope.questions = data;
    })
  }

  allQuest();

  $scope.users = usersFactory.users;

  $scope.newPoll = function(){
    //Checks to make sure fields are filled out, question is at least 8 chars, all options are more than 3 chars
    if($scope.newQuest == undefined || $scope.newQuest.question.length < 9 || $scope.newQuest.option1.length < 4 || $scope.newQuest.option2.length < 4
      ||  $scope.newQuest.option3.length < 4  || $scope.newQuest.option4.length < 4){

      $scope.response = "Please be sure no fields are empty, each option is at least 3 chars and your question is at least 8 chars in length";
      $location.url("/newPoll", $scope.response);
    }
    else{
    dashboardFactory.create($scope.newQuest, allQuest);
    $scope.newQuest = {};
    $location.url("/dashboard");
    }
  }

  $scope.removepoll = function(id){
    dashboardFactory.delete(id, allQuest);
  }

  $scope.showpoll = function(id){
    dashboardFactory.show(id, allQuest);

  }

})
