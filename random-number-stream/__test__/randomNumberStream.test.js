import randomNumber from '../randomNumberStream';

let stream = [1, 2, 3, 4]; 
let r = new randomNumber();
for(let i = 0; i < stream.length; i++) {
    console.log(`Random number from first ${i+1} numbers is ${r.getNumber(stream[i])}`)
}