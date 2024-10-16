export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.firstName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.age.sort((a, b) => a - b);
}

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
