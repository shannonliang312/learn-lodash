// include the Lo-Dash library
var _ = require("lodash");

var worker = function (arr) {
  // do work; return stuff
  var res = _.chain(arr)
    .map(function(val){ return (val + "chained").toUpperCase();})
    .sortBy(function(val){ return val[0]});
  
  return res;
};

// export the worker function as a nodejs module
module.exports = worker;
