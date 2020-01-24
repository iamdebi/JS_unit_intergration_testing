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

  it("number concatenate", function() {
    calculator.previousTotal = "1";
    calculator.add("4");
    assert.equal(5.0, calculator.runningTotal);
  });

  it("number concatenate", function() {
    calculator.previousTotal = "1";
    calculator.add("4");
    assert.equal(5.0, calculator.runningTotal);
  });
});
