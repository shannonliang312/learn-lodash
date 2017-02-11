//Because `sortBy` only sorts from smallest to largest you may need to use the callback function.

var _ = require("lodash");

var worker = function (arr) {
  // do work; return stuff
  return _.sortBy(arr, function(val){
    return -val.quantity;
  });
};

// export the worker function as a nodejs module
module.exports = worker;
