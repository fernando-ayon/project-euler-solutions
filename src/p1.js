
/******
 * PROBLEM :
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
function sumOfMultiples(limit, number) {
	let sum = 0;
    for (let i = 0; i < limit; i++) {
    	if (i % number === 0) {
        	sum += i;
        }
    }
    return sum;
}

/**
 * Function to export
 */
function getResult(limit, ...numbers) {
 	const iterations = numbers.length;
	let toSubstract = numbers.pop();
    let result = 0;

    for (let i = 0; i <= iterations; i++) {
    	if (i === iterations) {
        	result -= sumOfMultiples(limit, toSubstract);
        } else {
        	result += sumOfMultiples(limit, numbers[i]);
        }
    }
    console.log("The result is: " + result);
}
