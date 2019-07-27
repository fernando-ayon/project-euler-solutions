/**
 * 2520 is the smallest number that can be divided
 * by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible
 * by all of the numbers from 1 to 20?
 */

 function getResult() {
   console.log(mcd(20));
 }

 function mcd(limit) {
   let result = mcm(11,12);
   for (let i = 13; i <= limit; i++) {
     console.log(i, result);
     result = mcm(result, i);
   }
   return result;
 }

 function mcm(n1, n2) {
   let mc = 0;
   let stop = n1 > n2 ? n1 : n2;

   while(stop !== 0) {
     if (stop % n1 === 0 && stop % n2 === 0) {
       mc = stop;
       stop = 0;
       return mc;
     }
     stop++;
   }
   return mc;
 }
