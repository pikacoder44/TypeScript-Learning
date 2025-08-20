"use strict";
// Function
Object.defineProperty(exports, "__esModule", { value: true });
function User(name, age, cb) {
    console.log(name, age, cb("So Jao"));
}
let u1 = User("Hashir", 21, (msg) => {
    return msg;
});
// Output : Hashir 21 So Jao
//# sourceMappingURL=hello.js.map