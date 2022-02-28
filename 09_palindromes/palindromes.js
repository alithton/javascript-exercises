const palindromes = function (string) {
    // Strip out any non-letter characters
    let tidyString = string.toLowerCase().replace(/[^a-z]/g, '');
    const reversed = Array.from(tidyString).reverse().join('');
    return tidyString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
