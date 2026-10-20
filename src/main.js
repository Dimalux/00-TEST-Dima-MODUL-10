


// ПОЯСНЕННЯ-20    npm ПАКЕТИ  (01:30:20 / 01:31:20)   (дивись рядок 1521 в файлі  "main Test.js")

// import { nanoid } from 'nanoid'

// console.log(nanoid());

// 1) запускаємо проект :
// npm run dev

// 2) Для того щоб використовувати пакет "nanoid" потрібно в фалі "*.js" (наприклад в фалі main.js) спочатку потрібно його імпортувати :

// import { nanoid } from 'nanoid'    -   імпорт м/б на самій горі файлу main.js
// console.log(nanoid());   //   в консолі при кожному перезавантаженні сторінки пакет "nanoid" буде генерувати випадкові ID-ки

//..................

// ПОЯСНЕННЯ-21 :

// import sum from "./helpers/helpers"

// console.log(sum(15, 25));    //     40



// .............................
// .............................

// ПОЯСНЕННЯ-23    ПЕРЕЙМЕНУВАННЯ Rename export (01:54:20)


// import sum from "./helpers/helpers";
// import { userName, sayHello } from "./helpers/helpers";
// import sum, { userName as helperName, sayHello } from "./helpers/helpers";    //   ІМЕНОВАНУ зміну "userName" перейменовуємо на "helperName"

// console.log(sum(2, 5));

// const userName = "Petya";

// console.log(sayHello());
// console.log(userName);
// console.log(helperName);

// .............................
// .............................


// ПОЯСНЕННЯ-24    Імпорт ПРОСТОРУ ІМЕН (namespace import)  (01:59:10)

// Замість :
// import { userName, sayHello } from "./helpers/helpers";

// Пишемо :
import * as helper from "./helpers/helpers";

console.log(helper.userName);    // "Alice"
console.log(helper.sayHello());  // "hello"







// Виконується першою
console.log("First log");

setTimeout(() => {
	// Виконується третьою, через 2000 мілісекунд (2 секунди)
  console.log("Second log");
}, 2000);

// Виконується другою
console.log("Third log");