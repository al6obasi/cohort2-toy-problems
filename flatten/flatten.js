/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(coll){
  var array =arguments;
  var result =[];
  for (var i = 0; i < array.length; i++) {
   if (typeof(array[i]) === "string" || typeof(array[i]) === 'number') {
      result.push(array[i])
   } 
  else {
    if (Array.isArray (array[i])) {
      for (var j = 0; j < array[i].length; j++) {
   if (typeof(array[i][j]) === "string" || typeof(array[i][j]) === 'number' || array[i] === null) {
      result.push(array[i][j])
   }
   else {
    for (var k = 0; k < array[i][j].length; k++) {
    if (typeof(array[i][j][k]) === "string" || typeof(array[i][j][k]) === 'number' || array[i][j][k]===null) {
      result.push(array[i][j][k])
   }
    flatten(array[i][j][k]) 
    }
   } 
      }
    }
  }
}
  return result;

}
// with recursion 
  var result =[];

function flatten1(coll){

  var array =arguments;
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i]) === "string" || typeof(array[i]) === 'number' ||array[i]=== null) {
       result.push(array[i])
    } 
    else {
      if (Array.isArray (array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          if (typeof(array[i][j]) === "string" || typeof(array[i][j]) === 'number') {
          result.push(array[i][j])
          }
        else{
          result = result.push(flatten1(array[i][j]))
        
        }  
       }
     }
    }
  }
return result ;
}