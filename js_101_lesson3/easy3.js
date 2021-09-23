/*
Easy 3 Practice Problems
*/

/////// question 1 ///////
// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];
// numbers.splice(0, numbers.length);
// numbers = [];
// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

/////// question 2 ///////
// What will the following code output?
// console.log([1, 2, 3] + [4, 5]);
// [1,2,34,5]
// This is because there is an implicit coercion to string from array

/////// question 3 ///////
// What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
// console.log(str1);
/* 
"hello there" - the output is "hello there" since we are dealing with strings.
In JS, strings are primitive values and are immutable. That also means taht JS creates
a new copy of the string when assigning a string to a variable. Thus, line 2
assigns str2 a new string that happens to be a copy of str1's value. Line 3, in turn,
assigns str2 to an entirely new string
*/

/////// question 4 ///////
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// [{ first: "42" }, { second: "value2" }, 3, 4, 5]
/*
A deep copy makes a duplicate of every item in an existing array or object. In particular,
it creates completely new instances of any subarrays or subobjects in the source object.
If we performed a deep copy on arr1, we would have two different arrays as well as four separate
objects.
A shallow copy only makes a duplicate of the outermost values in an array or object.
If we perform a shallow copy on arr1, we end up with two different arrays, but still only
have one occurrence each of {first: 42} and {second: 'value2}. In this case, both arr1[0]
and arr2[0] point to the same object in memory. Likewise, arr1[1] and arr2[1] point to the
{second: 'value2'} object.
The slice() method performs shallow copies.
*/

/////// question 5 ///////
/*
The following function unnecessarily uses two return statements to return boolean values.
Can you rewrite this function so it only has one return statement and does not explicitly
use either true or false?
*/
// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// const isColorValid = color => color === "blue" || color === "green";

