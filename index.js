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

// B. Strings
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
/*
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
*/
for(let i = 1; i <= 100; i++) {
  if(i % 5 == 0 && i % 3 == 0) {
    console.log(`I found a ${i}. High five, three's a crowd!`);
  } else if(i % 5 == 0) {
    console.log(`I found a ${i}. High five!`);
  } else if(i % 3 == 0) {
    console.log(`I found a ${i}. Three's a crowd`);
  };
};