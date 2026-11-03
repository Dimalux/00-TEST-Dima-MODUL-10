'use strict';

// !!! УВАГА :
// ТЕРМІНАЛ показує "* History restored" і не дає ввести команду. Це відома проблема у VS Code, пов'язана зі спробою відновити історію команд під час запуску або зі збоєм у роботі графічного прискорення термінала.

// Швидке рішення
// Створіть НОВИЙ термінал: Натисніть на значок "+" на панелі термінала або перейдіть на АНГЛ-ку клавіатуру і використайте сполучення клавіш "Ctrl+Shift+`" (де "`" - тильда). Новий екземпляр термінала має запуститися без спроби відновлення історії.


//   МОДУЛЬ 10
// .............................


// (01:51:30)   ЗАДАЧА :  Написати клас Timer, який буде запускати та зупиняти відлік часу.


const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {

  start() {

const startTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
const deltaTime = currentTime - startTime;  //  отримуємо кількість мс, яка пройшла після натискання на кнопку "Start" поточного моменту
console.log(deltaTime);
},1000)
  };

}

const timer = new Timer();

startBtn.addEventListener("click", timer.start);


// (02:01:15)