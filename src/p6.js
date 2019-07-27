/**
 * The sum of the squares of the first ten natural numbers is,
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the
 * first one hundred natural numbers and the square of the sum.
 *
 * Solution :
 * The sum of the squares is = n * (n + 1) / 2
 * The square of the sum es  = n * (n + 1) * (2n + 1) / 6
 * therefore, the difference of them is,
 * (n * (n2 - 1) * (3n + 2)) / 12
 */

 function getResult(n) {
   console.log((n * (Math.pow(n, 2) - 1) * (3 * n + 2)) / 12);
 }
