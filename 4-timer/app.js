"use strict";

const SECTOMONTH = 2678400;
const SECTODAY = 86400;
const SECTOHOUR = 3600;
const SECTOMINUTE = 60;

function calcBeforeNewYear() {
  const nowYear = new Date().getFullYear();
  const newYearDate = new Date(nowYear + 1, 0, 0);

  setInterval(() => {
    const diff = newYearDate.getTime() - new Date().getTime();
    document.querySelector(".element").innerText = prepareTextTimer(diff);
  }, 1000);
}

function prepareTextTimer(ms) {
  let seconds = Math.floor(ms / 1000);

  let month = Math.floor(seconds / SECTOMONTH);
  seconds -= month * SECTOMONTH;

  let day = Math.floor(seconds / SECTODAY);
  seconds -= day * SECTODAY;

  let hour = Math.floor(seconds / SECTOHOUR);
  seconds -= hour * SECTOHOUR;

  let minute = Math.floor(seconds / SECTOMINUTE);
  seconds -= minute * SECTOMINUTE;

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
