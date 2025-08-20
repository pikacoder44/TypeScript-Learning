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
//# sourceMappingURL=hello.js.map