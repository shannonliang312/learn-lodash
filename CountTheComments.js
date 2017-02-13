// include the Lo-Dash library
var _ = require("lodash");

var worker = function (arr) {
  // do work; return stuff
  var tmp = _.groupBy(arr, "username");
  var res = [];

  _.forEach(tmp, function(val, user){
    res.push({
      username: user,
      comment_count: _.size(val) 
    });
  });

  return res.reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
