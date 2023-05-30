"use strict";

const subsequenceMinor = () => {
  let isItMinor = false;
  let number = prompt("Введите число: ");
  let lastNum = 0;
  let counter = 0;

  while (!isNaN(parseFloat(number)) && isFinite(number)) {
    if (counter == -1) {
      // последовательность нарушена, продолжаем ввод без обработки
      number = prompt("Введите число: ");
      continue;
    } else if (counter == 0) {
      counter++;
      lastNum = parseFloat(number);
      number = prompt("Введите число: ");
    } else {
      if (parseFloat(number) < lastNum) {
        isItMinor = true;
        lastNum = parseFloat(number);
        counter++;
      } else if (parseFloat(number) >= lastNum) {
        counter = -1;
        isItMinor = false;
      }
      number = prompt("Введите число: ");
    }
  }
  return isItMinor;
};

console.log(subsequenceMinor());
