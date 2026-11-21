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
//     // const timeSum = `${hours} часов, ${minutes} хвилин, ${secs} секунд`;
// return `${hours} часов, ${minutes} хвилин, ${secs} секунд`;
// }

// console.log(getTimeComponents(632000));

//......................

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

// const secs = Math.floor((deltaTime / 1000) % 60);
// const minutes = Math.floor((deltaTime / 1000 / 60) % 60);
// const hours = Math.floor((deltaTime / 1000 / 60 / 60) % 24);

// console.log(`${hours} часов, ${minutes} хвилин, ${secs} секунд`);
// },1000)
//  }
//   }

// const timer = new Timer();

// startBtn.addEventListener("click", timer.start);


//......................

// // Код МІЙ :

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {

//   start() {

// const startTime = Date.now();

// setInterval(() => {
// const currentTime = Date.now();
// const deltaTime = currentTime - startTime;
// const time = this.getTimeComponents(deltaTime);

// console.log(time);

// }, 1000)
//  }

// getTimeComponents(time) {
// const secs = Math.floor((time / 1000) % 60);
// const minutes = Math.floor((time / 1000 / 60) % 60);
// const hours = Math.floor((time / 1000 / 60 / 60) % 24);

// return `${hours} часов, ${minutes} мінут, ${secs} секунд`;

// }
// }

// const timer = new Timer();

// startBtn.addEventListener("click", timer.start.bind(timer));


// //......................
// //......................


// // Код МЕНТОРА :

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {
// constructor({ onTick }) {
//   this.onTick = onTick;       //   функція "onTick" відповідає за відображення годинника

//   this.isActive = false;      //    за замовчуванням ТАЙМЕР НЕ ЗАПУЩЕНИЙ

// this.init();
// this.intervalId = null;
// }

// init() {
// const time = this.getTimeComponents(0);
// this.onTick(time);       //   функція "onTick" відповідає за відображення годинника
// }

//   start() {
// if(this.isActive) {      //  перевірка - "ЧИ ЗАПУЩЕНИЙ зараз ТАЙМЕР, ЧИ НІ"
// return;
// }

// const startTime = Date.now();
// this.isActive = true;

// this.intervalId = setInterval(() => {
// const currentTime = Date.now();
// const deltaTime = currentTime - startTime;
// const time = this.getTimeComponents(deltaTime);
// console.log(time);

// this.onTick(time);      //   кожну секунду перемальовуємо наш таймер

// }, 1000)
//  }

//  stop() {
//   clearInterval(this.intervalId);
//   this.init();
//   this.isActive = false;
//  }

// getTimeComponents(time) {       //  (див. рядок 47) (02:01:15)  метод "getTimeComponents()" підраховує скільки в "deltaTime" секунд, хвилин, годин :
// // const secs = Math.floor((time / 1000) % 60);
// // const minutes = Math.floor((time / 1000 / 60) % 60);
// // const hours = Math.floor((time / 1000 / 60 / 60) % 24);

// const secs = this.pad(Math.floor((time / 1000) % 60));
// const minutes = this.pad(Math.floor((time / 1000 / 60) % 60));
// const hours = this.pad(Math.floor((time / 1000 / 60 / 60) % 24));

// return { hours, minutes, secs };
// }

// pad(value)  {
//   return String(value).padStart(2, "0");
// }


// }

// const timer = new Timer({
//   onTick: update
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));


// // (02:14:00)  Тепер траба ВІДОБРАЗИТИ НА СТОРИНЦІ наші "часи, хвилини, секунди". Створимо функцію яка буде записувати якісь дані на основі об'єкта {0 часов, 0 мінут, 12 секунд} (див. рядок 177) в текст "<p class="clockface"></p>" на сторінці (ми його вже отримали "const clockface = document.querySelector(".clockface")"). Далі цю функцію передавати під час створення екземпляра класу "timer". Тоді у кожного екземпляра ця функція може бути своя.

// // Створюємо функцію "update" яка буде приймати рядок "0 часов, 0 мінут, 12 секунд" (див. рядок 177):
// function update({hours, minutes, secs}) {
// clockface.innerHTML = `${hours}:${minutes}:${secs}`;
// }

// //......................
// //......................

