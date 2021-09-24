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

function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
console.log(substrings("abcddcbA"));
// console.log(palindromeSubstrings("palindrome"));
// console.log(palindromeSubstrings(""));


