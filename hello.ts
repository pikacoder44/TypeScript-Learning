class User {
  constructor(
    public _name: string,
    public age: number,
    public gender?: string
  ) {}

  // Getter and Setter
  get name() {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
  }
}

let u1 = new User("Hashir", 21, "male");
let u2 = new User("king", 44);

u1.name = "OK"; // set name

console.log(u1.name); // get name
console.log(u2);
