exports.processingOrders = function(orders){
var order = orders.replace(/sets of /g,"").replace(/ and /g, "").replace(/, /g, " ").replace(/,/g, " ").split(" ");

var orderMap = [];
for(x=0;x<order.length;x++){
  if(x % 2 === 0){
  var quantity = parseFloat(order[x]) * 3;
  var color = order[x + 1];
  orderMap.push({quantity: quantity,
                balloon: color});
}
}
// console.log(orderMap);
return orderMap;
};
exports.processingPrices = function(prices){
var price = prices.replace(/ for/g,"").replace(/R/g,"").replace(/ and /g, "").replace(/, /g, " ").replace(/,/g, " ").split(" ");
var priceMap = [];
for(x=0;x<price.length;x++){
  if(x % 2 === 0){
    var value = parseFloat(price[x]);
    var colors = price[x + 1];
    priceMap.push({price: value,
                  balloon: colors});
  }
}
// console.log(priceMap);
return priceMap;
};
exports.balloonCost = function(orderMap, priceMap){
  var totalCost = [];
  for(x=0;x<orderMap.length;x++){
    var totalPrice = orderMap[x].quantity * priceMap[x].price;
    var item = orderMap[x].balloon;
    totalCost.push({totalPrice: totalPrice / 3,
                    balloon: item});
  }
// console.log(totalCost);
return totalCost;
};
exports.heliumCost = function(orderMap){
var heliumCost = [];
for(x=0;x<orderMap.length;x++){
  var helium = orderMap[x].quantity * 2;
  var items = orderMap[x].balloon;
  heliumCost.push({helium: helium,
                  balloon: items});
}
// console.log(heliumCost);
return heliumCost;
};
