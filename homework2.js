let testFunctionReturn1 = "";
const arrayTestText1 = "быть или не быть -";
const arrayTestText2 = " вот в чем вопрос.";
function mult(value1, value2) {
    testFunctionReturn1 = value1 + value2;

    console.log("№1:", testFunctionReturn1);
}
mult(arrayTestText1, arrayTestText2);

let testFunctionReturn2 = [0];
const arrayTestNumber1 = [1,2,3,4,5];
const arrayTestNumber2 = [10,20,30];
function all(_value3, _value4, _value5) {
  var merge1 = Array.prototype.join.call(arguments);

  console.log("№2:", merge1);
}
all(testFunctionReturn2, arrayTestNumber1, arrayTestNumber2);

function reverseString(_value6, _value7) {
  var merge2 = Array.prototype.join.call(arguments);
  var splitString = merge2.split("");
  var reverseArray = splitString.reverse(); // только переворачивает двузначные числа тоже
  var joinArray = reverseArray.join("");

  console.log("№3:", joinArray);

  return joinArray;
  }
reverseString(arrayTestNumber1, arrayTestNumber2);

testFunctionReturn1 = testFunctionReturn1.replace(testFunctionReturn1[0], testFunctionReturn1[0].toUpperCase());

console.log("№4:", testFunctionReturn1);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const min=1;
const max=100;

let randomInt = random(min, max);

console.log("№5: Случайное число между " + min + " и " + max + " = " + randomInt);