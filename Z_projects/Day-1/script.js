/*
# >>==>> DAY - 1

- JS is a programming language. We use it to give instructions to the computer.

Input ====> Computer ====> Output.

- Console.log is used to log (print) a message to the console.

* e.g console.log("Mehdiali Kadiwala");

-------------------------------------------------------------------------------

- Variables are containers for data.

Variable Naming Rules.

1. Variable names are case sensitive; “a” & “A” is different.
2. Only letters, digits, underscore(_) and $ is allowed. (not even space)
3. Only a letter, underscore(_) or $ should be 1st character.
4. Reserved words cannot be variable names.

-------------------------------------------------------------------------------

- Let, Const and Var

var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.

-------------------------------------------------------------------------------

- Data Types in JS.

Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol.
Non-Primitive Types :  Objects, Arrays and Functions

    fullName = "Priyanshi Rabadiya";
    age = 19;
    price = 99.99;
    radius = 14;
    isFollow = true;
    x = null;
    a = undefined;

*/

console.log("Hello World!");

const product = {
  productName: "Adidas Mens Astoundrun MRunning Shoe",
  brand: "Adidas",
  price: 1499,
  mrp: 3799,
  discountPercent: 61,
  isAvailable: true,
  ratings: 4.5,
  reviews: 165,
  isDeal: false,
};

console.log(product);