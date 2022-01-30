'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE does not mutate arr
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -1));
console.log(arr);
console.log([...arr]);

//SPLICE mutates arr
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE mutates arr
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

console.log(arr2);

//CONCAT does not mutate arr
const letters = arr.concat(arr2);
console.log(letters);
//Spread operator does the same thing
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));
