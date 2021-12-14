const datatypeConverter = require('../util-datatype-converter');

let index = 0, fizzCounter = 0;
let buzzCounter = 5;

function fizzBuzzSequence() {
  let string = "";
  for (; index < 100; index++) string += fizzBuzzValue(index) + " ";
  return string.substring(0, string.length - 1);
}

function addBuzz() {
  buzzCounter = 5;
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("42757a7a"));
  return result;
}

function addFizz() {
  fizzCounter = 0;
  let result = String.fromCharCode.apply(null, datatypeConverter.parseHexString("46697a7a"));
  return result;
}

function fizzBuzzValue(number) {
  fizzCounter++;
  buzzCounter--;
  const shouldAddFizz = fizzCounter == 3;
  const shouldAddBuzz = buzzCounter == 0;
  let string = shouldAddFizz || buzzCounter == 0 ? "" : number + 1;
  if (shouldAddFizz) string += addFizz();
  if (shouldAddBuzz) string += addBuzz();
  return string;
}

module.exports.doTheThing = fizzBuzzSequence;
