/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var mid = Math.floor((array.length)/2)
  if (target >= mid) {
    for (var i = mid-1; i < array.length; i++) {
      if ( array [i] === target ) {
        return i
      }
    }
  }
    else{
      for (var i = 0; i <= mid; i++) {
        if( array[i] === target ){
          return i;
        }
      }
    }
 };
// var binarySearch = function (array, target) {
//   var minIndx = 0;
//   var maxIndx = array.length-1;
//   var currIndx ;
//   var currElem;
//   while(minIndx < maxIndx){
//     currIndx = Math.floor((minIndx+maxIndx)/2)|0;
//     currElem = array[currIndx];
//     if (currElem < target) {
//       minIndx = currIndx + 1;
//     }
//     else if (currElem > target){
//       maxIndx =currIndx - 1;
//     }
//     else {
//       return Math.floor(currIndx) ;
//     }
//   }
//   return -1 ;
// };

