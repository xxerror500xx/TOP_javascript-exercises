// var removeFromArray = function() {
//   var oArr = arguments[0];
//   for (var i = 1; i < arguments.length; i++) {
//     var index = oArr.indexOf(arguments[i]);
//     if (index !== -1) {
//       oArr.splice(index, 1);
//     }
//   }
//   return oArr;
// };

// ECMA2015 useage of the spread operator and a more compact filter on value
var removeFromArray = function(...arguments) {
  var array = arguments[0];
  return array.filter(val => !arguments.includes(val));
};

module.exports = removeFromArray;
