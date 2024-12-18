import { add } from "./objects";

console.log(add(5,5));
// inner functions
function outer() {
    let count = 0;
    return function inner () {
        count++;
        console.log(count);
    }
};

const counter = outer();
counter();   //1
counter();   //2