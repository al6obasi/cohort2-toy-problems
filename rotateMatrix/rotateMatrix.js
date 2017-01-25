/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */
<<<<<<< HEAD
var rotateMatrix =function (matrix , num) {
var array =[];
var bigArr =[];
if (num === 1) {
	var j = 0;
	while(j<matrix.length){
		for (var i = matrix.length -1; i >=0; i-- ) {
			array.push(matrix[i][j])
		}
		bigArr.push(array)
		console.log(array)
		array = []
		j++;	
	}
	return bigArr;
}
else if (num === -1 ){
		var j = matrix.length-1;
	while(j>=0){
		for (var i = matrix.length -1; i >=0; i-- ) {
			array.push(matrix[i][j])
		}
		bigArr.push(array)
		console.log(array)
		array = []
		j--;	
	}
	return bigArr;	
}
}
// the complixtiy is linear Big (N);
=======

var rotateMatrix =function (matrix) {
	
}
>>>>>>> 1337768aeb5d682fb6643a9f52b37165938d4930
///////////////////