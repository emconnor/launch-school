/*
Easy 1 Practice Problems
*/

/////// question 1 ///////
// Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;
/* no error raised; line 8 creates adds 'slots' to numbers
but these are empty. index 6 of numbers now holds the value 5.
*/
// BONUS:
//numbers[4];  // what will this line return?
//console.log(numbers[4]);
/* line 13 will return undefined, but the slot is empty -- it doesn't hold 'undefined'
the distinction is important in the case if we use map(). the new array created in map 
will also have empty slots. new values will not map to the empty slots, only to those
that already have values.
*/
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

/////// question 2 ///////
// How can you determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
/*
we could determine this by checking the last index of the string
better yet, we could use the built-in function endsWith;
*/
// console.log(str1[str1.length - 1] === '!');
// console.log(str2[str2.length - 1] === '!');
str1.endsWith('!');
str2.endsWith('!');

/////// question 3 ///////
// Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//console.log('Spot' in ages);
/*
We could also use the built-in function hasOwnProperty();
*/
ages.hasOwnProperty('Spot');

/////// question 4 ///////
/*
Using the following string, create a new string that contains all lowercase letters
except for the first character, which should be capitalized. (See the example output.)
*/
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
/*
In general, we can do this by capitalizing the first char and then concatenating it with the
rest of the string using substring and toLowerCase()
*/
// console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

/////// question 5 ///////
// What will the following code output?
//console.log(false == '0'); // true
//console.log(false === '0'); // false
/*
This is because the first equality operator coerces false to be 0 and then to '0'
and this is equal to the string '0'
On line 61, this is the strict equality operator and the expression evaluates without
coercion. So, it returns false.
*/

/////// question 6 ///////
// We have most of the Munster family in our ages object:
let agesMunst = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };
/*
We can use the method Object.assign(target, source). This method copies all enumerable
own properties from one or more source objects to a target object. It returns the target object.
*/
let returnedAges = Object.assign(agesMunst, additionalAges);
//console.log(returnedAges);

/////// question 7 ///////
// Determine whether the name Dino appears in the strings below -- check each string separately):
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

str3.includes('Dino');
str4.includes('Dino');
// OR
str3.match('Dino') !== null;
str4.match('Dino') !== null;
// OR
str3.indexOf('Dino') > -1; // false
str4.indexOf('Dino') > -1; // true

/////// question 8 ///////
// How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
//console.log(flintstones);

/////// question 9 ///////
// In the previous problem, our first answer added 'Dino' to the array like this:
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push("Dino", "Happy");
// we can push multiple items

/////// question 10 ///////
/*
Return a new version of this sentence that ends just before the word house. Don't worry 
about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
*/
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let shortAdvice = advice.slice(0, advice.indexOf("house"));
console.log(shortAdvice);