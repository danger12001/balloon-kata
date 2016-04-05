var assert = require('assert');
var balloon = require("../balloon");

describe("processingOrders",function(){
  it("should",function(){
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
  it("should",function(){
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
  it("should",function(){
    var result =  balloon.heliumCost([ { quantity: 12, balloon: 'red' },
  { quantity: 9, balloon: 'blue' },
  { quantity: 9, balloon: 'yellow' } ]);
    assert.deepEqual(result,[ { helium: 24, balloon: 'red' },
  { helium: 18, balloon: 'blue' },
  { helium: 18, balloon: 'yellow' } ]

);
  });
});
