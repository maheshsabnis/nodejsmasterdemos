var expect = require("chai").expect;
var request = require("request");

it("Request page content", function(done) {
  request("http://localhost:9080", function(error, response, body) {
    expect(body).to.equal("Hello World!!!!");
    done();
  });
});

// it("Response page status", function(done) {
//   request("http://localhost:9080", function(error, response, body) {
//     expect(response.statusCode).to.equal(200);
//     done();
//   });
// });

// it("About page not found content", function(done) {
//   request("http://localhost:9080/about", function(error, response, body) {
//     expect(response.statusCode).to.equal(404);
//     done();
//   });
// });
