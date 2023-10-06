'use strict';

const persons = [ { id: 1, name: "Вася" },
                  { id: 2, name: "Петя" },
                  { id: 1, name: "Вася" },
                  { id: 2, name: "Петя" },
                  { id: 3, name: "Катя" },
                  { id: 1, name: "Вася" } ];

console.log(persons);

const personsUniq =  Array.from(
                        new Set(persons.map(el => el.id)), 
                        el => persons.find(value => value.id === el) );
                        
console.log(personsUniq);
 
 