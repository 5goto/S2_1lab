"use strict";

const tableAndLines = () => {
  let userIn = prompt("n: ");
  if (checkInput(userIn) && checkRange(userIn)) {
    drawLines(parseInt(userIn));
    document.write(drawTable(parseInt(userIn)));
    drawLinesReverse(parseInt(userIn));
  }
};

tableAndLines();

function drawTable(n) {
  let StartJ = Math.floor(n / 2);
  let StartI = 0;
  let html = "<table>";
  for (let i = 0; i < n; i++) {
    html += "<tr>";
    let targetI = StartI + i;
    for (let j = 0; j < n; j++) {
      if (
        i == targetI &&
        (j >= StartJ + i || j >= StartJ - i) &&
        (j <= StartJ + i || j <= StartJ - i)
      ) {
        if (j <= StartJ) {
          html += `<td class='black'>${j - StartJ + i + 1}</td>`;
        } else {
          html += `<td class='black'>${i - j + StartJ + 1}</td>`;
        }
      } else {
        html += `<td>0</td>`;
      }
    }
    html += "</tr>";
  }
  html += "</table>";
  return html;
}

function drawLines(n) {
  const startWidth = 1000;
  let currentWidth = startWidth;
  const amountLines = n;
  const step = startWidth / n;
  for (let index = 0; index < amountLines; index++) {
    document.write(`<hr width=${currentWidth}>`);
    currentWidth -= step;
  }
}

function drawLinesReverse(n) {
  const startWidth = 1000;
  const step = startWidth / n;
  let currentWidth = step;
  const amountLines = n;
  for (let index = 0; index < amountLines; index++) {
    document.write(`<hr width=${currentWidth}>`);
    currentWidth += step;
  }
}

function checkInput(str) {
  const isNumeric = (n) => !!Number(n);
  if (isNumeric(str)) {
    str = Number(str);
    return Number.isInteger(str) ? true : false;
  }
}

function checkRange(str) {
  str = Number(str);
  return str > 2 && str < 15 ? true : false;
}
