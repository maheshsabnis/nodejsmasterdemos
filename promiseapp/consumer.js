var caller = require("./getexternaldata");

// 1. define server options
var options = {
  host: "apiapptrainingservice.azurewebsites.net", // localhost
  path: "/api/Products",
  method: "GET"
  //port:4008
};

// 2. call the method from module and subscribe to promise
caller
  .getData(options)
  .then(function (receivedData) {
    console.log(JSON.stringify(receivedData));
  })
  .catch(function (err) {
    console.log(err);
  });
for (var i = 0; i < 50; i++) {
  console.log("Done");
}
