
// * 1) Create a function that returns 'true' if a string is empty, otherwise return 'false'.
	// isEmpty("") // true
	// isEmpty(" ") // false

const isEmpty = str => !str;



// * 2) Create Function that takes an integer and return 'true' if divisible by 100, otherwise return 'false';

const isDivisibleBy100 = num => {
	num = typeof(num) === "number" && num > 0 ? num : false;
	if(!num){
		return "Error";
	}
	return num % 100 === 0;	
};



// * 3) Create a function that takes a string and return it as an integer.
const strToInt = str => {
	try{
		str = typeof(str) === 'string' && str.trim().length > 0 ? str.trim() : false;
		if(!str){
			throw "El argumento debe ser de tipo 'string' y tener una longitud mayor que 0";
		}

		return str * 1;
	} catch(err){
		return err;
	}
};



// * 4) Given two strings, 'firstName' and 'lastname', return in a single string as "lastname, firstName".

const concatName = (firstName, lastName) => {
	try{
		firstName = typeof(firstName) === 'string' && firstName.trim().length > 0 ? firstName.trim().toLowerCase() : false;

		lastName = typeof(lastName) === 'string' && lastName.trim().length > 0 ? lastName.trim().toLowerCase() : false;
		if(!firstName || !lastName){
			throw "Argumentos deben de ser de tipo 'string' y tener una longitud mayor a 0";
		}
		return `${lastName}, ${firstName}`;

	}catch(err){
		return err;
	}
};



// * 5) Given an array and a integer, create function that takes the first element of the array, divided it by the given integer and return the remainder.

const getRemainder = (arr, num) => {
	try{
		arr = Array.isArray(arr) && arr.length > 0 ? arr : false;
		num = typeof(num) === "number" && num > 0 ? num : false;

		if(!arr || !num){
			throw "Primer argumento deben ser de tipo 'array' y tener una longitud mayor a 0. El segundo argumento debe ser de tipo 'number' y mayor a 0"
		}

		const [a, rest] = arr;
		return a % num; 


	}catch(err){
		return err;
	}
};



// * 6) Given an array of integers, determine whether the sum of the elements its even or odd. Return "even" or "odd".

const evenOrOdd = arr => {
	try{
		arr = Array.isArray(arr) && arr.length > 0 ? arr : false;
		if(!arr){
			throw "Argumento debe ser de tipo 'array' y debe tener una longitud mayor a 0";
		}
		const sumOfArray = arr.reduce((total, currentValue) => {
			return total + currentValue;
		});
		return sumOfArray % 2 === 0 ? "even" : "odd";
		
	
	}catch(err){
		return err;
	}
};



// * 7) Create a function that takes a positive integer, and return the sum of all the elements leading up to the power of that given integer.
	// if num = 3         1 ** 3 + 2 ** 3 + 3 ** 3 = 36

const sumCubes = num => {
	try{
		num = typeof(num) === "number" && num > 0 ? num : false;
		if(!num){
			throw "ARgumentos debe ser de tipo 'number' y mayor a 0";
		}
		let result = 0;
		for(let i = 1; i <= num; i++){
			result += i**3;
		}
		return result;

	}catch(err){
		return err;
	}
};


