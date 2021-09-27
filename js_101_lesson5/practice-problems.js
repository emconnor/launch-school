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
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
console.log(newArr);

/////// question 10 ///////
/*
Return a new version of this sentence that ends just before the word house. Don't worry
about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
*/

/////// question 11 ///////
//

/////// question 12 ///////
//

/////// question 13 ///////
//

/////// question 14 ///////
//

/////// question 15 ///////
//

/////// question 16 ///////
//

/////// question 17 ///////
//