 function add(a, b){
    return a + b;
 }

 function sub(a, b){
    return a - b;
 }

 module.exports = {add, sub};

//  module.exports = {    // Single Export
//    addFn = add, 
//    subFn = sub,
//  };


//  module.exports = {    // Single Export
//    add, 
//    sub,
//  };



//  exports.add = (a, b) => a + b;
//  exports.sub = (a, b) => a - b;