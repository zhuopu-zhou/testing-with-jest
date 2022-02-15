const sum = (a, b) => {
  if (!(a && b)) {
    return "Invalid Input";
  }
  return a + b;
};

const square = (a) => {
  if (!a) {
    return "Invalid Input";
  }
  return a * a;
};
//const cube = (a) => a^3;

console.log("The sum is :", sum(null, 6));

const cube = (a, b) => {
  sum(a, b);
  if (!sum) {
    return "Invalid Input";
  }
  return sum ** 3;
};

module.exports = { sum, square, cube };
