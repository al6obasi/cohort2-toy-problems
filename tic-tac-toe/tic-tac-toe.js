/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
var anyRow =function(rowIndex) {
var array = board[rowIndex];
var count = 0;
var countO =0;
for (var i = 0; i < array.length; i++) {
if (array[i] === 1) {
 count += 1
}
else {
	if (array[i] === 2) {
		countO +=1;
	}
}
}
  if (countO === 3 || count === 3) {
 	return 1;
  }
}
var hasAnyRowsolved =  function() {
for (var i = 0; i < board.length; i++) {
if (this.hasRowsolvedAt(i)) {
  return 1;
}
}
else {
	return hasAnyColsolved();
}
}
var hasColsolvedAt =function(colIndex) {
var count =0 ;
var arr =[];

for (var i = 0; i < board.length; i++) {
  arr.push(this.rows()[i][colIndex]);
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i]=== 1) {
        count +=1;
    }
    else {
		   	if (array[i] === 2) {
		countO +=1;
		} 
		}
}
if (count ==== 3 || countO === 3) {
return 1;
}
}
var hasAnyColsolved = function() {
var count = 0 ;
var arr =[] ;
for (var i = 0; i < board.length; i++) {
  if (this.hasColsolvedAt(i)) {
    return 1;
  }

}
return anySol();
}
var anySol = function (){
if (board[0][0] === 1 && board [1][1] === 1 && board [2][2] === 1) {
	return 1
}
elseif (board[0][0] === 2 && board [1][1] === 2 && board [2][2] === 2) {
		return 1
}
elseif (board[2][0] === 2 && board [1][1] === 2 && board [0][2] === 2){
	return 1
}
elseif (board[2][0] === 1 && board [1][1] === 1 && board [0][2] === 1)
	return 1;
}
}
return hasAnyRowsolved;
}

// the complixty time is O(N^2) quardatic 