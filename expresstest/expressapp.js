//Load express module with `require` directive
var express = require("express");
var app = express();

//Define request response in root URL (/)
app.get("/", function(req, res) {
  res.send("Hello World"); // data will be responded in body
});

//Launch listening server on port 8080
app.listen(9080, function() {
  console.log("App listening on port 9080!");
});
