var myApp = angular.module("myApp", ["ngRoute"]);


myApp.factory("usersFactory", function($http){
  var factory = {};
  var users = [];

  factory.index = function(callback){
    $http.get("/login").success(callback);
  }

  factory.create = function(user, callback){
    $http.post("/login", user).success(callback);
  }

  return factory;

})
