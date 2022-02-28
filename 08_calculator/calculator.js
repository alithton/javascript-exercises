const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product * item, 1);
};

const power = function(a, exp) {
	return a ** exp;
};

/* Recursive version:
const factorial = function(a) {
  if (a === 0) return 1;
  return a * factorial(a-1);	
};
*/

// Iterative version:
const factorial = function(a) {
  if (a === 0) return 1;
  let result = a;
  for (let i = a - 1; i > 0; i--) {
    result *= i;
  }
  return result;
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
