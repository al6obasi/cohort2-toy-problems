
function rotate(array, steps){
  if ( steps === 0 ) {
    return array ;
  }
  else {
    if (steps > 0) {
      while(steps > 0){
        var temp =array[array.length-1]
        // console.log(temp)
        // console.log(array.slice(0,array.length-1))
        array = array.slice (0,array.length-1)
        array.unshift(temp)
        steps -- ;
      }
    return array ;
    }
  else {
      while (steps < 0){
        var temp =array[0]
        array = array.slice (1)
        array.push(temp)
        steps ++ ; 
      }
      return array ;
    }
  }

}
function nextBigger(num){
  num = num + '';
  if (num.length === 1) {
    return -1
  }
  if (num.length === 2) {
    if (Number(num[0]) < Number(num[1]) ) {
      var arr =[];
      arr.push(Number(num [1]))
      arr.push(Number(num [0]))
      console.log(arr)
      return  Number(arr.join(''));
    }
    else {
     return Number (num) 
    }
  }
    if (num.length === 3) {
    if (Number(num[1]) < Number(num[2]) ) {
      var arr =[];
      arr.push(Number(num [0]))
      arr.push(Number(num [2]))
      arr.push(Number(num [1]))
      console.log(arr)
      return  Number(arr.join(''));
    }
    else {
           var arr =[];
      arr.push(Number(num [1]))
      arr.push(Number(num [2]))
      arr.push(Number(num [0]))
      console.log(arr)
      return  Number(arr.join('')); 
    }
  }
  var max = 0;
    for(var i=num.length-2; i>0; i--){
      var numArray = num.substr(i).split("");
      max = Math.max.apply ( Math,numArray );
      if ( numArray[0] < max ){
          numArray.sort( function ( a , b ) { return a-b ; } );
          numArray.splice( -1 );
          numArray = numArray.join("");
          return Number( num.substr( 0 , i ) + max + numArray );
      }
    }
  return -1;
};
