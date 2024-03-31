// Task is to create a function that accepts two numbers to generate an array between them.

//prompting the user to enter two inputs to generate an array between them
const prompt = require("prompt-sync")({ sigint: true });
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

//function to generate an array between two numbers
function generateNumbers(num1, num2) {
    let arr = []; //initialize an empty array to hold the generated numbers

    //check if the first number is greater than the second number
    // if true the array is generated in ascending order
    if (num1 < num2) {
         //using for loop to generate the numbers in the range from num1 to num2
         for (i = num1; i <= num2; i++) {
            arr.push(i); //add each number in the range to the array    
        }
        return arr; 
        
    } 
    //array generated in decending order
    else {
        //using for loop to generate the numbers in the range from num1 to num2
        for (i = num1; i >= num2; i--) {
            arr.push(i); //add each number in the range to the array    
        }
        return arr;         
    }
}
    
//printing the array generated between the two numbers
console.log(`The array generated between ${num1} and ${num2} is [${generateNumbers(num1, num2).join(', ')}]`); 
//using the join method to join the elements of the array with a comma and space