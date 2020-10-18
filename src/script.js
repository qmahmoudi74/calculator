"use strict";

// numbers
const one = document.querySelector(".button.one");
const two = document.querySelector(".button.two");
const three = document.querySelector(".button.three");
const four = document.querySelector(".button.four");
const five = document.querySelector(".button.five");
const six = document.querySelector(".button.six");
const seven = document.querySelector(".button.seven");
const eight = document.querySelector(".button.eight");
const nine = document.querySelector(".button.nine");
const zero = document.querySelector(".button.zero");

// operators
const plus = document.querySelector(".button.plus");
const subtract = document.querySelector(".button.subtract");
const multiply = document.querySelector(".button.multiply");
const divide = document.querySelector(".button.divide");
const equal = document.querySelector(".button.equal");
const point = document.querySelector(".button.point");
const backspace = document.querySelector(".button.backspace");

// monitor
const history = document.querySelector(".monitor .history");
const input = document.querySelector(".monitor .input textarea");

// number events
one.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "1";
});
two.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "2";
});
three.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "3";
});
four.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "4";
});
five.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "5";
});
six.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "6";
});
seven.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "7";
});
eight.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "8";
});
nine.addEventListener("click", () => {
  if (input.value === "0") input.value = "";
  if (input.value.length <= 59) input.value += "9";
});
zero.addEventListener("click", () => {
  if (input.value === "0") input.value = "0";
  else if (input.value.length <= 59) input.value += "0";
});

// operator events
const operatorClick = key => {
  equal.click();

  if (input.value !== "0") {
    if (history.textContent === "0") history.textContent = "";
    history.textContent += input.value + ` ${key} `;
    input.value = "0";
  }

  switch (key) {
    case "+":
      break;
    case "−":
      break;
    case "⨯":
      break;
    case "÷":
      break;
    default:
      break;
  }
};
plus.addEventListener("click", () => operatorClick("+"));
subtract.addEventListener("click", () => operatorClick("−"));
multiply.addEventListener("click", () => operatorClick("⨯"));
divide.addEventListener("click", () => operatorClick("÷"));
equal.addEventListener("click", () => {});
point.addEventListener("click", () => {});
backspace.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
  if (input.value === "") input.value = "0";
});

// global events
addEventListener("keydown", e => {
  switch (e.key) {
    case "1":
      one.click();
      break;
    case "2":
      two.click();
      break;
    case "3":
      three.click();
      break;
    case "4":
      four.click();
      break;
    case "5":
      five.click();
      break;
    case "6":
      six.click();
      break;
    case "7":
      seven.click();
      break;
    case "8":
      eight.click();
      break;
    case "9":
      nine.click();
      break;
    case "0":
      zero.click();
      break;
    case "+":
      plus.click();
      break;
    case "-":
      subtract.click();
      break;
    case "*":
      multiply.click();
      break;
    case "/":
      divide.click();
      break;
    case "=":
      equal.click();
      break;
    case ".":
      point.click();
      break;
    case "Backspace":
      backspace.click();
      break;
    default:
      break;
  }
});
