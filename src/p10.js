
/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */

function getResult(number) {
	let res = getSumOfPrimesBelow(number);
	console.log("The result is: " + res);
}

function getSumOfPrimesBelow(number) {
	return getListOfPrimesTo(number)
    		.reduce((a, b) => a + b);
}

function getListOfPrimesTo(limit) {
    let store  = [];
    let primes = [];
    let i;
    let j;

	// get all the primes up until the limit
    for (i = 2; i <= limit; ++i) {
        if (!store[i]) {
            primes.push(i);

            // 2 is the only even number that is a prime
            for (j = i * 2; j <= limit; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}
