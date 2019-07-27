/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */

function getResult() {
  const position = 100001;
	const primes = getListOfPrimesTo(position);
	console.log(
    'Prime numbers to ' + position + ' = ' + primes +
    '\n \n Prime at position ' + position + ' = ' + primes[position-1]
  );
}

function getListOfPrimesTo(max) {
    let store  = [];
    let primes = [];
    let i;
    let j;

    for (i = 2; i <= Number.MAX_SAFE_INTEGER; ++i) {
        if (!store[i]) {
            primes.push(i);
            if (primes.length === max) {
            	break;
            }

            for (j = i * 2; j <= 1000000; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}
