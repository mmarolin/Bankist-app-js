'use strict';
/*
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


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//at method works on strings too
console.log('matija'.at(0));
console.log('matija'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}€.`);
  } else {
    console.log(`Movement ${i + 1}. You withdrew ${Math.abs(mov)}€.`);
  }
}

console.log('----------FOR EACH --------------');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}. You deposited ${mov}€.`);
  } else {
    console.log(`Movement ${i + 1}. You withdrew ${Math.abs(mov)}€.`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'GBP', 'EUR', 'EUR']);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

//FILTER

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);
