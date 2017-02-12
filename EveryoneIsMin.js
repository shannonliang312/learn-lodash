// include the Lo-Dash library
var _ = require("lodash");

var worker = function (arr) {
  // do work; return stuff
  var res = {"hot": [], "warm": []};

  _.forEach(arr, function (temperatures, town) {
    console.log(town);
    if(_.every(temperatures, function(val){return val>19;})) {
      res.hot.push(town);
    }
    else if(_.some(temperatures, function(val){return val>19;})) {
      res.warm.push(town);
    }
  });

  return res;
};

// export the worker function as a nodejs module
module.exports = worker;
