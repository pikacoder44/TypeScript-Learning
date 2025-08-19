"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BakeryItem {
    name;
    category;
    price;
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.name = name;
        this.category = category;
        this.price = price;
        console.log("Object Made -> ");
        console.log("Name: ", this.name);
        console.log("Price: ", this.price);
        console.log("Category: ", this.category);
    }
    makeBuiscuits() {
        console.log("1 Buiscuit made");
    }
}
let b1 = new BakeryItem("milk", "Dairy", 160);
//# sourceMappingURL=hello.js.map