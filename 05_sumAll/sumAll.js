const sumAll = function(a, b) {

    if (!isNonNegativeInteger(a) || !isNonNegativeInteger(b)) {
        return 'ERROR';
    }

    const larger = a < b ? b : a;
    const smaller = a < b ? a : b;

    let sum = 0;

    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

function isNonNegativeInteger(x) {
    return Number.isInteger(x) && x >= 0;
}

// Do not edit below this line
module.exports = sumAll;
