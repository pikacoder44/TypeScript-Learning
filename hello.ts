interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function abcd(obj: User) {}

abcd({
  name: "Hashir",
  email: "hashir@gmail.com",
  password: "12",
});

// ______________________________________

// Type Vs interface

type d = number;
// type d = string; Error

interface k {
  name: string;
}
interface k {
  age: number;
}

function Abcde(data: k) {
  data.age = 20;
  data.name = "Hashir";
}
