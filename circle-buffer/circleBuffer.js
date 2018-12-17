/*
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
*/

export default class circleBuffer {
    constructor(N) {
        this.buffer = new Array(N).fill(null);
        this.index = 0;
    }

    record(id) {
        this.buffer[this.index++] = id;
        if(this.index >= this.buffer.length) {
            this.index = 0;
        }
    }

    getLast(i) {
        let startIndex = this.index - i;
        if(startIndex < 0) {
            return [...this.buffer.slice(this.buffer.length + startIndex, this.buffer.length), ...this.buffer.slice(0, this.index)];
        } else {
            return this.buffer.slice(startIndex, this.index);
        }
    }
}