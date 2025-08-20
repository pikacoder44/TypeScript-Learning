// Function

function User(name: string, age: number, cb: (msg: string) => string) {
  console.log(name, age, cb("So Jao"));
}

let u1 = User("Hashir", 21, (msg: string) => {
  return msg;
});

// Output : Hashir 21 So Jao
