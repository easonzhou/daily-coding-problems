/*
An XOR linked list is a more memory efficient doubly linked list. 

Instead of each node holding next and prev fields, it holds a field named both, which is an XOR 
of the next node and the previous node. 

Implement an XOR linked list; it has an add(element) which adds the element to the end, 
and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python), you can assume you have access to get_pointer 
and dereference_pointer functions that converts between nodes and memory addresses.
*/

function node(val, prev, next) {
    this.val = val;
    this.both = get_pointer(prev) ^ get_pointer(next);
}

export default function xorLinkedList(nums) {
    this.head = this.tail = null;

    for(let i = 0; i < nums.length; i++) {
        let n = new node(nums[i], this.tail, null);
        this.add(n);
    }
}

xorLinkedList.prototype.add = function(element) {
    if(!this.tail) {
        this.tail = this.head = element;
        this.tail.both = this.head.both = null;
    } else {
        
        this.tail.both = this.tail.both ^ get_pointer(element);
        // console.log("2. this.tail", this.tail);
        
        element.both = get_pointer(this.tail);
        this.tail = element;
        // console.log("3. this.tail", this.tail);

    }
}

xorLinkedList.prototype.get = function(index) {
    let next = this.head;
    let prev = null;
    let temp;
    for(let i = 0; i < index; i++) {
        temp = next;
        next = dereference_pointer(next.both ^ get_pointer(prev));
        prev = temp;
    }
    return next;
}