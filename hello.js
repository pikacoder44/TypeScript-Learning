"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    changeName() {
        this.name = "Changed";
    }
}
// ?: makes the parameter optional 
let u1 = new User("Hashir", 21, "male");
let u2 = new User("king", 44);
// u1.changeName() // Not Allowed
console.log(u1);
console.log(u2);
//# sourceMappingURL=hello.js.map