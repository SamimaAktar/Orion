const { add, subtract, multiply, divide } = require("./calculator");

describe("valid additions", () => {
  test("1 + 1 = 2", () => {
    expect(add(1, 1)).toEqual(2);
  });

  test("10 + 20 = 30", () => {
    expect(add(10, 20)).toEqual(30);
  });
});

describe("valid subtractions", () => {
  test("10 - 2 = 8", () => {
    expect(subtract(10, 2)).toEqual(8);
  });

  test("87 - 523 = -436", () => {
    expect(subtract(87, 523)).toEqual(-436);
  });
});

describe("valid  multiply", () => {
  test("10 * 2 = 20", () => {
    expect(multiply(10, 2)).toEqual(20);
  });

  test("100*3 = 300 ", () => {
    expect(multiply(100, 3)).toEqual(300);
  });
});


describe("valid divide", () => {
  test("10/2 = 5", () => {
    expect(divide(10, 2)).toEqual(5);
  });

  test("27/3 = 9", () => {
    expect(divide(27, 3)).toEqual(9);
  });
});