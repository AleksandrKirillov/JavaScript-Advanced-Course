'use strict';

function randomDice(dice) {
    const match = dice.match(/^d\d+$/);
    if (!match) {
        return "Введите значение в формет d*, где * - любое число."
             + `\nВаш ввод: ${dice}`;
    }

    const max = Number.parseInt(dice.match(/\d+/));

    return Math.floor(( Math.random() * max + 1));
}

console.log(randomDice("d20"));