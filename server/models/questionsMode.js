var mongoose = require("mongoose");

var QuestionsSchema = new mongoose.Schema({
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  date: {type: Date, default: Date.now}
});

mongoose.model("Questions", QuestionsSchema);
