/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
    this.stack.push(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
   this.stack.pop();
   };

   // return the number of items in the stack
   this.size = function(){
   return this.stack.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   Stack.call(this);

   var inbox = new Stack();
   var outbox = new Stack();
   // called to add an item to the `queue`
   this.enqueue = function(value){
     this.inbox.push(value);
     }
   };
    Queue.prototype = Object.create(Stack.prototype)
    Queue.prototype.constructor = Queue ;
   // called to remove an item from the `queue`
   this.dequeue = function(){
    outbox.shift();
    
   };

   // should return the number of items in the queue
   this.size = function(){
   return this.inbox.length -this.outbox.length;
   };

// time compilixty : O(n) 