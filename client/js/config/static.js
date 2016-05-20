//client facing route, controller and factory

myApp.config(function($routeProvider){
  $routeProvider
  .when("/login", {
    templateUrl: "./../static/partials/login.html"
  })
  .when("/dashboard", {
    templateUrl: "./../static/partials/dashboard.html"
  })
  .when("/newPoll", {
    templateUrl: "./../static/partials/newPoll.html"
  })
  .when("/poll/:id", {
    templateUrl: "./../static/partials/poll.html"
  })

})
