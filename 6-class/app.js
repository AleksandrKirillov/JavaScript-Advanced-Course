"use strict";

class Car {
  #mark;
  #model;
  #mileage;

  constructor(mark, model, mileage) {
    this.#mark = mark;
    this.#model = model;
    this.#mileage = mileage;
  }

  set mileage(run) {
    this.#mileage = run;
  }

  get mileage() {
    return this.#mileage;
  }

  info() {
    console.log(
      `Марка ${this.#mark} \nМодель ${this.#model} \nПробег ${this.#mileage}`
    );
  }
}

const audi = new Car("Audi", "Q5", 10000);
console.log(audi);
audi.info();
audi.mileage = 40000;
audi.info();
