/*

   ------------------------------------- Generics -----------------------------------------------

   
   
   Genaric Functions
   Generic Interfaces
   Generic Classes
   
   
   
   We want to create a function that will acept any value and print it

   function logger(a:any){
    console.log(a)
  }
  
  logger("ok")
  logger(2)
logger(true)

We can't do that, because if you have to make type of a any, then the reason of using typescript is dead and we can't use any function like a.splice etc coz it's type is not defined


*/

/*

So what we can do?
We can tell TS how to treat arguments of function ( types of args ) while using that function


*/
function logger<T>(a: T) {
  // T is template name it can be anything like H, K , L etc
  console.log(a);
}

logger<string>("ok");
logger<number>(22);
logger<boolean>(true);
logger<null>(null);

// and this <string> , <number>   is not necessary, TS can infer based on data

logger(undefined);
logger("Logged String");

// These are also fine ^
