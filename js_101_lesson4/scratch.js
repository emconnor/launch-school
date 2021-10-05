// let obj = { a: 'foo', b: 'bar', c: undefined };
// console.log(obj.hasOwnProperty('c')); // => true
// console.log(obj.hasOwnProperty('d')); // => false

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join('')); // => 'a,b,c,d,e,f'

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// numbers[1] = numbers[1] + 1;
// numbers[2] = numbers[2] + 1;
// numbers[3] = numbers[3] + 1;
// numbers[4] = numbers[4] + 1;
// console.log(numbers);    // [ 2, 3, 4, 5, NaN ]

// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
// obj['apple'] = 'Fruit';
// obj.carrot = 'Vegetable';
// obj.pear = 'Fruit';
// obj['broccoli'] = 'Vegetable';
// console.log(obj);

// while (true) {
//   let number = Math.floor(10 * Math.random());
//   console.log(number);

//   if (number === 5) {
//     console.log('Exiting...');
//     break;
//   }
// }

// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;

//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }

//     startingIndex += 1;
//   }

//   return result;
// }

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// function palindromeSubstrings(str) {
//   let result = [];
//   let substringsArr = substrings(str);

//   substringsArr.forEach(substring => {
//     if (isPalindrome(substring)) {
//       result.push(substring);
//     }
//   });

//   return result;
// }

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// console.log(substrings("abcddcbA"));
// console.log(palindromeSubstrings("palindrome"));
// console.log(palindromeSubstrings(""));

// function selectFruit(obj) {

//   let fruitObject = {};
//   Object.entries(obj).forEach(([key, value]) => {
//     if (value === 'Fruit') {
//       fruitObject[key] = value;
//     }
//   });
//   return fruitObject;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce));
// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

// function doubleNumbers(numbers) {
//   let counter = 0;
//   while (counter < numbers.length) {
//     numbers[counter] *= 2;
//     counter += 1;
//   }
// }

// function doubleOddIndices(numbers) {
//   let doubledNums = [];
//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];
//     if (counter % 2 === 1) {
//       doubledNums.push(currentNumber * 2);
//     } else {
//       doubledNums.push(currentNumber);
//     }
//   }
//   return doubledNums;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// let newNums = doubleOddIndices(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// console.log(newNums);

// function multiplyBy(array, num) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] * num);
//   }
//   return result;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// let newNums = multiplyBy(myNumbers, 3);
// console.log(newNums);