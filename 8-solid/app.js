"use strict";

class Billing {
  #amount = 10;

  calculateTotal() {
    return this.#amount;
  }
}

class fixBilling extends Billing {}

class hourBilling extends Billing {
  #hour;

  constructor(hour) {
    super();
    this.#hour = hour;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#hour;
  }
}

class itemBilling extends Billing {
  #items;

  constructor(items) {
    super();
    this.#items = items;
  }

  calculateTotal() {
    return super.calculateTotal() * this.#items.length;
  }
}

class Bill {
  calculateBill(bill) {
    return bill.calculateTotal();
  }
}

const fixBill = new fixBilling;
const hourBill = new hourBilling(5);
const itemBill = new itemBilling(['Burberry', 'Arduino', 'Remote controller']);
const bill1 = new Bill;
console.log('Фикс', bill1.calculateBill(fixBill));
console.log('Часовая', bill1.calculateBill(hourBill));
console.log('По количеству', bill1.calculateBill(itemBill));