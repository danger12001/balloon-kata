var assert = require('assert');
var balloon = require("../balloon");

describe("Balloon",function(){
  it("should",function(){
    var result =  balloon.processing("4 sets of red, 3 sets of blue, and 3 sets of yellow");
    assert.equal(result,"");
  });
});
