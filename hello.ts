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
