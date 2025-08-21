"use strict";
/*

   ------------------------------------- Type Assertion -----------------------------------------------
   
   Type asserion is used when you know type of value/var more than TS

   How do we defin that:
   */
Object.defineProperty(exports, "__esModule", { value: true });
let a = 12;
a;
a;
// or
let str = a;
let num = a;
/*
------------------------------------- Type Casting -----------------------------------------------

            Basically converting types of vars
*/
let stringed = "12";
let num1 = Number(stringed);
console.log(typeof num1); //  number
let hello = 12;
let helloed = String(hello);
console.log(typeof helloed); //  String
/*
------------------------------------- Non-null asertion operator -----------------------------------------------

            hum variable ke agy ( ! ) wala sign laga dete hen
            Jiske bare me hum 100% sure hote hen ke yeh var
            Null or Undefined to Bilkul nahi hai
*/
let l;
l = "hey";
let char = l.charAt(1);
console.log(char); //   e
//# sourceMappingURL=hello.js.map