//Task is to write a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array.
//ensure that it correctly identifies the prime numbers and returns them in the same order they appear in the input array

//prompting the user to enter an array of numbers
const prompt = require("prompt-sync")({ sigint: true });
let arr = prompt("Enter a list of numbers separated by space: ").split(' '); //split method to convert the input to an array of numbers.


//function to check if a number is prime or not
//a prime number is a number that is only divisible by 1 and itself and the number should be  greater than 1
let isPrime = (num) => {
    if(num <= 1){
        return false; // prime number should be greater than 1
    } 
    else{
      for(let i = 2 ; i <= Math.sqrt(num); i++){  
        //A number can only be divisible by a prime number less than or equal to its square root. 2 is the smallest prime number.
          if(num % i === 0){            
            return false;
            }
        }

       return true;  //the number is a prime number   
     }
}

//getting prime numbers from the array
function getPrimeNumbers(arr){
    //initializing an empty array to hold the prime numbers
    let primeArr = [];

    //using for loop to iterate through each number in the array
    for (let i = 0; i < arr.length; i++) {
        //checking if the current number is prime using our function isPrime
        if(isPrime(arr[i])){
           primeArr.push(arr[i]); //adding the prime number to the prime array
        }
    }
    return primeArr;
}

//call the function to get the prime numbers from the array
console.log(`The prime numbers in the array are: [${getPrimeNumbers(arr)}]`);

