/* Use case: When you want to create an object that inherits from another object without needing to use a constructor function or class.
--> In this example, dog inherits from animal, and we can override properties like sound.
 */
const animal = {
    sound: "Generic sound",
    speak: function () {
        console.log(this.sound);
    }
};
const dog = Object.create(animal);
dog.sound = 'bark';
dog.speak(); // Output: bark
console.log(dog.sound);

// Add new properties to Object
animal.origin = 'desert';   // add by dot notation
animal['age'] = 10; // add by brackets notation

console.log(animal);





/**
 * Object.assign() copies values from one or more source objects to a target object. It performs a shallow copy, meaning if the source object contains nested objects, only references to those nested objects are copied, not the actual objects.

    Use case: Merging objects or cloning objects.
 */

const person = {
    name: 'John', age: 21
};
const job = { position: 'Developer', company: 'XYZ' };

const employee = Object.assign({}, person, job);
console.log(employee);



/**
 * Object.freeze() makes an object immutable, meaning its properties cannot be changed or added, and it cannot be extended.

Use case: Preventing modification of an object (e.g., constants or configuration objects).
 */

Object.freeze(person);
person.age = 19;  // cannot change as it is frozen i.e immutable
console.log(person.age);


/**
 * Object.keys() returns an array of a given object's property names (keys).

Use case: When you want to iterate over the properties of an object.
 */
let keys = Object.keys(person);
console.log(keys);


// You can use Object.keys() to iterate over the object’s keys using array iteration methods like forEach() or map().



/**
 * Object.values() returns an array of the given object's own property values.

Use case: When you need to access the values of an object.
 */
let values = Object.values(person);
console.log(values);




/**
 * Object.entries() returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

Use case: When you need both the key and value during iteration.
 */
let entries = Object.entries(person);
console.log(entries);
