/*
Create a function that takes an integer and return 'true' if is isDivisibleBy100 by 100,
otherwise return 'false'
isDivisibleBy100(1) ===> false
isDivisibleBy100(1000) ===> true

*/

function divisible(num) {

  return num%100==0
  
  }





/*
My Solution:
const lib = require('../lib/helpers') ;

const isDivisibleBy100 = (num) => {
  num = lib.dataSanity(num, "number");
  if(!num){
    throw "Error, argument must be of type 'number' and greater than 0";
  }
	return console.log(num % 100 === 0);
};
 isDivisibleBy100(3); // false
 isDivisibleBy100(1000); // true
isDivisibleBy100([]); // return the error

*/
