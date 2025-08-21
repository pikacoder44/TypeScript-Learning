/*

   ------------------------------------- Generic Interfaces -----------------------------------------------


*/

interface Car<T> {
  name: string;
  price: number;
  key: T;
}

function abcd(obj: Car<string>) {
  console.log(obj);
}

abcd({
  name: "Supra",
  price: 10000000,
  key: "supra-2025",
});
