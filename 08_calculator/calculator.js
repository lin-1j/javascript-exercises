const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, value) => {
    return total + value;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, value) => {
    return total * value;
  })
};

const power = function(num1, num2) {
  if (num2 === 0) {
    return 1;
  } else if (num2 === 1) {
    return num1;
  } else {
    let result = 1;
    for (let i = 0; i < num2; i++) {
      result *= num1;
    }
    return result;
  }
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }

	let product = 1;
  for (let i = num; i > 0; i--){
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
