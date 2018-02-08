var repeatString = function(str, num) {
  var newStr = '';
  if (num < 0) {
    return 'ERROR';
  }else {
    for (var i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;

}
// This is an ECMA2015 modern version 
// var repeatString = function(str, num) {
//   if (num > 0) {
//     for (var i = 0; i < num; i++) {
//       return str.repeat(num);
//     }
//   }else if (num === 0) {
//     return '';
//   }else {
//     return 'ERROR';
//   }
// }

module.exports = repeatString
