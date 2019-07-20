
/******
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is
 * 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPal(number) {
  number.toString() === number.toString().split("").reverse().join("");
}

function getResult() {
  let r = 0;
  for (let p = 990; p > 99; p-= 11) {
    for (let q = 999; q > 99; q--) {
    	let t = p * q;
  		if (r < t && isPal(t)) {
    		r = t;
    		break;
  		} else if (t < r) {
    		break;
  		}
    }
  }
  console.log(r);
}
