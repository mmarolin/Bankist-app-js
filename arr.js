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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

//MAX value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
*/

//CHAINING METHODS
/*
const eurToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const totalDepositsUSD = Math.trunc(
  movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0)
);

console.log(totalDepositsUSD);


//FIND METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);




//FLAT METHOD
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, [2]], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance);

//FLATMAP METHOD
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overallBalance2);

//SORTING ARRAYS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//Strings
const owners = ['Matija', 'Marko', 'Adam', 'Marta'];
console.log(owners.sort());

//Numbers
//Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
console.log(movements);

//GENERATING ARRAYS

const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const diceRoll = Array.from({ length: 100 }, (_, i) =>
  Math.trunc(Math.random(i) * 6 + 1)
);

console.log(diceRoll);

labelBalance.addEventListener('click', function (e) {
  e.preventDefault();
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});


// CHallenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.

let recommendedFood = dogs.forEach(
  dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recFood ? 'too much' : 'too little'
  } food.`
);
//3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

//4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`);

//5.

console.log(dogs.some(dog => dog.curFood === dog.recFood));

*/
