const ftoc = function(f, precision=1) {
  const celsius = (f - 32) * (5/9);
  return roundWithPrecision(celsius, precision);
};

const ctof = function(c, precision=1) {
  const fahrenheit = c * 9/5 + 32;
  return roundWithPrecision(fahrenheit, precision);
};

/* Built in Math.round only rounds to nearest whole number while 
    Number.toFixed() returns a string and appears to yield inconsistent
    results between browsers. See: 
    https://stackoverflow.com/questions/566564/math-roundnum-vs-num-tofixed0-and-browser-inconsistencies
   */
function roundWithPrecision(x, precision) {
  return Math.round(x * 10**precision) / 10**precision;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
