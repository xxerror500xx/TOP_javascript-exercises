var translate = function(string) {
  var vowels = "aeiouy".split('');
  var words = string.split(' ');
  var newWords = [];
  var phoneme = "qu";
  var pigWord = function(word) {
    var pre = '';
    var chars = word.split('');
    if (vowels.includes(chars[0])) {
      word += 'ay';
      return word;
    } else if (word.includes(phoneme)) {
      toIndex = word.indexOf(phoneme) + phoneme.length;
      pre = word.slice(0, toIndex);
      word = word.slice(toIndex, word.length);
      word += pre + 'ay';
      return word;
    } else if (!vowels.includes(chars[0]) && !vowels.includes(chars[1]) && !vowels.includes(chars[2])) {
      pre = chars[0] + chars[1] + chars[2];
      word = word.slice(3, word.length);
      word += pre + 'ay';
      return word;
    } else if (!vowels.includes(chars[0]) && !vowels.includes(chars[1])) {
      pre = chars[0] + chars[1];
      word = word.slice(2, word.length);
      word += pre + 'ay';
      return word;
    }else {
      pre = chars[0];
      word = word.slice(1, word.length);
      word += pre + 'ay';
      return word;
    }
  };
  for (var i = 0; i < words.length; i++) {
    newWords.push(pigWord(words[i]));
  }
  return newWords.join(' ');
};

module.exports = {
  translate
};
