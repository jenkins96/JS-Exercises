/*
Create a function that takes a string and return true if it ends with 'n',
otherwise return false.
*/


function isLastCharacterN(word) {

    const response = word[word.length - 1].toLowerCase() === "n" ? true : false;
    return response;

}



/*
My Solution:
const isLastCharacterN = (word) => {

    const response = word[word.length - 1].toLowerCase() === "n" ? true : false;
    return response;

}

*/