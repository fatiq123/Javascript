let arr = ['apple', 'orage', 'citrus', { name: 'Guava', habitat: 'tropical' }];

// console.log(arr);

// array destruction
let [, , beforeFruits, fruits ] = arr;
console.log(beforeFruits, fruits);


console.log(typeof (arr));
