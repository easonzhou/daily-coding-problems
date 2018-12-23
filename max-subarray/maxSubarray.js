/*

This problem was asked by Google.

Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)
Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

*/

class Node {
    constructor(val) {
        this.val = val;
        this.prev = this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    addToBack(i) {
        let node = new Node(i);
        if(!this.head) {
            this.head = this.tail = node;
        } else {
            let temp = this.tail;
            this.tail = node;
            this.tail.prev = temp;
            temp.next = this.tail;
        }
    }

    removeFromBack() {
        if(!this.tail) {
            console.log("empty linked list, cannot remove from back");
            return;
        }

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }
    }

    removeFromFront() {
        if(!this.head) {
            console.log("empty linked list, cannot remove from front");
            return;
        }

        if(this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }
    }

    front() {
        return this.head.val;
    }

    back() {
        return this.tail.val;
    }

    isEmpty() {
        return !this.head;
    }
}

export default function maxSubarray(nums, k) {
    let ll = new LinkedList();
    let i;
    for(i = 0; i < k; i++) {
        while(!ll.isEmpty() && nums[i] >= nums[ll.back()]) {
            ll.removeFromBack();
        }
        ll.addToBack(i);
    }   
    console.log(`${nums[ll.front()]} `);

    for(; i < nums.length; i++) {

        while(ll.front() <= i - k) {
            ll.removeFromFront();
        }

        while(!ll.isEmpty() && nums[i] >= nums[ll.back()]) {
            ll.removeFromBack();
        }
        ll.addToBack(i);

        console.log(`${nums[ll.front()]} `);
    }
}