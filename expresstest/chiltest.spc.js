var expect = require("chai").expect;
var request = require("request");

describe("express api test", function() {
  var message = "Hello World!!!";
  // act
  it("should return Hello World whrn rest api is called", function(done) {
    request("http://localhost:9080", function(error, response, body) {
      expect(body).to.equal(message);
      done();
    });
  });
});
