var users = require("./../controllers/usersController.js");
var questions = require("./../controllers/questionsController.js");

module.exports = function(app){
  app.get("/login", function(req, res){
    users.index(req, res);
  })

  app.post("/login", function(req, res){
    users.create(req, res);
  })

  app.get("/dashboard", function(req, res){
    questions.index(req, res);
  })

  app.post("/dashboard", function(req, res){
    questions.create(req, res);
  })

  app.delete("/dashboard/:id", function(req, res){
    questions.delete(req, res);
  })

  app.get("/poll/:id", function(req, res){
    questions.show(req, res);
  })
}
