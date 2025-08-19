"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    age;
    gender;
    constructor(_name, age, gender) {
        this._name = _name;
        this.age = age;
        this.gender = gender;
    }
    // Getter and Setter
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
let u1 = new User("Hashir", 21, "male");
let u2 = new User("king", 44);
u1.name = "OK"; // set name
console.log(u1.name); // get name
console.log(u2);
//# sourceMappingURL=hello.js.map