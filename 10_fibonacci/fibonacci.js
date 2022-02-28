/*
const fibonacci = function(n) {
    if (n < 1) return 'OOPS';
    if (n == 1 || n == 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
};
*/

const fibonacci = function(n) {
    if (n < 1) return 'OOPS';
    
    return fibIter(1, 0, n)
};

function fibIter(a, b, count) {
    if (count == 0) {
        return b;
    } else {
        return fibIter(a + b, a, count - 1);
    }
}

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
