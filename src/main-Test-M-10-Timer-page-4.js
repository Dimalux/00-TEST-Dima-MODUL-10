'use strict';

// !!! УВАГА :
// ТЕРМІНАЛ показує "* History restored" і не дає ввести команду. Це відома проблема у VS Code, пов'язана зі спробою відновити історію команд під час запуску або зі збоєм у роботі графічного прискорення термінала.

// Швидке рішення
// Створіть НОВИЙ термінал: Натисніть на значок "+" на панелі термінала або перейдіть на АНГЛ-ку клавіатуру і використайте сполучення клавіш "Ctrl+Shift+`" (де "`" - тильда). Новий екземпляр термінала має запуститися без спроби відновлення історії.


//   МОДУЛЬ 10
// .............................


// (01:51:30)   ЗАДАЧА :  Написати клас Timer, який буде запускати та зупиняти відлік часу.


// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {

//   start() {

// const startTime = Date.now();

// setInterval(() => {
//   const currentTime = Date.now();
// const deltaTime = currentTime - startTime;  //  отримуємо кількість мс, яка пройшла після натискання на кнопку "Start" поточного моменту.
// // Можна відразу округлити значення в "мс" до "сек" (наприклад 2005мс до 2сек) за допомогою методів "Math.floor()" або "Math.round()" (дивись 1. Модуль 1. Змінні та типи. Основи функцій - Оператори порівняння):
// // console.log(Math.floor(deltaTime/1000));
// // console.log(Math.round(deltaTime/1000));

// },1000)
//   };




// }

// const timer = new Timer();

// startBtn.addEventListener("click", timer.start);


// (02:01:15)  Тепер треба зрозуміти скільки в "deltaTime" секунд, хвилин, годин.
// Напишемо метод "getTimeComponents()", який це реалізує :



//  function getTimeComponents(time) {
// const secs = (time / 1000) % 60;
//     // Скільки в нас СЕКУНД ???
//   //  return  secs     //  наприклад 62000мс: 62000 / 1000 = 62 % 60 = 2, тобто в цифрі 62000 буде 2 секунди і ще хвилина, але нас цікавить ТІЛЬКИ "2-і секунди" (де оператор (%) повертає остачу від ділення одного числа на інше, наприклад : const x = 8;  const y = 5; console.log(x % y); // 3  (дивись 1. Модуль 1. Змінні та типи. Основи функцій - Змінні та типи даних))


// // Скільки в нас ХВИЛИН ???
//     const minutes = Math.floor((time / 1000 / 60) % 60) ;
// // return minutes;

// // Скільки в нас ГОДИН ???
//     const hours = Math.floor((time / 1000 / 60 / 60) % 24) ;
//     // const timeSum = `${hours} часов, ${minutes} мінут, ${secs} секунд`;
// return `${hours} часов, ${minutes} мінут, ${secs} секунд`;
// }

// console.log(getTimeComponents(632000));








const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {

  start() {

const startTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
const deltaTime = currentTime - startTime;  //  отримуємо кількість мс, яка пройшла після натискання на кнопку "Start" поточного моменту.
// Можна відразу округлити значення в "мс" до "сек" (наприклад 2005мс до 2сек) за допомогою методів "Math.floor()" або "Math.round()" (дивись 1. Модуль 1. Змінні та типи. Основи функцій - Оператори порівняння):
// console.log(Math.floor(deltaTime/1000));
// console.log(Math.round(deltaTime/1000));

const secs = Math.floor((deltaTime / 1000) % 60);
const minutes = Math.floor((deltaTime / 1000 / 60) % 60);
const hours = Math.floor((deltaTime / 1000 / 60 / 60) % 24);

console.log(`${hours} часов, ${minutes} мінут, ${secs} секунд`);
},1000)
 }

  }


const timer = new Timer();

startBtn.addEventListener("click", timer.start);




// function getTimeComponents(time) {
// const secs = Math.floor((deltaTime / 1000) % 60);
// const minutes = Math.floor((time / 1000 / 60) % 60) ;
// const hours = Math.floor((time / 1000 / 60 / 60) % 24) ;

// return `${hours} часов, ${minutes} мінут, ${secs} секунд`;
// }

// console.log(getTimeComponents(632000));

