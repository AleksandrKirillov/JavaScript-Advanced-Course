"use strict";

const Person = function (race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
};

Person.prototype.say = function () {
  console.log(`Я ${this.name}. ${this.lang}`);
};

const Orc = function (name, lang, weapon) {
  Person.call(this, 'Орк', name, lang);
  this.weapon = weapon;
};

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {
  console.log(`${this.race} ${this.name} использовал против вас ${this.weapon} `);
};

const Elf = function ( name, lang, typeSpell) {
  Person.call(this, 'Эльф', name, lang);
  this.typeSpell = typeSpell;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.spell = function() {
  console.log(`${this.race} ${this.name} создает заклинание типа ${this.typeSpell}`)
};

const orc1 = new Orc('Азог', 'Ru', 'Меч');
orc1.hit();
orc1.say();

const elf1 = new Elf('Феонор', 'Ru', 'Огонь');
elf1.spell();
elf1.say();
