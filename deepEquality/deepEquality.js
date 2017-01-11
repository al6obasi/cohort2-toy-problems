/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
    var count = Object.keys(obj1);
    var count2 =Object.keys(obj1);

    if (count.length !== count2.length) {
      return false;
    }
    var arr=[];
    for (var i = 0; i < count2.length; i++) {
        if (count[i]!==count2[i]) {
          return false;
        }
    }
    for (var i = 0; i < count2.length; i++) {
      if (obj1[count[i]] !== obj2[[count2]]) {
        return false;
      }
    }
    return true;
  }

// the complixty time is O(n);
