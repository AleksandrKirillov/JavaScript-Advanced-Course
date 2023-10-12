'use strict';

function randomDice(dice, number) {
    const dices = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

    if (!dices.includes(dice)) {
        return "Выберите корректный кубик! Возможные варианты:" + dices.join(", ");
    };

    const max = Number.parseInt(dice.match(/\d+/));
    const randomNumber = Math.floor(( Math.random() * max + 1));

    return randomNumber === number ? "Вы выиграли." : `Вы проиграли. Полученное число ${randomNumber}`;
}

console.log(randomDice("d4", 4));
console.log(randomDice("d3"));