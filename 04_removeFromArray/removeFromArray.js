const removeFromArray = function(array, ...valuesToBeRemoved) {
    const filteredArray = array.filter(element =>  {
        return !valuesToBeRemoved.includes(element);
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
