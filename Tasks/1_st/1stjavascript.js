// Number programs ->generate random number
// multiply by * for range in which you want to create rendom 

// let x = Math.random() * 100 ;
// x = Number.parseInt(x);
// console.log(x);


// prime number

// let n = 55;
// let flag = 0; 
// for (i = 2 ; i < n ; i++ ){
//     if(n % i == 0){
//         flag = 1;
//         break;
//     }

// }
// if(flag == 1){
//     console.log("not prime");
// }
// else{
//     console.log("prime");
// }

// 3. program to find largest of three number

// let a = 40;
// let b = 40;
// let c = 40;


// (a > b && a > c) ? console.log('A is greater') :
//     (b > a && b > c) ? console.log('B is greater') :
//         (c > a && c > b) ? console.log('c is greater') :
//             console.log('some numbers are equal');


// let x = Math.max(92,45,56);
// console.log(x);



//4. JavaScript Program to Print All Prime Numbers in an Interval
// let a, b, i, j, flag; 

// a = 2 
// b = 11 
// for (i = a; i <= b; i++) { 
// 	flag = 1; 

// 	for (j = 2; j <= i / 2; ++j) { 
// 		if (i % j == 0) { 
// 			flag = 0; 
// 			break; 
// 		} 
// 	} 

// 	// flag = 1 means i is prime 
// 	// and flag = 0 means i is not prime 
// 	if (flag == 1) 
// 		console.log(i); 
// }


// 5.-------------------------------------------------------------------------------------------------- Aayush code from kk

// A to z
// let a = 'a';

// for(let i = a ; i < 'z' ; i = String.fromCharCode(i.charCodeAt(0)+1))
// {
//     console.log(i);
// }


// print sum of odd

// let n = 10;
// let to = 0;
// for (let i = 0 ; i < n ; i += 2){
//     console.log(i);
//      to = to + i;
// }
// console.log(to);


// multoplie table

// let n = prompt("enter prompt:");
// let table = 0;
// for(let i = 1 ; i < 10 ; i++)
// {
//     table = n * i;
//     console.log(table);
// }


// count number of digits

// var num = 123554685631146  , count = 0;

// while(num != 0){
//     num = Number.parseInt(num / 10)
//     ++count;
// }
// console.log(count);


// Find first and last digit in number
// let num = 5370;
// let Fst, Lst;

// Fst = num;
// while (Fst >= 10) {
//     Fst = Math.floor(Fst / 10);
// }
// console.log(Fst);

// Lst = num;
// Lst = Lst % 10;
// console.log(Lst);


// Swap first and last digit in number

// let num = 45231;
// let fst , lst ;

// fst = num;
// while(fst >= 10){
//     fst = Math.floor(fst / 10);
// }

// console.log(fst);

// lst = num ;
// lst = Number.parseInt(lst % 10);
// console.log(lst);

// let c = fst ;
// fst = lst;
// lst = c;

// console.log(fst);
// console.log(lst);



// calculate sum of digits of number

// let num = 123;
// let total = 0;
// let orignal;

// while(num > 0)
// {
//     total += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(total);


// product of digit of number


// product of digits

// let a = 1234;
// let num = 1;
// while (a != 0) {
//     num *= a % 10;
//     a = Number.parseInt(a / 10);
// }
// console.log(num);

// revese a number

// let num = 123;
// let rev = 0, remi , sto;
// while(num > 0){
//     remi = num % 10;
//     rev = rev * 10 + remi;
//     num = Number.parseInt(num / 10);
// }

// console.log(rev);


// Palin derom number

// let num = 11;
// let origin = num;
// let rev = 0, remi , sto;
// let flag = 1;
// while(num > 0){
//     remi = num % 10;
//     rev = rev * 10 + remi;
//     num = Number.parseInt(num / 10);
// }
// console.log(rev);
// if(rev == origin)
// {
//     console.log('number is Palindrome number');
// }
// else {
//     console.log('Number is not palindrome');
// }

// function digitFrequency(num) {
//     let frequency = {}; // Object to store digit frequencies

//     // Convert number to string to easily iterate through its digits
//     let numStr = num.toString();

