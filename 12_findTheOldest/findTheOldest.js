const findTheOldest = function(people) {
    people.sort((a, b) => {
        return calculateAge(a) > calculateAge(b) ? -1 : 1;
    });
    return people[0];
};

function getDeathYear(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath;
    }
    return new Date().getFullYear();
}

function calculateAge(person) {
    return getDeathYear(person) - person.yearOfBirth;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
