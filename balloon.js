exports.processingOrders = function(orders) {
  var order = orders.replace(/sets of /g, "").replace(/ and /g, "").replace(/, /g, " ").replace(/,/g, " ").split(" ");

  var orderMap = [];
  for (x = 0; x < order.length; x++) {
    if (x % 2 === 0) {
      var quantity = parseFloat(order[x]) * 3;
      var color = order[x + 1];
      orderMap.push({
        quantity: quantity,
        balloon: color
      });
    }
  }
  // console.log(orderMap);
  return orderMap;
};
exports.processingPrices = function(prices) {
  var price = prices.replace(/ for/g, "").replace(/R/g, "").replace(/ and /g, "").replace(/, /g, " ").replace(/,/g, " ").split(" ");
  var priceMap = [];
  for (x = 0; x < price.length; x++) {
    if (x % 2 === 0) {
      var value = parseFloat(price[x]);
      var colors = price[x + 1];
      priceMap.push({
        price: value,
        balloon: colors
      });
    }
  }
  // console.log(priceMap);
  return priceMap;
};
exports.balloonCost = function(orderMap, priceMap) {
  var totalCost = [];
  for (x = 0; x < orderMap.length; x++) {
    var totalPrice = orderMap[x].quantity * priceMap[x].price;
    var item = orderMap[x].balloon;
    totalCost.push({
      totalPrice: totalPrice / 3,
      balloon: item
    });
  }
  // console.log(totalCost);
  return totalCost;
};
exports.heliumCost = function(orderMap) {
  var heliumCost = [];
  for (x = 0; x < orderMap.length; x++) {
    var helium = orderMap[x].quantity * 2;
    var items = orderMap[x].balloon;
    heliumCost.push({
      helium: helium,
      balloon: items
    });
  }
  // console.log(heliumCost);
  return heliumCost;
};
exports.spareBalloons = function(orderMap) {
  var people = 25;
  var totalBalloons = orderMap[0].quantity + orderMap[1].quantity + orderMap[2].quantity;

  if (totalBalloons > people) {
    return "spare balloons: " + (totalBalloons - people);
  } else {
    return "no Spare balloons";
  }
};
exports.popped = function(str) {
var people = 25;
var popped = str.replace(/ and /g, "").replace(/ balloons/g, "").replace(/ balloon/g,"").replace(/ popped/g,"").replace(/, /g,",").replace(/,/g, " ").split(" ");
var poppedMap = [];
for(x=0;x<popped.length;x++){
  if(x % 2 === 0){
  var amountPopped = parseFloat(popped[x]);
  var balloon = popped[x + 1];
  poppedMap.push({amountPopped: amountPopped,
                balloon: balloon});
}
}
var totalPopped = poppedMap[0].amountPopped + poppedMap[1].amountPopped + poppedMap[2].amountPopped;
var spareBalloons = 5;
var poppedWOspare = totalPopped - spareBalloons;
// console.log(poppedMap);
return poppedWOspare;
};
exports.balloons = function(orderMap, popped){
var balloons = [];
for(x=0;x<orderMap.length;x++){
  var quantity = orderMap[x].quantity - popped[x].amountPopped;
  var balloonC = orderMap[x].balloon;
  // console.log(quantity);
  balloons.push({quantity: quantity,
                balloon: balloonC});
}
// console.log(balloons);
var most = balloons.sort(function(a,b){
  return b.quantity - a.quantity;
});
var mostBalloons = most[0].balloon;
var least = balloons.sort(function(a,b){
  return a.quantity - b.quantity;
});
var leastBalloons = least[0].balloon;
return "Most: " + mostBalloons + '\n' + "Least: " + leastBalloons;
};
