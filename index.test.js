const { sum, square } = require("./index.js");

describe("should contain tests for sum", () => {
  it("should add 2 numbers", () => {
    //Arrange
    const a = 4;
    const b = 6;
    const expected = 10;
    //Act
    const actual = sum(a, b);
    //Assert
    expect(actual).toBe(expected);
  });

  it("should return an error for invalid inputs", () => {
    //Arrange
    const a = undefined;
    const b = 10;
    const expected = "Invalid Input";
    //Act
    const actual = sum(a, b);
    //Assert
    expect(actual).toBe(expected);
  });
});

describe("should contain tests for square", () => {
  it("should square a number", () => {
    //Arrange
    const num = 9;
    const expectedResult = 81;

    //Act
    const actual = square(num);

    //Assert
    expect(actual).toBe(expectedResult);
  });

  it("should return an error for invalid inputs", () => {
    //Arrange
    const num = null;
    const expectedResult = "Invalid Input";

    //Act
    const actual = square(num);

    //Assert
    expect(actual).toBe(expectedResult);
  });
});

describe("should contain tests for cube for result from sum ",()=>{
  it("should cube a number from sum",()=>{
    //Arrange

    //Act

    //Asseert
  })
});
