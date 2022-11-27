/*
A. Q + A
1. How do we assign a value to a variable?
  We start with the introductory keyword (let if it CAN change and const if it cannot), a space and the chosen name of the new variable (in camelCase). Then we put a space, an equal sign, another space and the intended value.
2. How do we change the value of a variable?
  Start with the variable's name (camelCase), space, equal sign, space and add the new value.
3. How do we assign an existing variable to a new variable?
  First variable's name, space, equal sign, space, then second variable's name inside of parenthesis. 
4. Remind me, what are declare, assign, and define?
  Declaring the variable assigns it's name and data type. You then assign said variable a value (with assignment operator = ). Defining a variable is this entire process together.
5. What is pseudocoding and why should you do it?
  It is a way to write out your code more understandably first, then gradually transcribe it into actual code. It will help get an overall view before you make it specific and functional. 
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  I am not sure on the specific percentage, but I'm learning that it makes a lot more sense to have a more even split of time for both.
*/

/* B. Strings
//1.

let firstVariable = "Hello World"
firstVariable = 36
secondVariable = (firstVariable)
secondVariable = "Happy Birthday to Me!"
console.log(firstVariable);

// 2.

const yourName = "Sara"
console.log(`Hello, my name is ${yourName}`);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log((a + b) === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log((a * a) === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm

let animal = "cow"
function checkAnimal(animal) {
  if (animal = "cow") {
    console.log("mooooo");
  }else {
    console.log("Hey! You're not a cow.");
    };
  };
checkAnimal();
//COMMIT to JavaScript-Review-Lab gitHub

// E. Driver's Ed

let yourAge = ""
function checkAge(yourAge) {
  if (yourAge >= 16) {
    console.log("Here are the keys!");
  }else {
    console.log("Sorry, you're too young.");
  };
};
checkAge(36);

// II. Loops
// A. The Basics

let i = 0;

for(let i = 0; i <= 10; i++) {
  console.log(i);
};

for(let i = 10; i <= 400; i++) {
  console.log(i);
};

for(let i = 12; i <= 4000; i+=3) {
  console.log(i);
};

for(let i = 1; i <=100; i++) {
  if(i % 2 == 0) {
    console.log(`${i} <--is an even number`);
  } else {
    console.log(i);
  };
};

for(let i = 1; i <= 100; i++) {
  if(i % 5 == 0 && i % 3 == 0) {
    console.log(`I found a ${i}. High five, three's a crowd!`);
  } else if(i % 5 == 0) {
    console.log(`I found a ${i}. High five!`);
  } else if(i % 3 == 0) {
    console.log(`I found a ${i}. Three's a crowd.`);
  };
};

// D. Savings account
// 1. 

function sum(number) {
  let bank_account = 0;
    for(let i = 1; i <= 10 ; i++) {
      bank_account += i;
    };
  console.log(`${bank_account}`);
};
sum();

// 2. 

function sumRaise(number) {
  let bank_account = 0;
    for(let i = 1; i <= 100; i++) {
      bank_account += (i * 2);
    };
  console.log(`${bank_account}`);
}
sumRaise();
*/
// III. Arrays & Control Flow
/*
// A. 
1. What are the things in an array called?
  Elements are inside of arrays (they're ordered collections of data).
2. Do Arrays guarantee those things will be in order?
  As just stated, yes, they are ordered by position, begining at 0.
3. What real-life thing could you model with an array?
  Tons of stuff! Info about a person, prices of things, types of cool plants, ammount of times one laughed at each joke at a comedy show, etc.

// B. Easy Does It

const quotes = ["Not my chair, not my problem", "See that sky today? Talk about blue.", "I don't distinguish between being laughed with, or laughed at. I'll take either."]

// C. Accessing elements

const randomThings = [1, 10, "Hello", true]
// 1. 
randomThings[0];
// 2. & 3. 
randomThings[2] = "World"
console.log(randomThings[2])

// D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. 
ourClass[2];
// 2. 
ourClass[4] = "Octocat";
// 3.
ourClass.push("Cloud City");

// E. Mix It Up
*/
const myArray = [5, 10, 500, 20]
// 1. 
myArray.push("Egon", "Strudel");
// 2. 
myArray.shift(5);
// 3. 
myArray.unshift("Bob Marley");
// 4. 
myArray.pop();
// 5. 
myArray.reverse();
/* this returned a reversed array. This does mutate the array, meaning it overwrites the original array, rather than making a copy of it. 
*/


