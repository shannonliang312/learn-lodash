// include the Lo-Dash library
var _ = require("lodash");

var worker = function (cities) {
  // do work; return stuff
  _.forEach(cities, function(city){
    let population = city.population;
    let size = "";
    
    if(population < 0.5) {
      size = "small";
    }
    else if (population >= 0.5 && population < 1) {
      size = "med";
    }
    else {
      size = "big";
    }

    city["size"] = size;
  });

  return cities;
};

// export the worker function as a nodejs module
module.exports = worker;