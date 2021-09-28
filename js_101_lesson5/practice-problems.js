/*
Practice Problems
*/

/////// question 1 ///////
// How would you order the following array of number strings by descending numeric value 
// (largest number value to smallest)?
// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr);

/////// question 2 ///////
// How would you order the following array of objects based on the year of publication 
// of each book, from the earliest to the latest?
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((a, b) => Number(a['published'] - Number(b['published'])));
// console.log(books);


/////// question 3 ///////
// For each of these collection objects, demonstrate how you would access the letter g.
//let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
//console.log(arr1[2][1][3]);

//let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
//console.log(arr2[1]['third'][0]);

//let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
//console.log(arr3[2]['third'][0][0]);

//let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
//console.log(obj1['b'][1]);

//let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } }
//console.log(Object.keys(obj2['third'])[0]);

/////// question 4 ///////
/*
For each of these collection objects, demonstrate how you would change the value 3 to 4.
*/
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);
// let obj1 = { first: [1, 2, [3]] };
// obj1['first'][2][0] = 4;
// console.log(obj1);
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2['a']['a'][2] = 4;
// console.log(obj2);

/////// question 5 ///////
// Compute and display the total age of the male members of the family.
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female' }
// };
// let totalMaleAge = 0;
// let memberDetails = Object.values(munsters);

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });
// console.log(totalMaleAge);

/////// question 6 ///////
// One of the most frequently used real-world string operations is that of "string substitution," 
// where we take a hard-coded string and modify it with various parameters from our program.
// Given this previously seen family object, print the name, age, and gender of each family member:
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female' }
// };
// let memberDetails = Object.entries(munsters);
// memberDetails.forEach(entry => {
//   console.log(`${entry[0]} is a ${entry[1]['age']}-year-old ${entry[1]['gender']}`);
// });

/////// question 7 ///////
// Given the following code, what will the final values of a and b be? Try to answer without running the code.
// let a = 2;
// let b = [5, 8];
// let arr = [a, b];

// arr[0] += 2;
// arr[1][0] -= a;
// [4, [3, 8]]
// a is changed within the array, but the value of a is not changed, 
// so arr[1][0] = 3
// console.log(arr);

/////// question 8 ///////
// Using the forEach method, write some code to output all vowels from the strings in the arrays. 
// Don't use a for or while loop.
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(char => {
//       if ('aeiou'.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

/////// question 9 ///////
// Given the following data structure, return a new array with the same structure, 
// but with the values in each subarray ordered -- alphabetically or numerically as 
// appropriate -- in ascending order.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let newArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });

// // [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
// console.log(newArr);

/////// question 10 ///////
/*
Perform the same transformation of sorting the subarrays we did in the
previous exercise with one difference; sort the elements in descending order.
*/

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let newArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort((a, b) => b - a);
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => b - a);
//   }
// });

// // [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
// console.log(newArr);


/////// question 11 ///////
// Given the following data structure, use the map method to return a new 
// array identical in structure to the original but, with each number 
// incremented by 1. Do not modify the original data structure.
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(object => {
//   let incrementedObj = {};
//   for (let key in object) {
//     incrementedObj[key] = object[key] + 1;
//   }
//   return incrementedObj;
// });
// console.log(arr);
// console.log(newArr);

// here we use map to iterate over the array. on each iteration, the callback creates a new object, 
// incrementObj, and then iterates through the key-value pairs of the current object from the original 
// array. it uses the keys and the current object to create a new key-value pair in 
// incrementObj, and map uses it to transform each element in the array.

/////// question 12 ///////
// Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, but containing only 
// the numbers that are multiples of 3.
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let newArr = arr.map(subArr => {
//   return subArr.filter(num => num % 3 === 0)
// });
// console.log(newArr);

// we know that we want to return an array with the same structure, so map is an excellent choice to
// call on the original array. for each subarray, we then return a subset of the subarray that contains
// only multiples of the number 3.

/////// question 13 ///////
// Given the following data structure, sort the array so that the sub-arrays are ordered based on 
// the sum of the odd numbers that they contain.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// // for each subarray, we need to sum all the odd numbers 
// // then sort by a[oddSum] - b[oddSum]
// arr.sort((a, b) => {
//   let oddSumA = a.filter(num => num % 2 !== 0).reduce((sum, next) => sum + next);
//   let oddSumB = b.filter(num => num % 2 !== 0).reduce((sum, next) => sum + next);
//   return oddSumA - oddSumB;
// });
// console.log(arr);

//we use array.protogype.filer to filter each subarray down to its odd components
//we then use reudce function to calculate the sum of the odd values in each array
//the last line returns a positive, negative or 0 value so sort can order the arrays 
//appropriately


/////// question 14 ///////
// Given the following data structure write some code to return an array containing 
// the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, 
// and the colors should be capitalized.
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });
// from the problem description, we know that we want to return an array where each value
// corresponds to one of the nested objects in the outer object, so map called on an array of 
// the object's values is a good initial choice.
// since the value to be returned to map by the outer callback depends on whether type
// equates to 'fruit' or 'vegetable', we need to use a conditional statement to perform
// the actions appropriate to each object
// the situation for colors is slightly complicated because we want to pass them to our
// capitalize function, but they are nested within arrays. thus we need to iterate
// through those arrays to access them. fortunately, it's a straightforward call to map

/////// question 15 ///////
// Given the following data structure, write some code to return an array which contains 
// only the objects where all the numbers are even.
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let newArr = arr.filter(obj => {
//   return Object.values(obj).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });
// console.log(newArr);


/////// question 16 ///////
// Given the following data structure, write some code that returns an object 
// where the key is the first item in each subarray, and the value is the second.
// let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// // expected return value of function call
// // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let obj = {};
// arr.forEach(subArr => {
//   obj[subArr[0]] = subArr[1];
// })
// console.log(obj);

/////// question 17 ///////
// A UUID is a type of identifier often used to uniquely identify items, even when some of 
// those items were created on a different server or by a different application. That is, 
// without any synchronization, two or more computer systems can create new items and label 
// them with a UUID with no significant risk of stepping on each other's toes. It accomplishes 
// this feat through massive randomization. The number of possible UUID values is approximately 
// 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such 
// a large number of possible values.
// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented 
// as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
// Write a function that takes no arguments and returns a string that contains a UUID.

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = '';

  //for each section
  for (let num in sections) {
    let count = sections[num];
    console.log(count);
    while (count > 0) {
      let randIdx = Math.floor(Math.random() * characters.length);
      uuid += characters[randIdx];
      count--;
    }
    if (num < sections.length - 1) {
      uuid += '-'
    }
  }
  return uuid;
}

console.log(generateUUID());