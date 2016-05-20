var mongoose = require("mongoose");
var Questions = mongoose.model("Questions");

module.exports = {
  index: function(req, res){
    Questions.find({}, function(err, allQuestions){
      if(err){
        console.log(err);
      }
      else{
        res.json(allQuestions);
      }
    })
  },

  create: function(req, res){
    var new_poll = new Questions(req.body);

    new_poll.save(function(err, newpoll){
      if(err){
        console.log(err);
      }
      else{
        res.json(newpoll);
      }
    })
  },

  delete: function(req, res){
    Questions.remove({_id: req.params.id}, function(err, deleted){
      if(err){
        console.log(err);
      }
      else{
        res.json(deleted);
      }
    })
  },

  show: function(req, res){
    Questions.findById({_id: req.params.id}, function(err, showone){
      if(err){
        console.log(err);
      }
      else{
        console.log(showone); 
        res.json(showone);
      }
    })
  }
}
