/*
  Создать функцию race(), которая принимает массив Promise,
  и возвращает первый успешно выполненные или отколенный
*/
"use strict";

async function main(array) {
  const result = await race(array);
  console.log(result);
}

async function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => p.then(resolve).catch(reject));
  });
}

const promise1 = fetch("https://dummyjson.com/products/1");
const promise2 = fetch("https://dummyjson.com/products/2");

main([promise1, promise2]);
