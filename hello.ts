class User {
  constructor(public readonly name: string) {}

  changeName() {
    this.name = "Changed";
  }
}

let u1 = new User("Hashir");
// u1.changeName() // Not Allowed
console.log(u1);
