/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/
export default function debounce(fn = () => {}, wait = 1000) { 
    return (...args) => {
        const delayed = () => fn.apply(this, args)
        return setTimeout(delayed, wait);
    }
}