// Тепер передамо цю функцію в клас "Timer" (див. рядок був 181), як аргумент. Якщо ми "щось" (в прикладі передаємо ОБ'ЄКТ "{onTick: update}") (див. рядок 181) передаємо в "Timer" як аргумент (при створенні екземпляра класу), то це "щось" отримуємо в "constructor" (див. рядок 154). Передамо об'єкт, в якого буде властивість, наприклад, "onTick" зі значенням "update" (наша функція). Наша функція "update" хоче об'єкт як аргумент. В нас цей об'єкт зберігається в змінній "time" (див. рядок 164):
// const time = this.getTimeComponents(deltaTime);    (рядок 164)
// Тепер в створену    властивісь "onTick" (наша функція "update") передаємо змінну "time" (див. рядок 167):
// this.onTick(time);    (рядок 167)

// (02:21:00)

// Тепер при натисканні на сторінці на кнопку "Start" в рядку "clockface" буде відмальовуватись :
// 0:0:1
// 0:0:2
// 0:0:3 ...

// Треба зробити, щоб відображалось :
// 00:00:01
// 00:00:02
// 00:00:03 ...

// Для того щоб зробити ці два знаки "00" треба під час створення об'єкту використати метод рядків padStart() для :

// рядок 175  -  const secs = Math.floor((time / 1000) % 60);
// рядок 176  -  const minutes = Math.floor((time / 1000 / 60) % 60);
// рядок 177  -  const hours = Math.floor((time / 1000 / 60 / 60) % 24);

// (дивись репозиторій "00-TEST-Dima-git"

// lesson-1.js рядок 168, 191, 195;
// modul-3.js рядок 404-410;
// modul-6.js рядок 2550  -  padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.;
//            рядок 2576, 2611;
// modul-7.js рядок 3600;
// )

// Спочатку перетворимо число на рядок. Для цього створимо в класі метод pad() :

// pad(value)  {
//   return String(value).padStart(2, "0")    // тобто ми хочимо, щоб довжина нашого рядка була 2-а символи, а якщо буде менше додається на початку "0"
// }

// Потім будемо викликати цю функцію для кожної змінної secs, minutes, hours (рядок 179-181).


// (02:24:30)  Якщо натиснути на кнопку "Start", а потім, через деякий час, знову натиснути, то таймер буде показувати якісь незрозуміли цифри. Щоб такого не було ТРЕБА створити в конструкторі властивість об'єкта наприклад "isActive" (див. рядок 156), який буде перевіряти "ЧИ ЗАПУЩЕНИЙ зараз ТАЙМЕР, ЧИ НІ" - "this.isActive = false" (за замовчуванням ТАЙМЕР НЕ ЗАПУЩЕНИЙ).
// Тепер перед тим як запускати функцію "start()" (натиснути на кнопку "Start") робимо перевірку :
// якщо  "this.isActive = true", тобто таймер вже запущений, то нам не треба другий раз запускати таймер і ми повинні припинити роботу нашою функції "start()" (див. рядок 163) - "return". А якщо таймер ще НЕ був запущений то функція запускається і ми виставляєємо "this.isActive = true", тобто таймер в роботі (див. рядок 167).


// (02:27:50)  Коли сторінка в браузері завантажується ми, доки не натиснули на кнопку "Start", ще не бачимо нашого таймера "00:00:00". Для того щоб таймер відмальовувся створимо функцію "init()" (див. рядок 162). В цій функції ми повинні створити об'єкт зі усіма нулями "00:00:00" const time (див. рядок 160), для цього в нас є метод "getTimeComponents(time)"
// const time = this.getTimeComponents(0);
// і потім викликати функцію "onTick" з цим об'єктом де всі нулі. Тепер треба викликати цю функцію. Для того щоб ця функція "onTick" з об'єктом де всі нулі "00:00:00" викликалась сама (автоматично) запишимо її в конструктор (див. рядок 158).


// (02:30:30) Тепер треба реалізувати роботу кнопки "Stop" (див. рядок 187). Для цього створимо функцію "stop()", яка буде зупиняти інтервал setInterval (див. рядок 176). Для цього нам потрібен ID цього інтервалу (дивись main-Test-MODUL-10.js - рядок 149, 157, рядок 172-186 - Метод clearInterval(id) - СКАСУВАННЯ ІНТЕРВАЛу). Створимо в конструкторі властивість де будемо зберігати цей ID :

// this.intervalId = null;            (див. рядок 159)

// замість   setInterval(() => {        запишем :

// this.intervalId = setInterval(() => {      (див. рядок 176)

// Тепер викликаємо функцію "stop()", але так як ми використовуємо "this" в :
// stop() {
//   clearInterval(this.intervalId);
//  }

// нам потрібно ПРИВ'ЯЗАТИ КОНТЕКСТ "bind(timer)" :
// stopBtn.addEventListener("click", timer.stop.bind(timer));      (див. рядок 215)


