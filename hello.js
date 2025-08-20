"use strict";
/*

   ------------------------------------- Function Overloading -----------------------------------------------

    Typescript says to create a signature before using function overloading
    
    
    How?


*/
Object.defineProperty(exports, "__esModule", { value: true });
function abcd(a, b) {
    // Now we check
    if (typeof a === "string" && typeof b === "undefined") {
        console.log("First Signature");
    }
    else if (typeof a === "string" && typeof b === "number") {
        console.log("Second Signature");
        return 123;
    }
    else {
        throw new Error("Error: Something went wrong");
    }
}
abcd("hey");
abcd("hashir", 21);
//# sourceMappingURL=hello.js.map