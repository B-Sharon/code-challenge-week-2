//Task is to write a function that accepts a string as input and swaps the case of each character. For example, if you input 'Hello', the function should return 'hELLO'.

//prompting user for input and ensuring the input is a string
const prompt = require("prompt-sync")({ sigint: true });
let word;

//check if input is a string
while(true){
    word = prompt("Enter the word or sentence that you want to swap: ");
    if(typeof word === "string" && !word.match(/\d/)) // match method is used to check if the string contains any digits. In this case the not operator will make the condition to be false.
    {
        break;
    }
    else{
        console.log("Invalid input. Please enter a string.");
    }
}



//function to swap the case of each character

function swapCase(word) {
    let newString = ""; // Initialize the newString variable to an empty string to store the swapped characters.

    //using for of loop to iterate through each character of the word
    for (let char of word) {

      //using the ternary operator to check if the current character is lowercase.    
      // if the character is lowercase, it will be converted to uppercase and appended to the newString variable. 
      // if it is not lowercase, it will be converted to lowercase and appended to the newString variable.
      
      newString += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();

    }
    return newString;
  }


let swappedString = swapCase(word);

//printing the swapped string
console.log(`The swapped version of "${word}" is: ${swappedString}`);
