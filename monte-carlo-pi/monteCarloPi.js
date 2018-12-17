/*

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

*/

export default function pi() {
    let iterations = 10000000, circleNumber = 0;
    for(let i = 0; i < iterations; i++) {
        let x = Math.random();
        let y = Math.random();
        
        let dist = x * x + y * y;

        if(dist <= 1) {
            circleNumber++;
        }
    }

    return 4 * circleNumber / iterations;
}