
function Calculator(skinName) {
  this.skin = skinName;
  // constructor
}

Calculator.prototype.pingPong = function(goal) {
// function pingPong(goal)  -> old version

//create variable of empty array
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping")
    } else if (i % 5 === 0) {
      output.push("pong")
    } else {
      output.push(i);
    }
  }
  return output;
   // method code
}

exports.calculatorModule = Calculator;
// We are creating a new property on it called calculatorModule, and we are setting this property equal to our Calculator constructor function
//because we used a prototype to attach our pingPong() method, it gets dragged along as part of Calculator
