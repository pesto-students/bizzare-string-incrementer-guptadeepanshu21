/* Helper function to increment number at the end.
 * @function incrementNumber.
 * @param {String} - Numbers at end in string format
 */
function incrementNumber(num) {
  const splitted = num.split(/(0+)/).filter((a) => a);

  let numberToIncrease = splitted.length === 1 ? splitted[0] : splitted[1];

  const increasedNumber = parseInt(numberToIncrease, 10) + 1;

  return increasedNumber.toString().padStart(num.length, "0");
}

/*
 * @function bizarreStringIncrementer.
 * @param {String} - Bizarre String having characters and digits
 */
function bizarreStringIncrementer(bizzareString) {

  // check for only number
  const bizarreNumber = parseInt(bizzareString, 10);
  if (bizarreNumber) {
    return bizarreNumber + 1;
  } else {
    const splittedString = bizzareString.split(/(\d+)$/).filter((a) => a);

    const splittedLength = splittedString.length;
    // check for no digit
    if (splittedLength === 1) return bizzareString + 1;

    if (splittedLength > 1) {
      let actualNumber = splittedString[splittedLength - 1];
      splittedString[splittedLength - 1] = incrementNumber(actualNumber);
      return splittedString.join("");
    }
  }
  return bizzareString;
}

module.exports = bizarreStringIncrementer;