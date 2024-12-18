// Object Spread Operator
const user = {name: "Marrt", age: 42};
const updateUser = {...user, country: "America"};
console.log(updateUser);

// Array Spread Operator
let fruits = ['mango', 'apple', 'banana', 'grapes', 'orange'];
let newFruits = [...fruits, 'water-melon', 'guava'];
console.log(newFruits);