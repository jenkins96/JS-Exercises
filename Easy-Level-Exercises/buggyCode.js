/*
Fix Code
Should:
sumArray([1,2,3,4,5]) ===> 15
*/

function sumArray(arr) {
	sum ,	
  for (i=0, i<arr, i++) {
	  sum+=arr[i]
	}
  return sum
}
/*
My Solution:
const sumArray = arr => {
	let sum = 0;	
  for (let i = 0; i < arr.length; i++) {
	  sum += arr[i]
	}
  return sum;
}
*/