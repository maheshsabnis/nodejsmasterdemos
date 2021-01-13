//Load express module with `require` directive
var express = require("express");
var app = express();
var emps = [{ EmpNo: 101, EmpName: "A" }, { EmpNo: 102, EmpName: "B" }];
//Define request response in root URL (/)
app.get("/data", function(req, res) {
  res.send(JSON.stringify(emps));
});

//Launch listening server on port 9080
app.listen(9080, function() {
  console.log("App listening on port 9080!");
});
