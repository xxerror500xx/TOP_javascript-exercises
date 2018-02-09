function add(n1, n2) {
  return n1 + n2
  // Long version below
  // var total = 0;
  // for (var i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }
  // return total;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function sum(array) {
  return array.reduce((current, total) => total + current, 0);
  // if (Array.isArray(arguments[0])) {
  //   var values = arguments[0];
  //
  //   if (values.length === 0) {
  //     return 0;
  //   }else {
  //     var total = 0;
  //     for (var i = 0; i < values.length; i++) {
  //       total += values[i];
  //     }
  //     return total;
  //   }
  // }
}

function multiply(array) {
  return array.reduce((current, total) => total * current, 1);
  // if (Array.isArray(arguments[0])) {
  //   var values = arguments[0];
  //
  //   if (values.length === 0) {
  //     return 0;
  //   }else {
  //     var total = 1;
  //     for (var i = 0; i < values.length; i++) {
  //       total *= values[i];
  //     }
  //     return total;
  //   }
  // }
}

function power(n1, n2) {
  return Math.pow(n1, n2);
  // var total = n1;
  // for (var i = 1; i < n2; i++) {
  //   total *= n1;
  // }
  // return total;
}

function factorial(n1) {
  var total = 1;
  if (n1 === 0) return 1;

  if (n1 === 2) {
    return 2;
  } else {
    for (var i = 1; i <= n1; i++) {
      total *= i;
    }
    return total;
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
