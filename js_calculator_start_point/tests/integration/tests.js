const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

describe("calculator functionality", function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:3000");
  });

  // write integration tests here in the form of "it should do something..."
  it("should have working number buttons", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("2");
  });

  it("should update display with arithmetical operations", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("4");
  });

  it("should update display with multi operations", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number8")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("1");
  });

  it("should display a positive output", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("9");
  });

  it("should display a negative output", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("-3");
  });

  it("should display a decimal output", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number2")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("0.4");
  });

  it("should display a large output", function() {
    running_total = element(by.css("#running_total"));
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#number9")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#number5")).click();
    element(by.css("#operator_equals")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal(
      "55555554999944450000"
    );
  });
});
