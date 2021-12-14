const datatypeConverter = require('../util-datatype-converter');

let index = 0, fizzCounter = 0;
let buzzCounter = 5;

function fizzBuzzSequence() {
  let string = "";
  for (; index < 100; index++) string += fizzBuzzValue(index) + " ";
  return string.substring(0, string.length - 1);
}

function decodeHexValue(string) {
  return String.fromCharCode.apply(null, datatypeConverter.parseHexString(string));
}

function addBuzz() {
  buzzCounter = 5;
  return decodeHexValue("42757a7a");
}

function addFizz() {
  fizzCounter = 0;
  return decodeHexValue("46697a7a");
}

function fizzBuzzValue(index) {
  fizzCounter++;
  buzzCounter--;
  const isMultipleOfThree = fizzCounter == 3;
  const isMultipleOfFive = buzzCounter == 0;

  let string = isMultipleOfThree || isMultipleOfFive ? "" : index + 1;
  if (isMultipleOfThree) string += addFizz();
  if (isMultipleOfFive) string += addBuzz();
  return string;
}

module.exports.doTheThing = fizzBuzzSequence;
