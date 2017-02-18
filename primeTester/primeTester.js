/**
 * A prime number is an integer number that cannot be divided by any number 
 * except itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */
var primeTester = function(n) {
	if ( n === 2 || n === 3 ) {
		return true ;
	}
	else{
		if (n % 2 === 0 || n % 3 === 0 || n % 4 === 0 ) {
			return false;
		}
		else{
			return true;
		}
	}
}
var generatesPrime =function(n){
	var array =[];
	for (var i = 0; i <= n; i++) {
		if (primeTester(i)) {
			array.push(i)
		}
	}
	return array;
}

}
 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */
