<<<<<<< HEAD

function LinkedList(){
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.IsEmpty = function() {
	return this.head === null ;
};

LinkedList.prototype.size = function() {
	var current = this.head;
	var count = 0;

	while(current !== null ){
		count ++;
		current = current.next;
	}

	return count ;
};
LinkedList.prototype.addToTail = function (val){
	var newNode = {
		value : val ,
		next : null
	};
	if (this.IsEmpty()) {
		this.head = newNode ;
		return ;
	}
    var current = this.head;

    while (current.next !== null){
    	current = current.next;
    }

    current.next = newNode;
};

LinkedList.prototype.contains = function(val){
	var current = this.head;

	while (current !== null){
		if (current.value === val) {
			return true;
		}
		current = current.next;
	}
	return false ;
};
LinkedList.prototype.remove = function (val){
	if (!this.contains(val)) {
		return;
	}
	if (this.head.value === val) {
		this.head = this.head.next;
		return ;
	}
	var prev = null;
	var curr = this.next;

	while (curr.value !== val){
		prev = curr;
		curr = curr.next;
	}
	prev.next = curr.next;

};
//The complixity time for this linked list = O(log N)
=======
/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  //fill me in!
};

//write methods here!
>>>>>>> 42a961f95ede9dc34c2125c99e247e9b7bf32aad
