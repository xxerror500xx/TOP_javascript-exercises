var caesar = function(string, shiftBy) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var splitStr = string.split('');
  var newCypher = [];
  var max = alphabet.length;

  var getShiftLetter = function(char, shiftBy) {
    var index = alphabet.indexOf(char.toLowerCase());
    var newIndex = index + shiftBy;
    if (newIndex < 0) {
      while (newIndex < 0) {
        newIndex += max;
      }
    }
    if (newIndex >= max) {
      while (newIndex >= max) {
        newIndex -= max;
      }
    }
    var newChar = alphabet[newIndex];
    if (char === char.toUpperCase()) newChar = newChar.toUpperCase();
    return newChar;
  };

  for (var i = 0; i < splitStr.length; i++) {
    if (alphabet.includes(splitStr[i].toLowerCase())) {
      newCypher.push(getShiftLetter(splitStr[i], shiftBy));
    } else {
      newCypher.push(splitStr[i]);
    }
  }
  return newCypher.join('');
};


module.exports = caesar;
