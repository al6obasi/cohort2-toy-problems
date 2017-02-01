/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var	result = array.sort((a,b) => (a-b) );
	var	max =result[result.length-1] * result[result.length-2] * result[result.length-3];
	return max ; 
};

// the complixity time is linear


