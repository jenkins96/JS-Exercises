/* Create a function that takes a number (houses)  as an argument and 
returns the number of matchsticks needed to build the house. 
Houses are interconnected meaning:
For one  house, 6 sticks are needed.
For two houses, 11 sticks are needed.
For trhree houses, 16 sticks are needed

matchHouses(0) ===> 0
matchHouses(1) ===> 1
matchHouses(4) ===> 21
matchHouses(87) ===> 436
*/
function matchHouses(step) {
}


/*
My Solution:
function matchHouses(step) {
  const matchesForOneHouse = 6;
  if(step === 0){
      return 0;
  }
  const result = matchesForOneHouse * step - (step - 1);
  return result;
}
*/