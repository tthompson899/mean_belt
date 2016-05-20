var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/"));

require("./server/config/mongoose.js");
require("./server/config/route.js")(app);


app.listen(8000, function(){
  console.log("Listening on server 8000...");
})
