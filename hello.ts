// Function

function User(name: string, age: number, cb: () => string) {
  console.log(name, age, cb());
}

let u1 = User("Hashir", 21, () => {
  return "Done"
});

