
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	var sum = 0 ;
	var arr = romanNumeral.split('');
	var array = Object.keys(DIGIT_VALUES)
	if (arr [0] === 'I' && arr[1] !== 'I' ) {
		return null
	}
	for (var i = 0; i < arr.length; i++) {
		if (array.includes(arr[i])) {
			var temp =String(arr[i])

			sum += DIGIT_VALUES[temp];
		}
		
	}
	return sum;
}