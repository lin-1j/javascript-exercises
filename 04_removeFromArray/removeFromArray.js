const removeFromArray = function(array, ...input) {
    let new_array = [];

    array.forEach(function(item){
        if (!input.includes(item)) {
            new_array.push(item);
        }
    });

    return new_array;
};



// Do not edit below this line
module.exports = removeFromArray;
