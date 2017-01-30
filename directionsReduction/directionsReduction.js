/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/
var dirReduc = function(directions){
	var count1 = 0 ;
	var count2 = 0 ;
	var array =[] ;
	for (var i = 0; i < directions.length; i++) {
			if (directions[i] === "NORTH") {
				count1 ++ ;
			}
			else if (directions[i] === "SOUTH") {
				count1 -- ;
			}
			else if (directions[i] === 'WEST') {
				count2 ++ ;
			}
			else if (directions[i] === 'EAST') {
				count2 -- ;
			}
		}
		if (count1 === 0 && count2 === 0) {
			return "No need to move"
		}
	while(count1 > 0){
		array.push('NORTH')
		count1 --;
	}
	while (count1 < 0 ){
		array.push('SOUTH')
		count1 ++ ;
	}
		while(count2 > 0){
		array.push('WEST')
		count2 --;
	}
	while (count2 < 0 ){
		array.push('EAST')
		count2 ++ ;
	}
	return array ;
		// console.log(count1,count2)
	//return directions;
};
// the complixity time is linear 

