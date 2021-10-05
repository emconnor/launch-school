/*
Practice Problems Lesson 4
*/

/////// question 1 ///////
// What is the return value of the filter method call below? Why?

// console.log([1, 2, 3].filter(num => 'hi'));

// filter performs selection based on the truthiness of the callback's 
// return value. in this case, the return value is always 'hi', which is 
// truthy. therefore, filter will return a new array containing all of the 
// elements in the original array. 

/////// question 2 ///////
// What is the return value of map in the following code? Why?
// [1, 2, 3].map(num => {
//   num * num;
// });
// map looks at the return value of the callback function to decide the elements in the
// returned array. each element in the original array is replaced by what the callback
// returns for that element. in this case, there's no explicit return statement in the
// callback function, which means that callback returns undefined each time.

/////// question 3 ///////
// The following code differs slightly from the above code. What is the return value of map in this case? Why?
// [1, 2, 3].map(num => num * num);
// without curly braces surrounding the body of the arrow function, JS uses the computed value as the return value
// in this case, the callback returns 1, 4, 9 on the 3 iterations.

/////// question 4 ///////
/*
What is the return value of the following statement? Why?
*/
// ['ant', 'bear', 'caterpillar'].pop().length;
// 11
// it's 11, because pop returns the last element in the array, which is 
// caterpillar. we then call length on this element, which is a string,
// and it has a length of 11

/////// question 5 ///////
// What is the callback's return value in the following code? Also, what is the return value of every in this code?
// [1, 2, 3].every(num => {
//   return num = num * 2;
// });
// the return values of the callback will be 2,4,6 on the respective iterations. the
// expression num = num * 2 is an assignment expression and will evaluate as teh expression 
// on the right-hand side of the assignment and that is what gets returned
// in each iteration. since all of those numbers are truthy values, every will return true

/////// question 6 ///////
// How does Array.prototype.fill work? Is it destructive? How can we find out?
// let arr = [1, 2, 3, 4, 5]
// arr.fill(1, 1, 5);
// console.log(arr);
// by reading the documentation and trying some code in the console, we can determine that fill
// takes a value and two indices and replaces the indices in bewteen those given indices
// with the given value. it's destructive

/////// question 7 ///////
// What is the return value of map in the following code? Why?
// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });

// [undefined, 'bear']
// there are some interesting things to point out here: first, the return value of map is
// an array, which is the collection type that map always returns. second where did
// we get the undefined value? if we look at the condition if (elem.length > 3), we'll
// notice that it evaluates as true when the length of the element is greater than 3. in this 
// case, the only value with a length greater than 3 is 'bear'. thus, for the first element
// 'ant', the condition evaluates as false and elem isn't returned
// when a function doesn't explicitly return something, it implicitly returns undefined

/////// question 8 ///////
// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
// function flinstonesObject(array) {
//   let result = {};
//   let i = 0;
//   flintstones.forEach(person => {
//     result[person] = i;
//     i++;
//   })
//   return result;
// }
// console.log(flinstonesObject(flintstones));

/////// question 9 ///////
// Add up all of the ages from the Munster family object:
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let sumAge = 0;
// Object.values(ages).forEach(age => {
//   sumAge += age;
// });
// console.log(sumAge);

/////// question 10 ///////
/*
Pick out the minimum age from our current Munster family object:
*/
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let minAge = Number.MAX_SAFE_INTEGER;
// Object.values(ages).forEach(age => {
//   if (age < minAge) {
//     minAge = age;
//   }
// });
// console.log(minAge);

// OR
// let agesArr = Object.values(ages);
// Math.min(...agesArr); // => 10

// we use the ... operation, called the spread operator, to convert the array 
// to a list of arguments

/////// question 11 ///////
/*
Create an object that expresses the frequency with which each letter occurs in this string:
*/

// let result = {};
// let statement = "The Flintstones Rock";

// statement.split('').forEach(char => {
//   if (result.hasOwnProperty(char)) {
//     let num = result[char];
//     result[char] = num + 1;
//   } else {
//     result[char] = 1;
//   }
// });

// console.log(result);

let colors = ['green', 'blue', 'red'];
let result = colors.map(word => word.toUpperCase());
console.log(result);
