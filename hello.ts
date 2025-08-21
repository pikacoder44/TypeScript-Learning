/*

   ------------------------------------- Generic Classes -----------------------------------------------


*/

class BottleMaker<T> {
  constructor(key: T) {
    console.log("Key: ", key);
    console.log("Type of key: ", typeof key);
  }
}

let b1 = new BottleMaker<string>("ok");
let b2 = new BottleMaker<number>(2);
