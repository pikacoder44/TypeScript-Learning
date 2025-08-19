class User {
  constructor(public name: string) {}

  changeName() {
    this.name = "Changed";
  }
}

let u1 = new User("Hashir")
u1.changeName()
console.log(u1)
