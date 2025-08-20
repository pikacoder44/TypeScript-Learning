"use strict";
// Rest Parameters
Object.defineProperty(exports, "__esModule", { value: true });
// " ... " -> called rest operator and also called spread operator
function add(...args) {
    //args is array name of arguments
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    console.log(sum);
}
add(1, 2, 3, 4, 5, 6, 7, 7, 3, 23, 23, 2, 3, 12, 21, 2, 4);
// Rest vs Spread Operator
let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
console.log(arr2); // This will give you [1,2,3,4]
// And when we change something in arr 2
arr2.push(5);
console.log("After adding an element to Arr2");
console.log("Array 1: ", arr1); // [1,2,3,4]
console.log("Array 2: ", arr2); // [1,2,3,4,5]
//# sourceMappingURL=hello.js.map