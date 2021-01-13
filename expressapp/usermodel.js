var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var instance = express();

mongoose.Promise = global.Promise;
instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());
mongoose.connect(
  "mongodb://localhost/ProductsAppDb",
  { useNewUrlParser: true }
);
var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log("Sorry Connection is not established");
  return;
}
var users = mongoose.Schema({
  UserName: Number,
  Password: String
});
var userModel = mongoose.model("Users", users, "Users");

instance.post("/api/users", function(request, response) {
  // parsing posted data into JSON
  var user = {
    UserName: request.body.UserName,
    Password: request.body.Password
  };
  console.log(JSON.stringify(user));
  // pass the parsed object to "create()" method
  userModel.create(user, function(err, res) {
    if (err) {
      response.statusCode = 500;
      response.send({ status: response.statusCode, error: err });
    }
    response.send({ status: 200, data: res });
  });
});

instance.listen(4070, function() {
  console.log("started listening on port 4070");
});