//     // Iterate through each digit in the string
//     for (let digit of numStr) {
//         // Increment the count of the current digit in the frequency object
//         frequency[digit] = (frequency[digit] || 0) + 1;
//     }

//     return frequency;
// }

// // Example usage:
// let number = 1223044;
// let result = digitFrequency(number);

// // Display the frequency of each digit
// for (let digit in result) {
//     console.log(`Frequency of ${digit}: ${result[digit]}`);
// }





// print it's number
// // Function to convert a single digit into word
// function convertSingleDigit(digit) {
//     const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     return words[digit];
// }

// // Function to convert a two-digit number into words
// function convertTwoDigits(num) {
//     const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const onesWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//     if (num >= 10 && num <= 19) {
//         const teenWords = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//         return teenWords[num - 10];
//     } else {
//         const tens = Math.floor(num / 10);
//         const ones = num % 10;
//         return tensWords[tens] + " " + onesWords[ones];
//     }
// }

// // Function to convert a number into words
// function convertNumberToWords(num) {
//     if (num === 0) {
//         return "Zero";
//     }

//     let words = "";


//     // Handle thousands
//     if (num >= 1000) {
//         words += convertNumberToWords(Math.floor(num / 1000)) + " Thousand ";
//         num %= 1000;
//     }

//     // Handle hundreds
//     if (num >= 100) {
//         words += convertSingleDigit(Math.floor(num / 100)) + " Hundred ";
//         num %= 100;
//     }

//     // Handle tens and ones
//     if (num > 0) {
//         if (num >= 10) {
//             words += convertTwoDigits(num);
//         } else {
//             words += convertSingleDigit(num);
//         }
//     }

//     return words.trim();
// }

// // Main function
// function main() {
//     let number;

//     // Input the number
//     number = parseInt(prompt("Enter a number: "));

//     // Convert and print the number in words
//     console.log("In words: " + convertNumberToWords(number));
// }

// main();





// function convertSingleDigit(digit) {
//     const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     return words[digit];
// }

// function convertTwoDigits(num) {
//     const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
//     const onesWords = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

//     if (num >= 10 && num <= 19) {
//         const teenWords = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
//         return teenWords[num - 10];
//     }
//     else {
//         const tens = Math.floor(num / 10);
//         const ones = num % 10;
//         return tensWords[tens] + " " + onesWords[ones];
//     }
// }

// function convertNumberToWords(num) {
//     if (num === 0) {
//         return "Zero";
//     }

//     let words = "";

//     // Handle thousands
//     if (num >= 1000) {
//         words += convertNumberToWords(Math.floor(num / 1000)) + " Thousand ";
//         num %= 1000;
//     }

//     // Handle hundreds
//     if (num >= 100) {
//         words += convertSingleDigit(Math.floor(num / 100)) + " Hundred ";
//         num %= 100;
//     }

//     // Handle tens and ones
//     if (num > 0) {
//         if (num >= 10) {
//             words += convertTwoDigits(num);
//         } else {
//             words += convertSingleDigit(num);
//         }
//     }

//     return words.trim();
// }
// function main() {
//     let number;
//     number = parseInt(prompt("Enter a number: "));
//     console.log("In words: " + convertNumberToWords(number));
// }

// main();

// --------------------------------------------------------------------------------------------------complete AAyush code

// let num = 123;
// let num2 = 458;
// let lst, lst2;
// num = num % 10;
// num2 = num2 % 10;
// console.log(num);
// console.log(num2);

// if(num == num2)
// {
//     console.log('Last Numners are same');
// }
// else
// {
//     console.log('Last numbers are not same');
// }

// Split a number into indivisual digit

// let num = 4563;
// // num = toString(num);

// let store = num.toString().split("");
// console.log(store);


// let num = "1235";
// let arr = [];

// console.log(arr);

// while(num > 0){
//         arr.unshift(num % 10);
//         num = Number.parseInt(num / 10);
// }

// console.log(arr);



// ---------------------------------------------------------javscript math programs

// 5. Factorial number

let num = 5;
let store;
for(let i = 0 ; i < num ; i++)
{
        num *= (num - 1);
}
console.log(num);   




