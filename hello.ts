class User {
  constructor(public name: string, public age:number, public gender?:string) {}

  changeName() {
    this.name = "Changed";
  }
}

// ?: makes the parameter optional 

let u1 = new User("Hashir",21,"male");
let u2 = new User("king",44)
// u1.changeName() // Not Allowed
console.log(u1);
console.log(u2)
