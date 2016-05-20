var mongoose = require("mongoose");

var UsersSchema = new mongoose.Schema({
  name: String,
});

mongoose.model("Users", UsersSchema); 
