var Calculator = require("../../public/js/calculator.js");
var assert = require("assert");

describe("calculator", function() {
  beforeEach(function() {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it("it has a sample test", function() {
    assert.equal(true, true);
  });

  it("add two numbers", function() {
    calculator.previousTotal = "1";
    calculator.add("4");
    assert.equal(5.0, calculator.runningTotal);
  });

  it("subtract two numbers", function() {
    calculator.previousTotal = "7";
    calculator.subtract("4");
    assert.equal(3.0, calculator.runningTotal);
  });

  it("multiply two numbers", function() {
    calculator.previousTotal = "3";
    calculator.multiply("5");
    assert.equal(15.0, calculator.runningTotal);
  });

  it("divide two numbers", function() {
    calculator.previousTotal = "21";
    calculator.divide("7");
    assert.equal(3.0, calculator.runningTotal);
  });

  it("number concatenate", function() {
    // calculator.previousTotal = "2";
    calculator.numberClick("2");
    calculator.numberClick("2");
    assert.equal(22.0, calculator.runningTotal);
  });

  it("multi operation with equals", function() {
    calculator.numberClick("5");
    calculator.operatorClick("-");
    calculator.numberClick("4");
    calculator.operatorClick("=");
    calculator.operatorClick("*");
    calculator.numberClick("2");
    calculator.operatorClick("=");
    assert.equal(2.0, calculator.runningTotal);
  });

  it("multi operation without equals", function() {
    calculator.numberClick("5");
    calculator.operatorClick("-");
    calculator.numberClick("4");
    calculator.operatorClick("*");
    calculator.numberClick("2");
    calculator.operatorClick("=");
    assert.equal(2.0, calculator.runningTotal);
  });

  it("clear running total", function() {
    calculator.numberClick("5");
    calculator.operatorClick("-");
    calculator.numberClick("4");
    calculator.operatorClick("+");
    calculator.clearClick();
    calculator.operatorClick("=");
    assert.equal(1.0, calculator.runningTotal);
  });
});
