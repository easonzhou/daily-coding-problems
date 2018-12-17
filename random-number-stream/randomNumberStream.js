/*

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

*/

export default class randomNumber {
    constructor() {
        this.count = 0;
        this.number;
    }

    getNumber(x) {
        this.count++;
        if(this.count === 1) {
            this.number = x;
        } else if(Math.floor(Math.random() * this.count) === this.count - 1) {
            this.number = x;
        };
        
        return this.number;
    }
}
