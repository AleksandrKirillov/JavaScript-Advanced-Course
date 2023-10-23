"use strict";

const SEC_TO_MONTH = 2678400;
const SEC_TO_DAY = 86400;
const SEC_TO_HOUR = 3600;
const SEC_TO_MINUTE = 60;

function calcBeforeNewYear() {
  const nowYear = new Date().getFullYear();
  const newYearDate = new Date(nowYear + 1, 0, 0);

  outputCalc(newYearDate.getTime());

  const interval = setInterval(() => {
    outputCalc(newYearDate.getTime());
  }, 1000);

  setTimeout(
    () => clearInterval(interval),
    newYearDate.getTime() - new Date().getTime()
  );
}

function outputCalc(time) {
  const diff = time - new Date().getTime();
  document.querySelector(".element").innerText = prepareTextTimer(diff);
}

function prepareTextTimer(ms) {
  let seconds = Math.floor(ms / 1000);

  let month = Math.floor(seconds / SEC_TO_MONTH);
  seconds -= month * SEC_TO_MONTH;

  let day = Math.floor(seconds / SEC_TO_DAY);
  seconds -= day * SEC_TO_DAY;

  let hour = Math.floor(seconds / SEC_TO_HOUR);
  seconds -= hour * SEC_TO_HOUR;

  let minute = Math.floor(seconds / SEC_TO_MINUTE);
  seconds -= minute * SEC_TO_MINUTE;

  return (
    `До нового года осталось: ` +
    `${month} ${getTimeWord("month", month)}, ` +
    `${day} ${getTimeWord("day", day)}, ` +
    `${hour} ${getTimeWord("hour", hour)}, ` +
    `${minute} ${getTimeWord("minute", minute)} ` +
    `и ${seconds} ${getTimeWord("second", seconds)}`
  );
}

function getTimeWord(name, number) {
  const suffixes = {
    second: new Map([
      ["one", "секунда"],
      ["few", "секунды"],
      ["many", "секунд"],
    ]),

    minute: new Map([
      ["one", "минута"],
      ["few", "минуты"],
      ["many", "минут"],
    ]),

    hour: new Map([
      ["one", "час"],
      ["few", "часа"],
      ["many", "часов"],
    ]),

    day: new Map([
      ["one", "день"],
      ["few", "дня"],
      ["many", "дней"],
    ]),

    month: new Map([
      ["one", "месяц"],
      ["few", "месяца"],
      ["many", "месяцев"],
    ]),
  };

  const format = new Intl.PluralRules(navigator.language).select(number);
  return suffixes[name].get(format);
}

calcBeforeNewYear();
