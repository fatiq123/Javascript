let arr = ['apple', 'orage', 'citrus', { name: 'Guava', habitat: 'tropical' }];

// console.log(arr);

// array destruction
let [, , beforeFruits, fruits ] = arr;
console.log(beforeFruits, fruits);


console.log(typeof (arr));






// Array methods
console.log('\n');
console.log('=============== Array Methods==============');

// Foreach
let sweets = ['chocolate', 'candy', 'jaggery', 'lemon'];
sweets.forEach(n => console.log(n));

console.log('\n');
// Filter
const filteredSweets = sweets.filter(s => s.startsWith('c'));
console.log(filteredSweets);

console.log('\n');
// Slice
const slicedArray = sweets.slice(1,3); // include 1 and 2 index only
console.log(slicedArray);


console.log('\n');
// Map
const mapedArray = sweets.map(m => m.toUpperCase()); // include 1 and 2 index only
console.log(mapedArray);

