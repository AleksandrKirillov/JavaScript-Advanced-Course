"use strict";

class Billing {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  calculateTotal() {
    return this.#amount;
  }
}

class fixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
}

class hourBilling extends Billing {
  #hour;

  constructor(amount, hour) {
    super(amount);
    this.#hour = hour;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#hour;
  }
}

class itemBilling extends Billing {
  #countItems;

  constructor(amount, items) {
    super(amount);
    this.#countItems = items.length;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#countItems;
  }
}

class Bill {
  calculateBill(bill) {
    return bill.calculateTotal();
  }
}

const amount = 10;
const fixBill = new fixBilling(amount);
const hourBill = new hourBilling(amount, 5);
const itemBill = new itemBilling(amount, ['Burberry', 'Arduino', 'Remote controller']);
const bill1 = new Bill;
console.log('Фикс', bill1.calculateBill(fixBill));
console.log('Часовая', bill1.calculateBill(hourBill));
console.log('По количеству', bill1.calculateBill(itemBill));