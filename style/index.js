//Task 1
let price  =prompt("Enter the price")
console.log(price);
// $49.99
// 012345 
let priceWithoutDollar = price.slice(1);
console.log(priceWithoutDollar);

//Task 2 Convert the input from string to number 
//Task 2 means: turn text that looks like a number into a number JavaScript can calculate with.
let numberPrice = parseFloat(priceWithoutDollar);
//typeof asks Javascript: "What kind of value is this?"
console.log(typeof priceWithoutDollar);
console.log(typeof numberPrice);

//Task 3  Multiply by 0.1
let discountedAmount = numberPrice*0.1;
let finalPrice = numberPrice - discountedAmount;
console.log(numberPrice-discountedAmount);

//Task 4 Print out the new price in a template literal using console.log(), for example: 'Your new price is: $44.99'
//Task 4 a template literal lets you put a variable’s value inside a message. 
console.log(`Your new price is: $${finalPrice}`);















//2.3 More Methods (there are methods that are a little bit more complex and therefore require one or more arguments.)
/*Arguments help modify the method, and we add the argument inside the parentheses after the method.*/


//2.2 String Method (Both trim and two uppercase are simple methods that do not require any arguments)
/*let msg = "Hello world";
console.log(msg.toUpperCase());
console.log(msg);
msg = msg.toUpperCase();
console.log(msg);

let yell = msg.toUpperCase();
console.log(yell);

let word = "   dfafds   ";
console.log(word);
console.log(word.trim());

let words = "  fjsdahfsd   fgdfgd   ";
console.log(words);
console.log(words.trim());*/


//2.1 Variable keywords

//let
//const
//var

/*There are some differences btwn these variable & use them for diff. reasons*/

// Declare a variable named x with the value 10
//let x = 10;
// Reassign x without declaring it again
//x = 5;
// Use descriptive variable names to explain what they store.
//let number = 10;


// Reassign the value without declaring the variable again.
//number = 5;
// Declare a constant named rating with the value 5.
// A constant cannot be reassigned.
//const rating = 5;
// Display the rating in the console.
//console.log(rating);


// Declare a constant named rating with the value 5.
//const rating = 5;
// Constants cannot be reassigned.
// rating = 10; // Causes an error if uncommented.
//console.log(rating); // Displays 5.

// If we remove the declaration above, rating is no longer defined
// (unless declared elsewhere). Using it would cause a ReferenceError.
// A constant prevents reassignment; it does not store a value forever.

// Use const when the value should not change.
//const week = 7;

//string.method();

