var removeFromArray = function() {
  var oArr = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    var index = oArr.indexOf(arguments[i]);
    if (index !== -1) {
      oArr.splice(index, 1);
    }
  }
  return oArr;
};

module.exports = removeFromArray;
