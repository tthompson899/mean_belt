var mongoose = require("mongoose");
var Users = mongoose.model("Users");

module.exports = {
  index: function(req, res){
    Users.find({}, function(err, allUsers){
      if(err){
        console.log(err);
      }
      else{
        res.json(allUsers); 
      }
    })
  },

  create: function(req, res){
    var new_user = new Users(req.body);

    new_user.save(function(err, new_user){
      if(err){
        console.log(err);
      }
      else{
        res.json(new_user);
      }
    })
  }
}
