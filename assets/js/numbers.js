function compute(expression) {
    // TODO - write method definition here
    // The expression [String] is an arithmetical formula "1 + 1"
    //it can contain:[0-9] digits 1.5, 0.5 or .5 decimal fractions
     //-5, -.4, -5.55 negative values, 2e-2, .25e+12, -3e-10 exponential notation values
    //* multiplication sign / division sign + plus sign - subtraction sign ( and ) parentheses
    
    //the PEMDAS rules are followed:
      //parentheses first
      //then multiplication and division (from left to right)
      //then addition and subtraction (from left to right)
      //the multiplication sign is omitted before parentheses; 4(2+1); equals to 4*(2+1)
      //var expression = "1+1";
      //var stringMath = require('string-math');
       
      var result = stringMath(expression);
      return result;        

}
//console.log(compute("1+1"));
function add(){
    console.log(compute("1+1"));
    console.log(compute("1+1+1"));
    console.log(compute("3+2+1"));
    }
function subtract(){
    console.log(compute("1-1"));
    console.log(compute("1-1-1"));
    console.log(compute("5-2-1"));
}
function multiplication();
function division();
function additionAndSubtraction();
additionAndMultiplicationTest();
additionAndDivisonTest();
subtractionAndMultiplicationTest();
subtractionAndDivisonTest();
allOperatorTest();
