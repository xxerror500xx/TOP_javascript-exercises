
var fibonacci = function(num) {
  let n1 = 0;
  let n2 = 1;
  if (num < 0) return "OOPS";
  for (let i = 1; i < num; i++) {
    var temp = n2;
    n2 = n1 + n2;
    n1 = temp;
  }
  return n2;
};

module.exports = fibonacci
