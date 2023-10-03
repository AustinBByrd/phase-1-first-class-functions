function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback(); 
    }
  }
function returnsANamedFunction() {
    function thisIsAFunction() {
}
    return thisIsAFunction;
}
function returnsAnAnonymousFunction() {
    return function() {

    };
}