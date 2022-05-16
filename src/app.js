/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuses = {
  who: ["The dog", "My grandma", "His turtle", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "the keys", "the car"],
  when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]
};
const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const excuseGenerator = excuses => {
  return `${random(excuses.who)} ${random(excuses.action)} ${random(
    excuses.what
  )} ${random(excuses.when)}!`;
};

const excuse = document.querySelector("#excuse");
const btn = document.querySelector("#generate");

window.onload = function() {
  //write your code here
  excuse.innerHTML = excuseGenerator(excuses);
};

btn.addEventListener("click", () => {
  excuse.innerHTML = excuseGenerator(excuses);
});
