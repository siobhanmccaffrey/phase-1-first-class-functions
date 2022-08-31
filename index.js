function liftWeights() {
    console.log("Pump iron");
  }

function receivesAFunction(liftWeights){
    liftWeights();
}

function returnsANamedFunction() {
  return function() {return 42};
}
const myFunc = returnsANamedFunction();
myFunc();