// var sumAll = function(n1, n2) {
//   var sum = 0;
//
//   if (!Number.isInteger(n1 && n2) || (n1 < 0 || n2 < 0)){
//     return 'ERROR';
//   }
//
//   var min, max;
//   if (n1 < n2) {
//     min = n1;
//     max = n2;
//   }else if (n1 > n2) {
//     min = n2;
//     max = n1;
//   }
//
//   for (var i = min; i <= max; i++) {
//     sum += i;
//   }
//   return sum;
// };
//
// module.exports = sumAll;

var sumAll = function(n1, n2) {
  var min, max;
  if (!Number.isInteger(n1 && n2) || (n1 < 0 || n2 < 0)) return 'ERROR';
  (n1 < n2) ? (min = n1, max = n2):(min = n2, max = n1);

  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
