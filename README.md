

# Code Challenge Week 2

#### Date: 2024/03/29

#### By *Sharon Byegon*

## Project setup
The technologies used in this project are Github and Javascript.

To run any of the snippets from the code-challenge-week-2 repository, follow the steps below:

1. Clone the repository: git clone https://github.com/B-Sharon/code-challenge-week-2, on your terminal.

2. Change directory to that of the cloned repository.

3. Open the project with your preferred text editor or IDE.

4. Edit and run the code as required.

*Note that these steps are general and may vary depending on your preference and machine setup.*



# Challenge 1:  Case Swapping
## Description
This is a program that contains a function named ``swapCase`` that takes a string as input and returns a new string with the case of each character swapped.

## Implementation
1. Prompt the user to enter the word or sentence whose characters they would like to swap.

2. Once the input has been received, it checks whether the input is a string using the typeof operator. The match() method is used to check if the string contains any digits. If it does, the program prints an error message and prompts the user again. If not, the loop breaks, and the program continues.

3. The ``swapCase`` function iterates through each character in the input string. For each character, it checks if it's lowercase using ``char.toLowerCase()``. If the character is lowercase, it converts it to uppercase using ``char.toUpperCase()`` method. Otherwise, it converts it to lowercase using ``char.toLowerCase()`` method. 

4. The converted character is then added to a new string which is returned at the end.

Below is an example of the output displayed :

```
    Enter the word or sentence that you want to swap: ThIS is FuN.
    The swapped version of "ThIS is FuN." is: tHis IS fUn.
```




# Challenge 2:  Generate an array of numbers between the given two numbers

## Description
This is a program that contains a function called ``generateNumbers`` that is used to generate an array of numbers between two numbers. 

## Implementation
1. Prompt the user to input two numbers.

2. The function then generates numbrs between the two input numbers.
   
- An empty array is first initialized to hold the generated numbers.

- The function then checks if the first number inputted is greater than the second. If it is greater then the array is generated in ascending order. If not, the array is generated in descending order.


Below is an example of the output displayed :
```
    Enter the first number: -4
    Enter the second number: 7
    The array generated between -4 and 7 is:
     [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

    Enter the first number: 15
    Enter the second number: 5
    The array generated between 15 and 5 is:
     [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
```

# Challenge 3: Finding Prime Numbers in an array

## Description
This is a program that efficiently identifies prime numbers within an array of numbers and returns them in the same order they appear in the original array. 


## Implementation
1. Prompts the user to provide an array whose prime numbers need to be identified.
   
2. The first function ``isPrime()`` is used to check whether the number is a prime or not. A prime number is a nummber that is only divisible by 1 and itself.

- The function first checks if the input number is less than or equal to 1. If it is, the function returns ``false`` because prime  numbers should be greater than 1.

- If the input number is greater than 1, the function then iterates through each number from 2 up to the square root of the input number using a for loop.

- For each iteration, the function checks if the input number is divisble by the current number using the ``% operator``. If it is, the function returns ``false`` because the input number is not a prime number.

- If the input number is noot divisible by any of the numbers in the range , the function returns ``true`` because the input number is a prime number.

- Math.sqrt() method is used to reduce the number of iterations needed to check for divisibility. Therefore, by checking the divisibility of the input number up to its square root, we can determine if it is a prime number.
   
3. The second function ``getPrimeNumbers()`` is used to iterate through each number in the input array and check if it is a prime number using the ``isPrime()`` function. If a number is a prime number, it is added to the empty array ``primeArr``.

4. Finally, the ``primeArr`` array containing only the prime numbers from the input array is returned.



Below is an example of the output displayed :
```
    Enter a list of numbers separated by space:
     1 2 3 4 5 6 7 8 9 10 12 13 14 15 16 27 28 29 30

    The prime numbers in the array are: [2,3,5,7,13,29]
```



## Installation
You use git clone to be able to download the documents in the GitHub

### Installation instruction
```
Git clone https://github.com/B-Sharon/code-challenge-week-2

```

# Live Link
[Git](gh-pages link)

## Technologies used
Github
Javascript

## Support and contact details
github.com/B-Sharon

### License
The content of this site is licensed under the MIT license
Copyright (c) 2024.


