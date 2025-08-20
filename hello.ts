/*

   ------------------------------------- Function Overloading -----------------------------------------------

    Typescript says to create a signature before using function overloading
    
    
    How?


*/

function abcd(a: string): void;
function abcd(a: string, b: number): number;

function abcd(a: any, b?: any): void | number {
  // Now we check
  if (typeof a === "string" && typeof b === "undefined") {
    console.log("First Signature");
  } else if (typeof a === "string" && typeof b === "number") {
    console.log("Second Signature");
    return 123;
  } else {
    throw new Error("Error: Something went wrong");
  }
}

abcd("hey");

abcd("hashir", 21);
