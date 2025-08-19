class BakeryItem {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {
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
