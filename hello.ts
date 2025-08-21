/*

   ------------------------------------- Type Assertion -----------------------------------------------
   
   Type asserion is used when you know type of value/var more than TS

   How do we defin that:
   */

let a: any = 12;

a as string;
a as number;

// or

let str = <string>a;
let num = <number>a;

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

let l: null | undefined | string;
l = "hey";

let char = l!.charAt(1);

console.log(char); //   e