// (02:33:33)  Тепер треба ОБНУЛИТИ таймер "00:00:00". Знову будем викликати функцію "this.init", де "getTimeComponents(0)" (див. рядок 189). Функція "init()" (див. рядок 162).

// init() {                         //        (див. рядок 162)
// const time = this.getTimeComponents(0);
// this.onTick(time);
// }


// (02:34:15)  Але тепер після ЗУПИНКИ і ОБНУЛЕННЯ ТАЙМЕРУ ми НЕ можемо ЗАНОВО запустити таймер, тому що ми не проходимо перевірку :

// if(this.isActive) {    //  (див. рядок 169)
// return;

// тому що коли ЗУПИНИЛИ ТАЙМЕР ми повинні перевести властивісь "isActive" в "false" :

// this.isActive = false;     //  (див. рядок 190)


// (02:35:11)    ОБЗОР КОДУ


// (02:40:15)



// (02:17:17) - варіант для ще однієї кнопки ТАЙМЕРА






//......................
//......................


// Код МЕНТОРА ПРОСТО ФУНКЦІЇ (без класу):

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");


let isActive = false;      //    за замовчуванням ТАЙМЕР НЕ ЗАПУЩЕНИЙ
let intervalId = null;     //    оголошення ID-ка для інтервалу "setInterval"


 function start() {
if(isActive) {      //  перевірка - "ЧИ ЗАПУЩЕНИЙ зараз ТАЙМЕР, ЧИ НІ"
return;
}

const startTime = Date.now();
isActive = true;


intervalId = setInterval(() => {
const currentTime = Date.now();
const deltaTime = currentTime - startTime;
// const time = this.getTimeComponents(deltaTime);
// console.log(time);
console.log(deltaTime);

// this.onTick(time);      //   кожну секунду перемальовуємо наш таймер

}, 1000)
 }

function stop() {
  clearInterval(intervalId);
  isActive = false;
 }




startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);





// class Timer {
// constructor({ onTick }) {
//   this.onTick = onTick;       //   функція "onTick" відповідає за відображення годинника

//   this.isActive = false;      //    за замовчуванням ТАЙМЕР НЕ ЗАПУЩЕНИЙ

// this.init();
// this.intervalId = null;
// }

// init() {
// const time = this.getTimeComponents(0);
// this.onTick(time);       //   функція "onTick" відповідає за відображення годинника
// }

//   start() {
// if(this.isActive) {      //  перевірка - "ЧИ ЗАПУЩЕНИЙ зараз ТАЙМЕР, ЧИ НІ"
// return;
// }

// const startTime = Date.now();
// this.isActive = true;

// this.intervalId = setInterval(() => {
// const currentTime = Date.now();
// const deltaTime = currentTime - startTime;
// const time = this.getTimeComponents(deltaTime);
// console.log(time);

// this.onTick(time);      //   кожну секунду перемальовуємо наш таймер

// }, 1000)
//  }

//  stop() {
//   clearInterval(this.intervalId);
//   this.init();
//   this.isActive = false;
//  }

// getTimeComponents(time) {       //  (див. рядок 47) (02:01:15)  метод "getTimeComponents()" підраховує скільки в "deltaTime" секунд, хвилин, годин :
// // const secs = Math.floor((time / 1000) % 60);
// // const minutes = Math.floor((time / 1000 / 60) % 60);
// // const hours = Math.floor((time / 1000 / 60 / 60) % 24);

// const secs = this.pad(Math.floor((time / 1000) % 60));
// const minutes = this.pad(Math.floor((time / 1000 / 60) % 60));
// const hours = this.pad(Math.floor((time / 1000 / 60 / 60) % 24));

// return { hours, minutes, secs };
// }

// pad(value)  {
//   return String(value).padStart(2, "0");
// }


// }

// const timer = new Timer({
//   onTick: update
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));


// // (02:14:00)  Тепер траба ВІДОБРАЗИТИ НА СТОРИНЦІ наші "часи, хвилини, секунди". Створимо функцію яка буде записувати якісь дані на основі об'єкта {0 часов, 0 мінут, 12 секунд} (див. рядок 177) в текст "<p class="clockface"></p>" на сторінці (ми його вже отримали "const clockface = document.querySelector(".clockface")"). Далі цю функцію передавати під час створення екземпляра класу "timer". Тоді у кожного екземпляра ця функція може бути своя.

// // Створюємо функцію "update" яка буде приймати рядок "0 часов, 0 мінут, 12 секунд" (див. рядок 177):
// function update({hours, minutes, secs}) {
// clockface.innerHTML = `${hours}:${minutes}:${secs}`;
// }

// //......................
// //......................
