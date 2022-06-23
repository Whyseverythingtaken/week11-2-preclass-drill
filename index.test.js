// Input: [1,2,3]  function(num){return num * 2*}
// Output: [2,4,6]

// Input: [1,2,3]  function(num){return num + 1}
// Output: [2,3,4]

// Input: [1,2,3] function(num) {return num /2}
// Output: [.5, 1. 1.5]

// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1, 0, 1]

const applyCallback = require("./index");

describe("applyCallback", () => {
  it("It should return [2,4,6] when supplied with * function", () => {
    const multiplicationFunction = function (num) {
      return num * 2;
    };
    const result = applyCallback([1, 2, 3], multiplicationFunction);

    expect(result).toEqual([2, 4, 6]);
  });

  it("It should return [2,3,4] when supplied with + function", () => {
    const additionFunction = function (num) {
      return num + 1;
    };
    const result = applyCallback([1, 2, 3], additionFunction);

    expect(result).toEqual([2, 3, 4]);
  });

  it("It should return [.5, 1, 1.5] when supplied with / function", () => {
    const divisionFunction = function (num) {
      return num / 2;
    };
    const result = applyCallback([1, 2, 3], divisionFunction);

    expect(result).toEqual([0.5, 1, 1.5]);
  });

  it("It should return [-1, 0, 1] when supplied with - function", () => {
    const divisionFunction = function (num) {
      return num - 2;
    };
    const result = applyCallback([1, 2, 3], divisionFunction);

    expect(result).toEqual([-1, 0, 1]);
  });
});
