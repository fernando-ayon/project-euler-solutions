
/******
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function getResult(number) {
    const limit = Math.sqrt(number);
    let curFac = 1;
    for (let i = 2; i < limit; i++) {
    	if (number % i === 0 && (curFac *= i) === number) {
            console.log(i);
        }
    }
}
