"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = "Changed";
    }
}
let u1 = new User("Hashir");
u1.changeName(); // Not Allowed
console.log(u1);
//# sourceMappingURL=hello.js.map