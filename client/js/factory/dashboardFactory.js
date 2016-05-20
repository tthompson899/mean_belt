
myApp.factory("dashboardFactory", function($http){
  var factory = {};
  var questions = [];

  factory.index = function(callback){
    $http.get("/dashboard").success(callback);
  }

  factory.create = function(newQuest, callback){
    $http.post("/dashboard", newQuest).success(callback);
  }

  factory.delete = function(id, callback){
    $http.delete("/dashboard/" + id).success(callback);
  }

  factory.show = function(id, callback){
    $http.get("/poll/" + id).success(callback);
  }

  return factory;
})
