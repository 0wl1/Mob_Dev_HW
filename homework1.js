const firstName = "Ксения";
const lastName = "Станёните";
const middleName = "робертовна";
const yearOfBirth = "1998";
const currentYear = new Date().getFullYear();
let age = 0;
const studying = false; //0
const working = true; // 1

age = currentYear - parseInt(yearOfBirth);

console.table({firstName, lastName, middleName, yearOfBirth, currentYear, age, studying, working})