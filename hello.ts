// Static Variables

/*
 Why ?? 


  Eg: We use Math.PI and we get value of PI

     Similarly we use Math.random and we get random value 

     The Question is : We didn't declare any object or instance of Math ( since it's a class )

and let's say we make this class:

                class APP{
                  version = 1.0
                }

                Now to get version of app we can't use this:

                APP.version;  // It will give error

                So what we can do here?
                We can use "static" keyword

like this: 
*/

class APP {
  static version = 1.2;

  static getRandomNumber() {
    return Math.random();
  }
}
console.log(APP.version); // we can do this
console.log("Random number: ", APP.getRandomNumber());
