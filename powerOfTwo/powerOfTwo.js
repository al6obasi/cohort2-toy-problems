/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	// calcolate the pow Of two for the number 
var sol =Math.pow(2,num);
// I put the function toFixed from Internet to convert any number contain scientific notation  
 function toFixed(sol) {
  var result = '';
  var xStr = sol.toString(10);
  var digitCount = xStr.indexOf('e') === -1 ? xStr.length : (parseInt(xStr.substr(xStr.indexOf('e') + 1)) + 1);
  
  for (var i = 1; i <= digitCount; i++) {
    var mod = (sol % Math.pow(10, i)).toString(10);
    var exponent = (mod.indexOf('e') === -1) ? 0 : parseInt(mod.substr(mod.indexOf('e')+1));
    if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
      result = '0' + result;
    }
    else {
      result = mod.charAt(0) + result;
    }
}
// convert the number to array 
var output = String(result).split('')

var sum = 0 ;
// loop to compute the sum 
	for (var i = 0; i < output.length; i++) {
		sum += Number(output[i])
	}
return sum ;
  }
return toFixed(sol)
}
// the time complixty exponantial