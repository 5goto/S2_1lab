"use strict";

const countWords = (str) => {
  let aCounter = 0;
  let bCounter = 0;
  let wordsCounter = 0;
  for (let char of str) {
    switch (char) {
      case "a":
        aCounter++;
        break;
      case "b":
        bCounter++;
        break;
      case " ":
        if (aCounter == 1 && bCounter == 2) {
          wordsCounter++;
        }
        aCounter = 0;
        bCounter = 0;
        break;
      default:
        break;
    }
  }
  return wordsCounter;
};

console.log(
  countWords(
    "ffhjafga48gbfjb   bfjfiajfb37gt jf88rgyabufb4 fhfua9ffb1 ghueugjjd"
  )
);
