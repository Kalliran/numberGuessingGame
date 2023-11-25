// Write a function called add7 that takes one number and returns that number + 7.
// const add7 = (num) => {
//     return num + 7 
// }
// console.log(add7(3));
// Write a function called multiply that takes 2 numbers and returns their product.
// const multiply = (n1, n2) => {
//     return n1 * n2
// }
// console.log(multiply(3,4));
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// function capitalize(str){
//     if (str.length === 0) {
//         return "";
//     }
//     const capitalStr = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalStr;
// }
// capitalize('hello world');
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// function lastLetter (str) {
//     const last = str.slice(-1)
//     return last;
// }

// lastLetter("abcd") should return "d"
// Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.

// function fizzBuzz (n) {
//     for (let i=1; i <= n; i++){
//         console.log(i);
//     }
//     if (n % 3 === 0){
//         console.log('Fizz');
//     }else if(n % 5 === 0){
//         console.log('Buzz');
//     }else{
//         console.log('FizzBuzz')
//     }
// }

//the real way:

//Write a program that allows the user to enter a number
//wrapped the prompt in a parseInt() function so that a number is returned from the user's input.
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

//Loop from 1 to the entered number
// for (let i = 1; i <= answer; i++) {
//     console.log(i);
// }

//If the current number is divisible by 3, then print Fizz (re-writing everything to show the order in which I made it - commenting out old code like above so the updated version will run.)

for (let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Buzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}















