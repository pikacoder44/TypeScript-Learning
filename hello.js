"use strict";
// Function
Object.defineProperty(exports, "__esModule", { value: true });
function User(name, age, cb) {
    console.log(name, age, cb());
}
let u1 = User("Hashir", 21, () => {
    return "Done";
});
//# sourceMappingURL=hello.js.map