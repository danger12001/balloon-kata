var assert = require('assert');
var balloon = require("../balloon");

describe("processingOrders",function(){
  it("should return a map of the orders for each balloon",function(){
    var result =  balloon.processingOrders("4 sets of red, 3 sets of blue, and 3 sets of yellow");
    assert.deepEqual(result,[ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ]
);
  });
});
describe("processingPrices",function(){
  it("should return a map of the prices for each balloon",function(){
    var result =  balloon.processingPrices("R4 for red, R5 for blue, and R5.50 for yellow");
    assert.deepEqual(result,[ { price: 4, balloon: 'red' },
  { price: 5, balloon: 'blue' },
  { price: 5.5, balloon: 'yellow' } ]
);
  });
});
describe("balloonCost",function(){
  it("should return the cost of each set of balloons",function(){
    var result =  balloon.balloonCost([ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ],[ { price: 4, balloon: 'red' },
{ price: 5, balloon: 'blue' },
{ price: 5.5, balloon: 'yellow' } ]);
    assert.deepEqual(result,[ { totalPrice: 16, balloon: 'red' },
  { totalPrice: 15, balloon: 'blue' },
  { totalPrice: 16.5, balloon: 'yellow' } ]
);
  });
});

describe("heliumCost",function(){
  it("should return the extra cost for helium",function(){
    var result =  balloon.heliumCost([ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ]);
    assert.deepEqual(result,[ { helium: 24, balloon: 'red' },
  { helium: 18, balloon: 'blue' },
  { helium: 18, balloon: 'yellow' } ]

);
  });
});
describe("SpareBalloons",function(){
  it("should return the number of spare balloons if any.",function(){
    var result =  balloon.spareBalloons([ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ]);
    assert.equal(result,"spare balloons: 5"

);
  });
});
describe("Popped",function(){
  it("should return the number of people who wont have balloons",function(){
    var result =  balloon.popped([ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ]);
    assert.equal(result,""
);
  });
});
