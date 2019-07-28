
/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 3^2 + 4^2 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 */

function getResult(sumSides) {
	let res = getProductBySum(sumSides);
	console.log("The result is: " + res);
}

function getProductBySum(sumSides) {
  let a = 0;
  let b = 0;
  let c = 0;
	let found = false;

	first: for (a = 1; a < sumSides / 3; a++) {
    for (b = a; b < sumSides / 2; b++) {
      c = sumSides - a - b;

      if (a * a + b * b === c * c) {
        found = true;
        break first;
      }
    }
  }
  return a * b * c;
}
