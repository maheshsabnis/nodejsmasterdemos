var expect = require("chai").expect;
var request = require("request");
var emps = [{ EmpNo: 101, EmpName: "A" }, { EmpNo: 102, EmpName: "B" }];

it("Response data content", function(done) {
  request("http://localhost:9080/data", function(error, response, body) {
    expect(response.statusCode).to.equal();
    expect(body).to.equal(JSON.stringify(emps));
    done();
  });
});
