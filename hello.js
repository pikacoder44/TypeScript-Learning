"use strict";
// Abstract Classes
/*
  Abstract means unclear ---- Opposite of Concrete

  Eg: We say Payment ( so this is unclear as we dont know which payment method is used here )

  When we say Payment through Easypaisa / JazzCash / Nayapay / Sadapay
              |
              |-> Now we are Clear about it
        
        So Payment is Abstract and EasyPaisa is the implementation
  

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract Class:
class Payment {
    amount;
    account;
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    isPaymentvalid(amount) {
        return this.amount > 0;
    }
}
class EasyPaisa extends Payment {
    constructor(amount, account) {
        super(amount, account);
    }
}
// let p1 = new Payment() // Can't do this 
let ep1 = new EasyPaisa(20000, 1234);
console.log(ep1);
//# sourceMappingURL=hello.js.map