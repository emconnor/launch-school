/*
Medium 1 Practice Problems
*/

/////// question 1 ///////
/*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days
before computers had video screens.
For this practice problem, write a program that outputs The Flintstones Rock! 10 times,
with each line indented 1 space to the right of the line above it. The output should start out like this:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
*/
// my answer:
// const str = "The Flintsones Rock!";
// let tab = "";
// let count = 0;
// while (count < 10) {
//   console.log(tab + str);
//   tab += "\t";
//   count++;
// }
// their answer:
// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

/////// question 2 ///////
// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
munstersDescription.split('').map(function (char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

/////// question 3 ///////
// Alan wrote the following function, which was intended to return all of the factors of number:
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }
/*
Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to
change the loop. How can he make this work without using a do/while loop? Note that we're not looking
to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising
an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
It determines whether the result of the division is an integer. If the number has no remainder,
the result is an integer, so the number divided by the divisor is a factor.
*/
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(0));
console.log(factors(10));

/////// question 4 ///////
/*
Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements 
from a rolling buffer. However, once the buffer becomes full, any new elements will displace 
the oldest elements in the buffer.
She wrote two implementations of the code for adding elements to the buffer. In presenting the 
code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".
Is there a difference between these implementations, other than the method she used to add an 
element to the buffer?
*/
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
/*
Yes, there's a difference. For example, if we added an array to the buffer, concat
would put each of the elements in the array into the buffer which would affect the 
amount of elements allowed in the buffer and it would change the nature of the elements
being added to the buffer.
If we use push, the entire array gets added as an element to the buffer and counts as 1
in the total length.
*/

/////// question 5 ///////
// What will the following two lines of code output?
// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);
/*
since these are floating point numbers, which lack precision, the answer would would be
slightly less than 0.9 for the first, and the second answer would be false.
reminds me of using a delta in java.
*/

/////// question 6 ///////
// What do you think the following code will output?
let nanArray = [NaN];
//console.log(nanArray[0] === NaN);
// Bonus: How can you reliably test if a value is Nan?

/*
The output is false. NaN is a special numeric value that indicates that an operation that was
intended to return a number failed. JS doesn't let you use == and === to determine whether a value is Nan.
Bonus: to test whether the value is NaN, we use the Number.isNaN() method:
*/
//console.log(Number.isNaN(nanArray[0]));

/////// question 7 ///////
// What is the output of the following code?
let answer = 42;
function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);
//console.log(answer - 8);
// returns 34 because messWithIt returns a new primitive value. answer is unchanged

/////// question 8 ///////
/* One day, Spot was playing with the Munster family's home computer, and he wrote a 
small program to mess with their demographic data:
*/
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
// After writing this function, he typed the following code:
messWithDemographics(munsters);
// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?
console.log(munsters);
/*
yes, the object was changed. this is because objects are mutable and when munsters
was passed into the function, the data pointed to be each key was altered.
In JavaScript, objects are passed by reference. Thus, Spot's demoObject starts off
pointing to the munsters object. His program could replace that with some other object, and
the family's data could be safe. However, in this case, the program doesn't
reassign demoObject; it just uses it, as-is. Thus, the oject that gets changed
by the function is the munster's object.
*/

/////// question 9 ///////
/*
Function and method calls can take expressions as arguments. Suppose we define a function 
named rps as follows, which follows the classic rules of the rock-paper-scissors game, but 
with a slight twist: in the event of a tie, it just returns the choice made by both players.
*/
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
//console.log(rps("rock", "paper"));
// What does the following code output?
//console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//paper


/////// question 10 ///////
// Consider these two simple functions: 
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
bar(foo());
//no

