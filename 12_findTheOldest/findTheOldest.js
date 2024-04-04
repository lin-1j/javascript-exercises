const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        let currentAge = getAge(current.yearOfDeath, current.yearOfBirth);
        return oldestAge > currentAge ? oldest : current;
    })
};

function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    } 

    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
