"use strict";

class Person {
  #race;
  #name;

  constructor(race, name, lang) {
    this.#race = race;
    this.#name = name;
    this.lang = lang;
  }

  get name() {
    return this.#name;
  }

  get race() {
    return this.#race;
  }

  say() {
    console.log(`Я ${this.#name}. Говорю на ${this.lang}`);
  }
}

class Orc extends Person {
  constructor(name, lang, weapon) {
    super("Орк", name, lang);
    this.weapon = weapon;
  }

  hit() {
    console.log(
      `${super.race} ${super.name} использовал против вас ${this.weapon} `
    );
  }

  say() {
    console.log("Хтву!!!");
    super.say();
  }
}

class Elf extends Person {
  constructor(name, lang, typeSpell) {
    super("Эльф", name, lang);
    this.typeSpell = typeSpell;
  }

  spell() {
    console.log(
      `${super.race} ${super.name} создает заклинание типа ${this.typeSpell}`
    );
  }

  say() {
    console.log("Позволь представится.");
    super.say();
  }
}

const orc1 = new Orc("Азог", "Ru", "Меч");
orc1.say();
orc1.hit();

const elf1 = new Elf("Феонор", "Ru", "Огонь");
elf1.say();
elf1.spell();
