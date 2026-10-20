'use strict';
//   МОДУЛЬ 10   -   (дивись рядок 1834)

// 9. Модуль - Модульність коду і bundler Vite :

// Формат JSON
// Вебсховище
// Інструменти веброзробки
// Модульність коду



//...............

// Що робити, коли Git блокує операцію "git pull", щоб не втратити незбережені (незакомічені) локальні зміни.
// "Please commit your changes or stash them before you merge.
// Aborting"  //    "Будь ласка, зафіксуйте зміни або збережіть їх перед об'єднанням.
// Переривання"

// git stash
// git pull
// git stash pop


// .............................
// .............................


// ПОЯСНЕННЯ-1   Формат JSON.
//               Стандарт JSON (СТРУКТУРОВАНІ дані у текстовій формі) :

// JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі.

// СТРУКТУРОВАНІ дані -  «Об'єкти та Масиви» (загальне значення).
// У порівнянні з простими (примітивними) типами (число, рядок, буль, null, undefined, Symbol), структуровані дані — це ті, що можуть містити інші дані всередині:
// Об'єкти (Object) — набори пар «ключ-значення».
// Масиви (Array) — впорядковані списки значень.

// Саме в цьому форматі дані будуть:

// - приходити з сервера,
// - відправлятися на сервер,
// - зберігатися в локальному сховищі тощо.



// Звичайний об'єктоподібний синтаксис JSON дуже зручний. Але JSON — це не об'єкт, а його рядкове відображення. Розгляньте приклад JSON файлу :

// {
//   "name": "Josh",
//   "age": 30,
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }


// Синтаксис схожий на об'єкт, за винятком того, що :

// 1) Ключі — ЦЕ ЗАВЖДИ РЯДКИ, обов'язково в ПОДВІЙНИХ !!!   лапках;    ( НЕ в ОДИНАРНИХ !!! )
// 2) Значення рядків — також обов'язково в ПОДВІЙНИХ !!!   лапках;     ( НЕ в ОДИНАРНИХ !!! )
// 3) У JSON немає коми після останньої властивості об'єкта.

// - Значення властивостей МОЖЕ БУТИ спеціальним значенням - "null",
// але НЕ МОЖЕ БУТИ - "undefined".
// - Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.


// .............................
// .............................


// ПОЯСНЕННЯ-2   Формат JSON.
//               Перетворення у json :

// Javascript і JSON чудово працюють разом, завдяки методам вбудованого класу JSON. Ці методи перетворюють JavaScript об'єкт у JSON і навпаки.

// Метод "JSON.stringify(value)" приймає значення і перетворює його у JSON.
// Значенням може бути число, буль, null, масив, об'єкт.
// Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.

// 1) для ОБ'ЄКТА :

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json);        //      {"name":"Mango","age":3,"isGoodBoy":true}

// !!! КОНСОЛЬ показує значення, а не тип !!!
// Коли використовуємо console.log(), консоль намагається показати вам значення у найбільш "читабельному" вигляді. Вона не обов'язково додає лапки, щоб підкреслити, що це рядок, особливо якщо вміст рядка схожий на код.

// console.log(typeof json); // "string"

// Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.

// .......

// 2) для ЧИСЛА :

// console.log(JSON.stringify(32));

// console.log(typeof JSON.stringify(32));   // "string"

// .......

// 2) для БУЛЬ (логічне значення) :

// console.log(JSON.stringify(true));

// console.log(typeof JSON.stringify(true));   // "string"



// .............................
// .............................


// ПОЯСНЕННЯ-3   Формат JSON.
//               Перетворення функцій :

// 1) Не всі JavaScript об'єкти можуть бути перетворені один в один у JSON. Наприклад, якщо в об'єкта є МЕТОДИ, то при перетворенні вони будуть проігноровані та НЕ ПОТРАПЛЯТЬ у JSON :

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const json1 = JSON.stringify(dog);
// console.log(json1);                    // '{"name":"Mango","age":3,"isGoodBoy":true}'

// ..........

// 2) Також при спробі перетворити ФУНКЦІЮ у JSON результатом буде "undefined" :

// const json2 = JSON.stringify(() => console.log("Well, this is awkward"));
// console.log(json2);    // undefined



// .............................
// .............................


// ПОЯСНЕННЯ-4   Формат JSON.
//               Парсинг із json :

// Щоб отримати з JSON валідне JavaScript значення, його необхідно РОЗПАРСИТИ (parse).
// "Розпарсити" (або просто "парсити") означає перетворити текстовий рядок у структуровані дані, з якими можна працювати в програмі.
// Це операція зворотня перетворенню JavaScript об'єкта в json за допомогою методу "JSON.stringify(value)".
// Метод "JSON.parse(value)" приймає json, тобто рядок, і перетворює його у JavaScript дані :

// console.log(JSON.parse("5"));          // 5
// console.log(JSON.parse("false"));      // false
// console.log(JSON.parse("null"));       // null
// console.log(JSON.parse('"hello"'));    // hello

// // !!!!  АЛЕ :
// console.log(JSON.parse("'hello'"));    // ❌ ПОМИЛКА!    МАЄ БУТИ в ПОДВІЙНИХ !!!   лапках;    ( НЕ в ОДИНАРНИХ !!! )

// !!!  ЧОМУ ?
// JSON дозволяє ТІЛЬКИ подвійні лапки " для рядків.
// JSON НЕ ДОЗВОЛЯЄ одинарні лапки ' для рядків.

// ........

// Якщо json описує складний тип даних, наприклад ОБ'ЄКТ, то в результаті отримаємо валідний ОБ'ЄКТ, з яким можна працювати звичайним чином :

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

// const dog = JSON.parse(json);
// console.log(dog);                 //  {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name);            //  "Mango"

// ........

// !!!  ЗАУВАЖЕННЯ :
// JSON підтримує такі типи даних:

// // ✅ Прості типи (без фігурних дужок і ключів)
// JSON.parse("5")       // число
// JSON.parse("false")   // логічне
// JSON.parse("null")    // null
// JSON.parse('"hello"') // рядок (але з подвійними лапками!)

// // ✅ Складні типи
// JSON.parse("[1,2,3]")           // масив
// JSON.parse('{"name":"Mango"}')  // об'єкт



// .............................
// .............................


// ПОЯСНЕННЯ-5   Формат JSON.
//               Парсинг із json.  ОБРОБКА ПОМИЛОК (конструкція "try...catch") :

// Якщо методу JSON.parse передати невалідний JSON, він згенерує помилку. Як результат, увесь скрипт впаде, тобто припинить своє виконання, і весь код після місця помилки не виконається.
// До такого сценарію призведе, наприклад, парсинг рядка.
// Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення :

// const data = JSON.parse("Well, this is awkward");
// console.log("❌ You won't see this log");

// Помилка буде і при спробі парсингу невалідного об'єкта, який, наприклад, може прийти з бекенду. У прикладі у властивості username бракує подвійних лапок :

// const data = JSON.parse('{username: "Mango"}');   // Error
// console.log("❌ You won't see this log");


// РІШЕННЯ :
// Для уникнення цього використовується конструкція "try...catch", яка дозволяє «ловити» й обробляти помилки виконання скрипта :

// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }


// Спочатку виконується код всередині блоку "try".
// Якщо помилки відсутні, блок "catch" ігнорується й управління передається далі.
// Якщо в блоці "try" сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку "catch".

// Використовуючи конструкцію "try...catch", можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки :

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name);       //   SyntaxError
//   console.log(error.message);    //   Unexpected token 'W', "Well, this"... is not valid JSON
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");    //   ✅ This is fine, we handled parsing error in try...catch


// Змінна "error" — це об'єкт помилки з інформацією про те, що сталося.

// У цього об'єкта є кілька корисних властивостей :

// name — тип помилки. Для помилки парсингу — це "SyntaxError".
// message — повідомлення про деталі помилки.
// stack — стек викликів функцій на момент помилки. Використовується для налагодження.



// .............................
// .............................


// ПОЯСНЕННЯ-5   Формат JSON.
//               Парсинг із json.  ДЕТАЛЬНІШЕ про ПОМИЛКИ :

// У JavaScript код виконується не одразу.
// Для початку інтерпретатору потрібно прочитати код і дізнатися, чи можливо його взагалі виконати.

// 1) ФАЗА ОЦІНКИ, або оцінки (compile time, evaluation time) — підготовка перед виконанням коду: інтерпретатор знаходить синтаксичні помилки, помилки типізації тощо. Отже, код ще не виконується, лише оцінюється.
// Якщо ця фаза пройшла успішно, це щонайменше означає, що в коді відсутні синтаксичні помилки і його можна запустити для виконання.

// 2) ФАЗА ВИКОНАННЯ (runtime) — скрипт починає виконуватися: виконуються інструкції викликів функцій і оцінювання виразів, відбувається пошук необхідних ідентифікаторів у відповідних областях видимості тощо.

// Якщо ця фаза проходить успішно, це свідчить про те, що скрипт написаний без явних помилок і виконав свою роботу. На цій фазі можуть бути помилки, пов'язані з відсутніми властивостями та змінними, перетворенням типів тощо, тобто щось, що відбувається тільки під час виконання коду.

// ПРИКЛАД для розуміння :

// console.log('This message will not appear in the console');

// cos value = 5;     //   навмисно зроблена помилка. Замість "const" намагаємося оголосити "cos"


// На ФАЗІ ОЦІНКИ буде виявлена синтаксична помилка (ФАЗА ВИКОНАННЯ навіть не запуститься). У консолі ми одразу побачимо повідомлення про помилку. Помилки, які виникають під час ФАЗИ ОЦІНКИ, називаються помилками парсингу.

// Конструкція try...catch ловить тільки помилки, які виникли під час ФАЗИ ВИКОНАННЯ (виконання коду runtime errors). Це означає, що код має бути синтаксично правильним, інакше ФАЗА ВИКОНАННЯ просто не запуститься.



// .............................
// .............................


// ПОЯСНЕННЯ-6   Вебсховище.
//               Сookie :

// Cookie (кукі, печиво) — це невеликі фрагменти текстових даних, які вебсайт зберігає на комп'ютері або пристрої користувача через браузер. Вони є ще одним механізмом зберігання даних на стороні клієнта, але працюють інакше, ніж вебсховище.

// Основні характеристики cookie :

// 1) Розмір: дуже малі (зазвичай до 4 КБ на один cookie).
// 2) Автоматично надсилаються на сервер при кожному HTTP-запиті до того самого сайту.
// 3) Мають термін придатності (можуть бути сесійними — видаляються після закриття браузера, або постійними — зберігаються до вказаної дати).
// 4) Прив'язані до конкретного домену (сайту) та шляху.


// Історично cookie використовували для всього (бо Web Storage з'явився значно пізніше). А в сучасних практиках багато з цього вже перенесено в Web Storage.

//     Cookie - ТІЛЬКИ для того, що має бачити сервер автоматично.
// Аутентифікація, сесії, токени. Це класичне і правильне використання cookie.
// Сервер встановлює sessionId або token у cookie (часто з HttpOnly), і браузер автоматично надсилає його з кожним запитом.

// Web Storage - для всього клієнтського:
// Тема, шрифт, чернетки форм, налаштування інтерфейсу.

// Мова сайту може бути як у cookie, так і в localStorage - залежить від того, хто вирішує: сервер (тоді cookie) чи клієнтський JS (тоді localStorage).


// ВЕБСХОВИЩЕ складається з локального сховища та сховища сеансів :

// -  Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані;
// Доступ до локального сховища можна отримати в об`єкті window :

// console.log(window.localStorage);     // Storage {length: 0}

// Можна також отримати прямий доступ до об`єкта localStorage, адже за замовчуванням пошук відбувається на об`єкті window :

// console.log(localStorage);    // Storage {length: 0}

// -  Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.


// .............................
// .............................


// ПОЯСНЕННЯ-7   Вебсховище.
//               ДОДАВАННЯ даних (localStorage.setItem()) :

// Додамо пару ключ-значення до локального сховища за допомогою методу setItem(key, value), доступного в об`єкті localStorage:

// localStorage.setItem("theme", "light");

// Це встановить новий запис у сховищі з ключем "theme" і значенням "light". Якщо викликати об`єкт localStorage зараз, то побачимо збережені дані :

// console.log(localStorage);   //  Storage {theme: 'light', length: 1}

// Також побачимо у браузері в розділі «Local Storage» в інструментах розробника в таблиці "Ключ"  "Значення" :

// theme	light


// .............................
// .............................


// ПОЯСНЕННЯ-8   Вебсховище.
//               ДОДАВАННЯ СКЛАДНИХ даних (localStorage.setItem("******", JSON.stringify(******)) :

// У вебсховище не записують методи об'єктів або функції, тільки дані, які підтримує JSON формат.
// Технічно у вебсховище можна записати тільки рядки. Але це не проблема, якщо використовувати методи класу JSON для перетворення складних типів.
// Якщо необхідно зберегти щось, окрім рядка, наприклад, МАСИВ або ОБ'ЄКТ, необхідно перетворити їх у рядок методом JSON.stringify() :


// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));


// Видалення даних :
// localStorage.removeItem("settings");
// localStorage.clear();


// .............................
// .............................


// ПОЯСНЕННЯ-9   Вебсховище.
//               ОТРИМАННЯ даних (localStorage.getItem()) :

// localStorage.setItem("theme2", "light2");
// const savedItem2 = localStorage.getItem("theme2");
// console.log(savedItem2);              // light2

// // Якщо у сховищі відсутній запис з таким ключем, метод повертає "null" :

// const savedItem3 = localStorage.getItem("theme3");
// console.log(savedItem3);              // null

// ..............

                //  ОТРИМАННЯ СКЛАДНИХ даних  (localStorage.setItem("******", JSON.stringify(******)) :

// Якщо значення є примітивним типом, немає потреби його парсити. Якщо це МАСИВ або ОБ'ЄКТ, необхідно РОЗПАРСИТИ значення методом "JSON.parse()", щоб отримати валідні дані :

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string   -   {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object    -    {theme: 'dark', isAuthenticated: true, options: Array(3)}


// Видалення даних :
// localStorage.removeItem("settings");
// localStorage.clear();


// У змінній savedSettings буде рядок, що представляє ОБ'ЄКТ, тому ми розпарсюємо це значення, і у змінній parsedSettings отримуємо повноцінний ОБ'ЄКТ із властивостями.



// .............................
// .............................


// ПОЯСНЕННЯ-10   Вебсховище.
//                ВИДАЛЕННЯ даних (localStorage.removeItem()) :

// 1)  Метод "removeItem(key)" видаляє зі сховища існуючий запис з ключем key. В результаті своєї роботи він не повертає значення :

// localStorage.removeItem("topic");
// console.log(localStorage.getItem("topic")); // null

// localStorage.removeItem("theme");
// console.log(localStorage.getItem("theme")); // null


// 2)  Щоб повністю очистити сховище, потрібно викликати метод "clear()" :

// localStorage.setItem("theme-3", "light");
// localStorage.setItem("notif-level-4", "mute");

// console.log(localStorage);
// // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

// // localStorage.clear();
// // console.log(localStorage); // Storage {length: 0}

// Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту. Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.


// .............................
// .............................


// ПОЯСНЕННЯ-11   Вебсховище.
//                ВИДСХОВИЩЕ  СЕСІЇ "sessionStorage" :

// Сховище сесії зберігає дані лише доти, поки відкрита вкладка браузера.
// Це означає, що кожного разу, коли відкривається нова вкладка або нове вікно браузера, створюється нове сховище сесії. Отже, будь-які дані, які зберігаються в сховищі сесії, автоматично видаляються, коли користувач закриває цю вкладку/вікно.

// Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.
// Єдиний виняток — звертаємося до них через об'єкт "sessionStorage", а не "localStorage" :


// console.log(window.sessionStorage); // Storage {length: 0}


// // 1)  Методом "setItem(key, value)" можна записувати як рядки, так і складні типи даних :

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// // .........

// // 2)  Методом "getItem(key)" можна читати записи, використовуючи збережений ключ :

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// // .........

// // 3)  Видаляти елементи за ключем і очищати сховище цілком методами "removeItem(key)" і "clear()" відповідно :

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}


// .............................
// .............................


// ПОЯСНЕННЯ-12   Вебсховище.
//                Кейс: Форма з повідомленням :


// <form class="feedback-form-2">
//   <textarea name="message"></textarea>
//   <button type="submit">Send feedback</button>
// </form>


// const form = document.querySelector(".feedback-form-2");

// form.addEventListener("submit", event => {
//     event.preventDefault();
//     console.log(event.target.elements.message.value);
// })


// ПРОБЛЕМА :
// Якщо користувач ввів повідомлення в текстове поле і перезавантажив сторінку, не надіславши форму, під час перезавантаження сторінки введене повідомлення пропадає.

// РІШЕННЯ :
// Зробимо так, щоб при перезавантаженні сторінки зберігалося введене повідомлення.

// 1)  Для цього використовуємо локальне сховище, щоб зберегти поточне значення текстового поля під час введення. Щоразу, коли змінюється значення поля, тобто відбувається подія "input", ми :
// -  використовуємо делегування подій;
// -  ловимо подію на формі;
// -  використовуємо властивість target для запису поточного значення поля в локальне сховище.

// const form = document.querySelector(".feedback-form-2");
// const localStorageKey = "messageForm";

// form.addEventListener("input", event => {
//   localStorage.setItem(localStorageKey, event.target.value);   //    зберігаэмо введене повідомлення
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   form.reset();
// });


// ...........


// 2)  Під час сабміту форми будемо очищати збережене значення методом "removeItem" :

// const form = document.querySelector(".feedback-form");
// const localStorageKey = "messageForm";

// form.addEventListener("input", (event) => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);      //   очищаємо збережене значення в localStorage
//   form.reset();
// });


// ...........


// 2)  Останнім кроком необхідно додати код читання збереженого повідомлення з локального сховища і встановлення його початковим значенням для текстового поля під час завантаження сторінки :

// const form = document.querySelector(".feedback-form-2");
// const textarea = form.elements.message;        //  отримаємо збережене повідомлення з локального сховища. Властивість elements існує тільки для елемента <form>. form.elements повертає колекцію всіх полів форми: input, textarea, button, select тощо. Ця властивість недоступна для звичайних div, section або інших елементів.
// const localStorageKey = "messageForm";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";    //  вставляємо збережене повідомлення з локального сховища початковим значенням для текстового поля під час завантаження сторінки

// form.addEventListener("input", (event) => {
//   localStorage.setItem(localStorageKey, event.target.value);
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// 	console.log(event.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });



// .............................
// .............................


// ПОЯСНЕННЯ-13   Інструменти веброзробки.
//                Збірка проєкту з Vite :

// Vite — це інструмент збірки проєкту для розробки вебдодатків на базі JavaScript. Він був створений для того, щоб забезпечити швидку та ефективну розробку вебпроєктів, а також максимально використовувати можливості сучасних вебстандартів.

// Основні особливості Vite :

// -  Швидка розробка;
// -  Миттєве створення проєкту;
// -  Широкий спектр мов і технологій;
// -  Модульна система;
// -  Гаряча заміна модулів (HMR);
// -  Плагін-система.



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (00:25:50) :

// ПОЯСНЕННЯ-14   LocalStorage :


// const LS_KEY = "Array of names";
// const names1 = ["Alice", "Kate", "Emma"];
// // const names2 = ["Alice", "Kate", "Emma", "Dima"];

// // 1) ДОДАВАННЯ в  localStorage складних типів даних (СЕРІАЛІЗАЦІЯ) :

// // ВАРІАНТ-1 :
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// // ВАРІАНТ-2 :
// localStorage.setItem("Array of names", JSON.stringify(names));

// РЕЗУЛЬТАТ :
// Другий запис ПЕРЕЗАПИШЕ перший, тому що ключі ідентичні ("Array of names"). У локальному сховищі залишиться лише один запис з цим ключем. Значення буде однаковим в обох випадках (СЕРІАЛІЗОВАНИЙ МАСИВ).
// СЕРІАЛІЗОВАНИЙ МАСИВ — це масив, перетворений на рядок (string), щоб його можна було зберегти в localStorage.
// (дивись рядок 30, 82)

//........

// Як працює СЕРІАЛІЗАЦІЯ "JSON.stringify()" :

// const names = ["Alice", "Kate", "Emma"];

// // Серіалізація (масив → рядок)
// const serialized = JSON.stringify(names);
// console.log(serialized); // '["Alice","Kate","Emma"]'

// // Збереження :
// localStorage.setItem("names", serialized);

//........

// ДЕСЕРІАЛІЗАЦІЯ (зворотний процес):

// // Отримуємо рядок з localStorage
// const saved = localStorage.getItem("names"); // '["Alice","Kate","Emma"]'

// // Десеріалізація (рядок → масив)
// const parsedArray = JSON.parse(saved);
// console.log(parsedArray); // ["Alice", "Kate", "Emma"] - справжній масив!
// console.log(parsedArray[0]); // "Alice" - можна працювати як з масивом

//........


// 2) ОТРИМАННЯ даних з localStorage :
// // const LS_KEY = "Array of names";
// // const names = ["Alice", "Kate", "Emma"];

// // ВАРІАНТ-1 :
// const user1 = localStorage.getItem(LS_KEY);

// // ВАРІАНТ-2 :
// const user2 = localStorage.getItem("Array of names");

// console.log(user1);   //  отримали РЯДОК (якій має літерал масиву), а НЕ МАСИВ - ["Alice","Kate","Emma"]
// console.log(typeof user1);     //    string

// console.log(user2);

// // Для ОТРИМАННЯ масиву робимо ДЕСЕРІАЛІЗАЦІЮ  "JSON.parse()" (зворотний процес - перетворюємо рядок (string) на масив) :
// // (дивись рядок 156)

// const user3 = JSON.parse(user1);
// console.log(user3);                 //  (3) ['Alice', 'Kate', 'Emma']
// console.log(typeof user3);          //   object
// // або :
// console.log(Array.isArray(user3));   //   true


// //........


// // 3) ВИДАЛЕННЯ даних з localStorage "localStorage.removeItem()"  (Урок-частина 1   0:39:40) :
// // const LS_KEY = "Array of names";
// // const names = ["Alice", "Kate", "Emma"];

// // -  Для видалення запису ПІД ПЕВНИМ КЛЮЧЕМ з localStorage :
// localStorage.removeItem(LS_KEY);


// // - Для видалення ВСІХ записів з localStorage :

// localStorage.removeItem(LS_KEY);



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (00:41:50) :

// ПОЯСНЕННЯ-15   LocalStorage НЕ МОЖЕ зберігати ФУНКЦІЮ :

// function foo(a, d) {
//     return a + b;
// }

// localStorage.setItem("foo", foo);                   //    Key: foo    Value:  function foo(a, d) { return a + b; }

// const value = localStorage.getItem("foo");
// console.log(typeof value);                          //   string
// console.log(value(2, 3));                           //   буде ПОМИЛКА:  TypeError: value is not a function !!!



// localStorage.setItem("foo", JSON.stringify(foo));   //    Key: foo    Value:  undefined !!!

// const value2 = localStorage.getItem("foo");

// // спробуємо зробити ДЕСЕРІАЛІЗАЦІЮ  "JSON.parse()" :

// const foo = JSON.parse(value2);    //   Не можемо розпарсити, бо це звичайний рядок !!!
// console.log(typeof value2);

// ........

// (00:41:50)  створемо МЕТОД ОБ'ЄКТА :



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (00:47:35) :

// ПОЯСНЕННЯ-16   Задача :  Треба зробити так, щоб якщо користувач вводив щось в поле "textarea", а потім ПЕРЕЗАВАНТАЖИВ сторінку - ДАНІ ПОВИННІ ЗБЕРЕГТИСЬ.


// <form class="feedback-form-4">
//     <label>
//     <b>Name</b>
//     <input
//     type="text"
//     name="name"
//     placeholder="Enter your name"
//     value="Anonymous"
//     />
//     </label>
//     <label>
//     <b>Message</b>
//     <textarea name="message2" rows="6"></textarea>
//     </label>
//     <button type="submit">Submit</button>
// </form>

//  (дивись рядок 3409     modul-7 : ПОДІЯ НА ФОРМІ)
// ПОДІЯ НА ФОРМІ
// ├── event.target → це ФОРМА
// ├── event.target.elements → це всі поля форми (колекція)
// └── event.target.elements.name.value → значення конкретного інпута


// (дивись рядок 99    modul-7 : ДОСТУП до ЕЛЕМЕНТІВ в DOM) :
// 1. document.querySelector(".magic")                    //  через "." (крапку) -  доступ за селектором по класу
// 2. document.querySelector("#btn")                      //  через "#" (хештег) - доступ за селектором по id
// 3. document.querySelector("button")                    //  доступ за ім'ям тегу (використовується рідко, тому що подібних тегів м/б дуже багато)
// 4. document.querySelector('button[type="button"]')     //  доступ по "тегу + атрибуту"
// 5. document.querySelector('[type="button"]')           //  тільки по "атрибуту"

// ..........

// // ВАРІАНТ МІЙ :
// const messageTextarea = document.querySelector('textarea[name="message2"]')

// messageTextarea.value = localStorage.getItem("textUser");

// // ЗБЕРІГАЄМО дані для поля "textarea" :

// messageTextarea.addEventListener("input", handlerTextarea);

// function handlerTextarea(event) {
//   const textUser = event.target.value;
//   console.log(textUser);        //    коли хочете побачити HTML-структуру, клацнути на елементі та подивитись його на сторінці
//   console.dir(event.target);    //    коли хочете дослідити всі властивості та методи DOM-елемента (значення, атрибути, події, методи типу .focus(), .click())

//   localStorage.setItem("textUser", textUser);
// }


// ..........

// ВАРІАНТ ментор :

// const messageTextarea = document.querySelector('textarea[name="message2"]')

// populateTextArea();


// // ЗБЕРІГАЄМО дані для поля "textarea" :

// messageTextarea.addEventListener("input", handlerTextarea);

// function handlerTextarea(event) {
//   const textUser = event.target.value;

//   localStorage.setItem("textUser", textUser);
// }
// // localStorage.removeItem("textUser");

// //  - Отримуємо значення зі сховища
// //  - Якщо там щось було, оновлюємо DOM

// function populateTextArea() {
//     const messageLocal = localStorage.getItem("textUser");
//     console.log(messageLocal);    //  якщо нічого ще не було введено в "textarea" (тобто в localStorage не створювали ключ/значення) буде виведено "null"

//     if(messageLocal) {

// messageTextarea.value = messageLocal;     //   змінна "messageTextarea" і "event.target" - це те саме !
//     }
// }


// ..........

// ВАРІАНТ ментор :
// Було б добре при відправке форми ОЧИЩАТИ ПОЛЕ "textarea" :
// (00:58:40)


// const form4 = document.querySelector(".feedback-form-4");
// console.log(form4);

// const messageTextarea = document.querySelector('textarea[name="message2"]')

// populateTextArea();


// // ЗБЕРІГАЄМО дані для поля "textarea" :

// messageTextarea.addEventListener("input", handlerTextarea);

// function handlerTextarea(event) {
//   const textUser = event.target.value;

//   localStorage.setItem("textUser", textUser);
// }
// // localStorage.removeItem("textUser");

// //  - Отримуємо значення зі сховища
// //  - Якщо там щось було, оновлюємо DOM

// function populateTextArea() {
//     const messageLocal = localStorage.getItem("textUser");
//     console.log(messageLocal);    //  якщо нічого ще не було введено в "textarea" (тобто в localStorage не створювали ключ/значення) буде виведено "null"

//     if(messageLocal) {

// messageTextarea.value = messageLocal;     //   змінна "messageTextarea" і "event.target" - це те саме !
//     }
// }


// form4.addEventListener("submit", handlerForm);

// function handlerForm(event) {
// event.preventDefault();
// event.currentTarget.reset();     //   очищаємо поля форми при "submit"
// localStorage.removeItem("textUser");    //   очищаємо "localStorage"
// }



// .............................
// .............................


// УРОК-1 Mодуль-9. Модульність коду і bundler Vite (01:15:30) :

// ПОЯСНЕННЯ-17   Задача :  В нас є масив товарів в нашому магазині. На основі цих товарів відобразати розмітку. У кожного товару буде кнопочка, при натисканні на яку ми будемо додавати тоао у КОРЗИНУ. Якщо в корзині є товар, ми можемо перейти в корзину і бачити цей товар, або якщо не має жодного товару в корзині - маємо бачити, що корзина пуста.



const instruments = [
    {
    id: 1,
    img: "https://static.dnipro-m.ua/cache/products/7056/catalog",
    name: "Шуруповерт",
    price: 150,
    description: "Мережевий дриль-шуруповерт TD-30 — надійний по",
    },
    {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/1891/catalog",
    name: "Шліфмашина",
    price: 1299,
    description: "Кутова шліфувальна машина Dnipro-M GS-98 ⚙️ мод",
    },
    {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/5596/catalog",
    name: "Пила",
    price: 11049,
    description: "Мобільна акумуляторна ланцюгова пила DCS-200BC",
    },
  {
id: 5,
img: "https://static.dnipro-m.ua/cache/products/2023/catalog",
name: "Рівень",
price: 897,
description: "Рівень серії ProVision виробництва DNIPRO-M машин",
    },
  {
id: 6,
img: "https://static.dnipro-m.ua/cache/products/11482/catalog",
name: "Тример",
price: 3699,
description: "Тример електричний Dnipro-M 110 призначений для..."
    },
  {
id: 7,
img: "https://static.dnipro-m.ua/cache/products/6483/catalog",
name: "Мотокоса",
price: 11049,
description: "Мотокоса Dnipro-M 43 призначена для покосу трат",
   },
    {
id: 8,
img: "https://static.dnipro-m.ua/cache/products/4980/catalog",
name: "Генератор",
price: 10890,
description: "Бензиновий генератор GX-25 номінальною потужні",
}
];

const LS_KEY = 'basket';



const shopContainer = document.querySelector(".js-list-shop");

console.log(shopContainer);

shopContainer.insertAdjacentHTML("beforeend", createMarkup(instruments));

// 1)  Створему ф-ію, яка на основі нашого масиву об'єктів буде створювати розмітку :

function createMarkup(arr) {

    // item - це елемент масиву (об'єкт). Одже item можемо відразу ДЕСТРУКТУРУВАТИ :
    // arr.map(item => ...)
//     Хоча в колбек функції тільки ОДИН параметр і неявне повернення (без return і без фігурних дужок) - правило таке:
// Якщо ви використовуєте ДЕСТРУКТУРІЗАЦІЮ в параметрах, круглі дужки ОБОВ'ЯЗКОВІ, навіть якщо параметр один !!!

  return arr.map(({ id, img, name, price, description }) =>
   `<li class="product-card js-product" data-id="${id}">
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price} грн</p>
    <button class="product-add-btn js-btn-shop">Add to backet</button><hr>
    </li>`
    ).join("");
}

//............

// 2)  На КНОПКУ  "Add to backet" навішуємо функціонал КЛІКУ :

// const button = document.querySelector(".js-btn-shop");
// button.addEventListener("click", handlerButtonShop);
// function handlerButtonShop(event) {............}

// Щоб не вішати обробник подій на кожну кнопку, використаємо принцип ДЕЛЕГУВАННЯ (тобто подію КЛІК будемо вішати на контейнер "shopContainer", де відмамальовані всі картки) :

shopContainer.addEventListener("click", handlerButtonShop);
function handlerButtonShop(event) {
  // додаємо в корзину тільки тоді коли клікаємо на КНОПКУ (НЕ на назву, ціну, фото), тобто коли у елемента, на якому відбулася подія є класс "js-btn-shop" :

  // Коли клік був НЕ "!" на КНОПЦІ (використовуємо знак ЗАПЕРЕЧЕННЯ)  // (дивись modul-7.js / рядок 275). Метод "classList.contains()" очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента :
 if(!event.target.classList.contains("js-btn-shop")) {
// console.log("OK");
return  //  не цікаві випадки коли КЛІКУЄМО не на КНОПКУ
  }
  // Якщо КЛІК був на КНОПЦІ, треба дізнатись якому товару відповідає КНОПКА. Для цього спеціально в батьківському "li" ми помістили  "data-id" :
  // "<li class="product-card js-product" data-id="${id}">"
  // Треба витягнути з елемента на якому була натиснута кнопка "data-id" За допомогою метода "closest()", який повертає найближчий батьківський елемент з класом "js-product" :

const parent = event.target.closest(".js-product");
console.log(parent);        //   <li class="product-card js-product" data-id="4">  -  (або якісь іншій)
//     <h2 class="product-title">Пила</h2>
//     <p class="product-description">Мобільна акумуляторна ланцюгова пила DCS-200BC</p>
//     <p class="product-price">11049 грн</p>
//     <button class="product-add-btn js-btn-shop">Add to backet</button><hr>
//     </li>

// Метод "closest()" — це метод JavaScript, який шукає найближчого батьківського предка (або сам елемент), який відповідає вказаному CSS-селектору :
// 1) Починаємо з елемента, на якому стався event (event.target).
// 2) Перевіряємо, чи цей елемент має клас "js-product".
// 3) Якщо так → повертаємо його :
// console.log(parent);
// Виведе: <div class="js-product" data-id="123">...</div> (якщо знайдено)
// або: null (якщо не знайдено)

// 4) Якщо ні → піднімаємося вгору по дереву DOM (до батька, потім до дідуся і т.д.).
// 5) На першому ж елементі з класом "js-product" зупиняємося і повертаємо його.
// 6) Якщо такого елемента не знайдено аж до самого <html> → повертає null.

// Це дуже зручно при обробці подій з делегуванням, коли ви вішаєте обробник на контейнер, а клік може статися на будь-якому вкладеному елементі (наприклад, на кнопці "Купити", на зображенні товару, на назві тощо).
// Якщо користувач клікне по кнопці — "event.target" буде <button>, але closest(".js-product") знайде батьківський <div> і ви зможете отримати "data-id" товару.
// data-id (або будь-який інший data-* атрибут) потрібен, щоб ідентифікувати конкретний товар у вашому JavaScript-коді.

// Ось конкретні сценарії, де це стає в нагоді :
// 1. Додавання товару в кошик.
// 2. Відкриття модального вікна з деталями.
// 3. Видалення товару з кошика.
// 4. Лайк/дизлайк товару.

//............


// 3)  Для чого ми отримали елемент, тому що в нього є "data" атрибут і в ньому є унікальний "id" продукту - "data-id="${id}" :
// const parent = event.target.closest(".js-product");
// console.log(parent);     //    <li class="product-card js-product" data-id="${id}">

// Витягаємо "id" :

const productId = +parent.dataset.id;      //   Знайшли "id" продукту
console.log(productId);          //   "4"  (або якісь іншій)
console.log(typeof productId);   //  string

// // Але в нашому випадку "id" - це ЧИСЛО. А productId = parent.dataset.id - це РЯДОК !!!
// // Використовуємо або КОНКАТЕНАЦІЮ, або метод Number :
// // - КОНКАТЕНАЦІЯ - "+" унарний плюс :
//  const productId = +dataset.id;

// // - метод Number :
//  const productId = Number(parent.dataset.id);


//............

// 4)  Тепер треба знайти продукт в нашому списку з цим "id". Для цього треба перебрати масив "instruments" і знайти в ньому один елемент (використовуємо метод "find"):

const currentProduct = instruments.find(({ id }) => id === productId);     //   Знайшли   продукт, який користувач хоче додати в КОРЗИНУ
console.log(currentProduct);


//............


// (01:32:45)
// 5)  При нактисканні на КНОПКУ  "Add to backet" треба відправити товар в КОРЗИНУ. Будемо зберігати мої продукти в "localStorage".
// Треба отримати КОРЗИНУ :
// Ім'я ключа в нас вже збережено в змінну -  const LS_KEY = 'basket';

// const products = localStorage.getItem(LS_KEY);
// console.log(products);                            //  Якщо в "localStorage" не має ще нічого - отримуємо "null"

// Якщо є, то я отримую рядок і його треба буде розпасити, бо там може бути масив з моїми товарами :

// const products = JSON.parse(localStorage.getItem(LS_KEY));
// console.log(products);                            //  Якщо в "localStorage" не має ще нічого - отримуємо "null"

// У випадку якщо там "null" (в булевому виразі - це "false"), або порожній масив "[]" (в булевому виразі - це "true") - ми отримуємо значення правого операнда, тобто порожній масив "[]". Це потрібно тому, що ми зараз будем наповнювати цей масив товарами :


const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
console.log(products);                            //  Якщо в "localStorage" не має ще нічого - отримуємо "null"

// КОРЗИНА - це масив "products"


//............


// (01:36:40)
// 6)  Як дізнатися чи є товар в КОРЗИНІ (в масиві "products") чи не має. Якщо товар є в корзині треба знати де він там знаходиться
// Для цього використаємо метод findIndex() (якщо в масиві Є такий елемент, який задовільняє нашій умові - метод findIndex() поверне ІНДЕКС цього елемента в масиві. Якщо такого елемента в масиві НЕ МАЄ (тобто такого продукту ще не було додано в корзину) метод findIndex() поверне "-1").

// КОНСПЕКТ (дивись рядок 458 (ЗАДАЧА 10 - Метод find()) modul-5) - Метод find() дозволяє знайти і повернути перший відповідний ЕЛЕМЕНТ масиву, що задовольняє умову (тобто коли колбек повертає true), після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу. Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод find() повертає "undefined"

const index = products.findIndex(({id}) => id === productId);
console.log(index);

// Якщо елемент, який ми додаємо в корзину першій (тобто його там ще не має - "index = -1"), беремо об'єкт з продуктом "currentProduct" і додаємо до нього властивість (створюємо ще одну властивість, назва довільна: qty, quantity, data....), яка буде відповідати за уількість "qty" (оскільки це першій елемент в корзині - кількість буде "1") :
if(index === -1) {
currentProduct.qty = 1;
console.log(currentProduct);

// Тепер беремо товар "currentProduct" і кладемо в нашу КОРЗИНУ (в масив "products"). Щоб додати товар до корзини (масиву) використовуємо метод "push()" :

products.push(currentProduct);   // ВАРІАНТ-1 вперше додаємо продукт ДО КОРЗИНИ  - додається ОБ'ЄКТ продукта

} else {
  products[index].qty += 1;      // ВАРІАНТ-2 якщо продукт вже Є У КОРЗИНІ - збільшуємо кількість
}

// Якщо кількість певного товару буде перевищувати кількість товарів, які є в наявності, ТРЕБА заборонити додавання або вивести якесь повідомлення - "Товару більше не має!!!". Тобто ПЕРЕД "else {}" додати ще одну перевірку "else if{}"...


//............

// (01:47:15)
// 7)  Після того як ми додали в КОРЗИНУ новий продукт або додали поаторно той самий продукт (тобто змінили властивість квантиті "products[index].qty += 1") ТРЕБА оновити "localStorage" КОРЗИНУ (масив "products") :

localStorage.setItem(LS_KEY, JSON.stringify(products));    //  перетворюємо МАССИВ "products" у JSON

// (дивись Модуль 9. Модульність коду і bundler Vite) - Додавання складних даних :
// Технічно у вебсховище можна записати тільки рядки. Але це не проблема, якщо використовувати методи класу JSON для перетворення складних типів (масив або об'єкт). Якщо необхідно зберегти щось, окрім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().
// ПРИКЛАД для розуміння :

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

}


//.................................
//.................................



// Урок-2 Модуль 9. Модульність коду і bundler Vite (00:40:45) :

// ПОЯСНЕННЯ-18.   Інструменти веброзробки.


// Раніше ми працювали з JavaScript без Node.js і Vite (дивись рядок 596, 1220, 1286), і це було цілком нормально. Ось чому так відбувається:

// Як працював JavaScript раніше ?
// Без Node.js:

// !!!  JavaScript ВИКОНУВАВСЯ виключно в БРАУЗЕРІ. Ми просто створювали HTML-файл, підключали до нього JS-файл через <script src="...">. Відкривали HTML у браузері — і все працювало. Код писався у звичайному текстовому редакторі (Notepad, Sublime Text тощо)

// Приклад:

// html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Мій проєкт</title>
// </head>
// <body>
//     <script src="script.js"></script>
// </body>
// </html>

// //...........

// !!!   JavaScript тепер виконується у ДВОХ місцях :

// КЛІЄНТСЬКИЙ JavaScript - в БРАУЗЕРІ (як і раніше) — для роботи з DOM, подіями, анімаціями (те, що бачить користувач). Це КЛІЄНТСЬКИЙ JavaScript — код, який виконується на комп'ютері користувача. Коли користувач відкриває вашу сторінку в браузері (вкладці браузера) на пристрої користувача;

// СЕРВЕРНИЙ JavaScript - в СЕРЕДОВИЩІ Node.js (НОВЕ!)  — для збірки, обробки файлів, автоматизації, серверної логіки (те, що бачить розробник). Це СЕРВЕРНИЙ JavaScript — код, який виконується на комп'ютері (або на сервері) під час розробки. Коли запускаємо команди на кшталт "npm run dev" або "node script.js" у терміналі/командному рядку на комп'ютері.

// Це як два світи, які працюють разом: Node.js готує код, а браузер його показує!

// НАВІЩО ПОТРІБНІ тепер  Node.js і Vite?

// Сучасна веб-розробка значно ускладнилася, і ось чому:

// Проблеми старого підходу:
// Великі проєкти — важко підтримувати код у багатьох файлах.
// Немає модульності — все працює в глобальному просторі імен.
// Немає оптимізації — всі файли завантажуються цілком.
// Складність з залежностями — ручне підключення бібліотек.
// Немає збірки — код не мініфікується, не обробляється.

// Що дають сучасні інструменти:
// javascript
// // Можна імпортувати модулі
// import React from 'react';
// import { useState } from 'react';
// import './styles.css';

// // Писати сучасний JavaScript
// const App = () => {
//     const [count, setCount] = useState(0);
//     return <button onClick={() => setCount(count + 1)}>
//         Клікнуто {count} разів
//     </button>;
// };

// //...........

// Коли використовувати що?

// Для ПРОСТИХ проєктів (до 3-5 файлів):
// Можна обійтися без Node.js
// Достатньо браузера.

// Для СЕРЙОЗНИХ проєктів (SPA, великі додатки):
// Обов'язково потрібен Node.js.
// Потрібен інструмент збірки (Vite, Webpack, або інший)

// Тож Node.js і Vite — це не обов'язковість, а інструменти для професійної та зручної роботи над великими проєктами. Для навчання та маленьких проєктів ви цілком можете працювати по-старому!


//.................................


// Ініціалізація проєкту з Vite :

// Запускаємо створення проєкту Vite. Треба переконатись, що знаходимось всередині папки projects, вводимо в терміналі команду:

// 1) Правильний варіант. Створює новий проєкт з використанням готового шаблону (Vite) :

// // npm create vite@latest
// // npm create vite   //  Або скорочений варіант (без @latest):

// 2) Варіант-2 створює порожній package.json або ініціалізує новий пакет. Команда "npm init" використовується для створення нового npm-пакета (наприклад, коли ви хочете опублікувати свою бібліотеку) :

// npm init


// Іноді система запитає дозвіл встановити пакет create-vite@latest - введіть "y" і натисніть Enter.

//........

// - dependencies — це пакети, потрібні для роботи вашого додатку в продакшені (на сервері і у браузері користувача),
// - devDependencies — це пакети, потрібні тільки під час розробки (тести, збірка, лінтери, TypeScript).

// NPM завантажує з реєстру всі залежності, зазначені у файлі package.json у властивостях dependencies  і devDependencies, і поміщає їх у папку node_modules у корені проєкту, в якій перебуватимуть усі залежності.

// Тобто всі пакети встановлюються в папку "node_modules". А перелік встановлених пакетів у файлі package.json у властивостях dependencies  і devDependencies ?


// Ось як це працює в комплексі:

// Фізичне місце зберігання (диск) — node_modules:

// Сюди всі пакети (і з dependencies, і з devDependencies) завантажуються та розпаковуються. Вони лежать поряд один з одним в одній папці.

// Список встановлених пакетів (облік) — package.json:

// Це просто текстовий список (маніфест), де записано, які саме пакети і яких версій мають лежати в node_modules.

// Різниця між dependencies і devDependencies у цьому списку — це виключно логічне маркування (тег, ярлик), яке каже: "Цей пакет потрібен для продакшену, а цей — ні".

// Аналогія для кращого розуміння:
// Уявіть, що ваш проєкт — це склад (node_modules), а package.json — це накладна (опис вмісту).

// dependencies — це товари для продажу (наприклад, продукти на вітрині). Вони обов'язково мають бути на складі, коли магазин відкритий.

// devDependencies — це господарський інвентар (наприклад, швабра, драбина, пилосос). Вони теж лежать на тому ж складі (node_modules), але вони потрібні тільки персоналу для обслуговування магазину, а покупцям вони не потрібні.

// Коли ви виконуєте "npm install" (без прапорців), ви завозите весь склад — і продукти, і швабру.

// А що ж тоді змінюється?
// Різниця проявляється в момент деплою (вивантаження на сервер):

// Коли ви виконуєте "npm install --production", NPM дивиться у ваш package.json і каже:

// "Зі складу (node_modules) мені потрібно залишити тільки ті пакети, які позначені як dependencies (товари). А всі пакети з devDependencies (швабри, драбини) я викину і не ставитиму, щоб заощадити місце".



// (00:43:00)


// ПОЯСНЕННЯ-19   Скачиваємо прект Vite. Створюємо свій РЕПОЗИТОРІЙ. Зберігаємо проект в СВІЙ репозиторій.

// ----------------- СКАЧИВАЄМО  ПРОЕКТ -----------------

// 1) Треба СКЛОНУВАТИ з гітхабу проект Vite.

// Що таке проєкт «Vite»?
// Vite — це сучасний, дуже швидкий інструмент для збірки веб-застосунків. Його часто використовують для створення проєктів із такими фреймворками, як React, Vue або Svelte.

// Як це працює на практиці?
// Процес зазвичай виглядає так:

// Склонувати: Виконуєте команду "git clone" <посилання на репозиторій>, щоб завантажити файли проєкту з GitHub.

// 2) Встановити залежності: Переходите в папку проєкту (cd назва-проєкту) та виконуєте команду "npm install". Це встановлює всі необхідні бібліотеки, які потрібні для роботи Vite та вашого фреймворку, адже вони не зберігаються в репозиторії через файл ".gitignore".

// 3) Запустити: Запускаєте локальний сервер для розробки командою "npm run dev". Після цього ваш застосунок буде доступний у браузері, зазвичай за адресою http://localhost:5173.

// Простими словами: це стандартний спосіб почати роботу з будь-яким публічним проєктом на GitHub, зокрема з проєктами, створеними на Vite.

// 4) - якщо дати команду:   "git remote -v"   -  ми отримуємо інформацію: до якого акаунту прив'язаний наш проект, тобто якщо зробити якись зміни і запушити, то пуш буде НЕ в МІЙ репозиторій


// // ----------------- СТВОРЮЄМО свій РЕПОЗИТОРІЙ -----------------


// // ----------------- ЗБЕРІГАЄМО ПРОЕКТ у свій РЕПОЗИТОРІЙ -----------------

// - копіюємо посилання на репозиторій  Code / HTTPS - https://github.com/Dimalux/00-TEST-Dima-git.git

// - в терміналі вводимо команду :   "git remote set-url origin https://github.com/Dimalux/00-TEST-Dima-git.git"

// - якщо дати команду:   "git remote -v"   -  ми отримуємо інформацію, що проект терер прив'язаний до мого акаунту (до мого репозиторію) "Dimalux". І якщо тепер зробити якись зміни і запушити, то пуш буде завантажуватися в МІЙ репозиторій


// // ----------------- ОБОВ'ЯЗКОВО  перейти до файлу package.json у поле scripts, властивість "build"    (00:56:00)  -----------------


// "scripts": {
//   "dev": "vite",
//   build: "vite build --base=/vanilla-app-template/",
//   preview: "vite preview"
// },

// Переходимо до файлу package.json у поле scripts, властивість  "build". Замість назви "vanilla-app-template" (що знаходиться в кінці між двома слешами) написати назву створеного мною РЕПОЗИТОРІЯ, наприклад, "00-TEST-Dima" :

// "scripts": {
//   "dev": "vite",
//   build: "vite build --base=/00-TEST-Dima/",   //  ОБОВ'ЯЗКОВО зробити
//   preview: "vite preview"
// },


// // ----------------- ПУШИМО наш репозиторій    (00:56:00)  -----------------


// 1) git add .
// Додає всі зміни (нові, змінені, видалені) у поточній директорії та всіх піддиректоріях. Не додає зміни з батьківських директорій (вище за поточну). Працює локально — лише в межах поточної папки.

// або

// git add -A (або git add --all)
// Додає всі зміни (нові, змінені, видалені) у всьому репозиторії — незалежно від того, де ви зараз знаходитесь. Працює глобально — охоплює всі директорії проєкту, навіть ті, що вище за поточну.

//..........

// ПРИКЛАД для розуміння :
// Маємо структуру:

// my-project/
// ├── folder1/
// │   ├── file1.txt
// │   └── file2.txt
// ├── folder2/
// │   └── file3.txt
// └── README.md

// Ви перебуваєте в folder1/ і видалили file2.txt, змінили file3.txt (у folder2/) та додали новий README.md (у корені).

// Команда	Що додасть :
// git add . (з folder1/)	Додасть лише зміни в folder1/ (видалення file2.txt) та в підпапках folder1/. Не додасть зміни в folder2/ чи корені.
// git add -A (з будь-де)	Додасть всі зміни в усьому репозиторії: видалення file2.txt, зміни file3.txt і новий README.md.

// Коротке резюме
// Команда	Діапазон	Що додає
// git add .	Поточна директорія та нижче	Усе (нове, змінене, видалене)
// git add -A	Весь репозиторій	Усе (нове, змінене, видалене)

//..........


// 2) git commit -m "****"

// 3) ЗАМІСТЬ команди "git push" один раз вводимо :
// git push -u origin main

// Після цього перевіряємо наш репозиторій на github :
// - Як і МАЄ БУТИ папка "node_modules" не завантажилась в репозиторій на github, тому що під час ініціалізації проєкту Vite було створено файл ".gitignore", до якого додано правило, що виключає папку "node_modules" !!!
// - біля назви нашего репозиторію на github замість зеленої галочки стоїть "помаранчева крапка". Якщо сторінку перезавантажити, то  "помаранчева крапка" замінеться на "червоний хрестик". Це відбувається тому, що на github-і спробував зібратися наш проект (відпрацювати команда "build" в поле scripts файлу package.json) і git НЕ зміг цього зробити. Для цього треба зробити ще певні налаштування :

// 1) на github-і заходимо в Settings / Actions / General  і скролимо до самого низу :

// в меню "Workflow permissions" ставимо галочки в :

// [ ] Read and write permissions
// і
// [ ] Allow GitHub Actions to create and approve pull requests

// І зберігаємо - натискаємо кнопку "Save".

// 2) Повертаємось на головну сторінку репозиторію - "червоний хрестик" так і НЕ зник.

// 3) Клікаємо на "червоний хрестик" потім на "Details" і на горі натискаємо кнопку "Re-run jobs" і вибираємо "Re-run all jobs" і ще раз "Re-run jobs". Після цього git щось завантажує і видає результат - поруч з "зеленим кружечком" "build-and-deploy".

// 4) Повертаємось знову на головну сторінку репозиторію - "червоний хрестик" замінився на "зелену галочку", і ккрім того в нас в полі(кнопки) "Branches" з'явилися дві гілки - створилась додатково до гілки "main" гілка "gh-pages", в якій Vite мініфікував наші файли (прибирає з файлів пробіли, ентер переходи), щоб файлик займав якомога меньше місця і, як наслідок, якнайшвидше завантажувався.



// // ----------------- якщо перейти до файлу index.html    (01:05:14)  -----------------

// Якщо перейти до файлу "index.html" (доречі файл "index.html" опинився на верхньому рівні, а не в папці "src"), то побачимо, що з'явилися якісь незрозумілі тегі :
//  <load src="./partials/header.html" icon-path="img/sprite.svg#logo" />
//  <load src="./partials/footer.html" />

//  <load>  -  це тег, який з'являється, коли в проєкту Vite був встановлений пакет "jvite-plugin-html-inject": "^1.1.2"  :

//   "dependencies": {
//     "vite-plugin-full-reload": "^1.2.0",
//     "jvite-plugin-html-inject": "^1.1.2"
// }

//..............

// <body>

//      <load src="./partials/header.html" icon-path="img/sprite.svg#logo" />     //  забрав код "header" в інше місце

//      <main>
//      <h1>Lalala</h1>
//      </main>

//  <load src="./partials/footer.html" />     //  забрав код "footer" в інше місце

//      <script type="module" src="./main.js"></script>
//  </body>


// // ----------------- Запускаємо наш проект     (01:09:00)  -----------------
// npm run dev

// Для чого нам потрібен тег <load> ?   Якщо ми використовуємо шматки коду на одній сторінці (page.html), на другій (page-2.html), на третій (page-3.html).... header і footer, щоб не дублювати цей код (header і footer) на кожній сторінці - цей код зберігається в папці src/partials/(файли header.html і footer.html). В файлах header.html і footer.html зберігається шматок розмітки, а в тегу <load> буде посилання - шлях до цих файлів



// // ----------------- Для чого потрібні були всі ці маніпуляції     (01:06:30)  -----------------

// Щоб ми могли наш проект зробити доступним в інтернеті (опублікувати на github pages).

// Як це зробити - заходимо в Settings / Pages в заголовку Branch вибираємо гілочку "gh-pages", яка була створена github-ом. Натискаємо кнопку "Save". Почала працювати якась програма..... (01:12:12) Через деякий час оновимо сторінку і бачимо, що під заголовком "GitHub Pages" з'явилась якась URL-адреса :

// Your site is live at https://dimalux.github.io/00-TEST-Dima-git/

// Якщо клікнути на ній - відкриється наш сайт, який вже доступний в інтереті. Це посилання можно скинути кому завгодно і всі побачать цей сайт.


// --------------  Що нам дають всі ці налаштування  (01:13:00)  -----------------

// Якщо зараз зупинити проект, зробити зміни (наприклад, додати якісь заголовок), і після цього зберегти в терміналі зміни :

// git add -A
// git commit -m "M9-19-05"
// git push

//  Перейдемо на github і побачимо, що там знову почав збиратися наш проект - автоматично відбувається "build" ("помаранчева крапка" з часом змінюється на "зелену галочку"), автоматично додалися зміни в гілочку "gh-pages", яка існує для відображення нашего сайту в інтернеті.
//  Якщо знову перейти за посиланням "https://dimalux.github.io/00-TEST-Dima-git/" - ми побачимо, що нові зміни вже доступні, тобто автоматично відбувся Deploy (розгортання), тобто процес публікації коду на сервері, щоб він став доступним для користувачів в інтернеті. Простіше кажучи: переміщення готового проєкту з комп'ютера розробника на "бойовий" сервер, де його можуть використовувати реальні люди.

// ВИходить так, що після команди  "git push" змінюється спочатку гілка "main", а завдяки налаштуванням в нашому проекті git сам витягне данні (зміни), додасть їх в гілочку "gh-pages" і на основі гілки "gh-pages" наш github оновить сторінку в інтернеті.
// Після кожного пуша у гілку main GitHub-репозиторію, запускається спеціальний скрипт (GitHub Action) із файлу :
// .github/workflows/deploy.yml.
// Усі файли репозиторію копіюються на сервер, де проект ініціалізується та проходить лінтинг та збірку перед деплоєм.
// Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту відправляється у гілку gh-pages. В іншому випадку, у лозі виконання скрипта буде вказано в чому проблема.

//...............

// ІНФОРМАЦІЯ для РОЗУМІННЯ :

// 1) Ви робите git push у гілку main — це тригер для запуску GitHub Action.
// 2) GitHub Actions (це і є той "сервер" або віртуальна машина GitHub):
// - Бере дані з вашої гілки main.
// - Виконує всі необхідні кроки (встановлює залежності, робить лінтинг, збірку проекту).
// - В результаті створює готові до продакшну файли (звичайно це папка build, dist або public).

// 3) GitHub Actions автоматично пушить ці готові файли у гілку gh-pages (це налаштовано у вашому файлі .github/workflows/deploy.yml).
// 4) GitHub Pages: цей сервіс налаштований на показ вмісту саме з гілки gh-pages. Коли ця гілка оновлюється (отримує новий коміт від GitHub Action), GitHub Pages автоматично перезавантажує ваш сайт, і він стає доступним в інтернеті за вашою адресою (наприклад, ваш_логін.github.io/назва_репозиторію).

// Тобто, ключові висновки:
// - GitHub Actions (сервер) має пряме відношення до процесу, але тільки як інструмент для збірки, а не як хостинг.
// - Сам хостинг (публікація сторінки в інтернеті) відбувається виключно силами GitHub Pages, який бере готові файли з гілки gh-pages і показує їх у вашому браузері.

// Ланцюжок:
// git push main → GitHub Actions (збирає) → push у gh-pages → GitHub Pages (публікує сайт)

// Тобто в нас по суті є два "сервера" - GitHub Actions і GitHub Pages. Один підготовляє код для публікації, а другий по сигналу (новий коміт) публікує в інтернеті оновлену сторінку :

// 1. GitHub Actions — "сервер підготовки" (збірки)
// Завдання: автоматизувати процес перетворення вашого вихідного коду на готовий до публікації.
// Що робить:
// Завантажує ваш код із гілки main.
// Встановлює всі необхідні залежності (npm install, composer install тощо).
// Запускає перевірки (лінтинг, тести).
// Виконує збірку (наприклад, npm run build, яка створює папку dist або build із готовими HTML/CSS/JS файлами).
// Результат: пушить зібрані файли в гілку gh-pages.

// 2. GitHub Pages — "сервер публікації" (хостинг)
// Завдання: безпосередньо хостити ваш сайт і показувати його в інтернеті.
// Що робить:
// Постійно "стежить" за гілкою gh-pages (або іншою, яку ви налаштували в налаштуваннях репозиторію → Pages).
// Як тільки в цю гілку надходить новий коміт (від GitHub Actions), він автоматично перебудовує ваш сайт за новою адресою.
// Публікує його за URL-адресою: https://<ваш_логін>.github.io/<назва_репозиторію> (або кастомний домен, якщо налаштовано).

// Як вони взаємодіють:
// Ви робите git push у main.
// GitHub Actions бачить цей push (бо ви налаштували тригер on: push: branches: [ main ]) і запускає свій воркфлоу.
// Після успішної збірки він робить git push у гілку gh-pages.
// GitHub Pages бачить новий коміт у gh-pages і моментально оновлює ваш сайт.

// Спрощена АНАЛОГІЯ :
// GitHub Actions = кухар, який готує страву (збирає файли) на кухні.
// GitHub Pages = офіціант, який виносить готову страву в зал (публікує в інтернет).

// Вони працюють незалежно, але разом забезпечують повний цикл: від коду до публічного сайту.

//...............


// Для РОЗШИРЕННЯ КРУГОЗОРУ  (01:28:20) - інструмент "nvm" (можна встановити дві версії Node і завдяки "nvm" можно переключатись між ними)


// .............................
// .............................


// ПОЯСНЕННЯ-20      npm ПАКЕТИ  (01:30:20 / 01:31:20)

// ПРИКЛАД для РОЗУМІННЯ - встановимо пакет "nanoid" (для генерації випадкових ID) до нашого проекту.JSON  (можна також пакет "uuid")

// Це якісь пакети, якісь шматочки коди, які ми можем встановлювати собі в проект і в подальшому використовувати.  Вони зберігаються в реєстрі npm (npm registry) і встановлюються через менеджер пакетів npm.
// Якщо потрібен якісь пакет, наприклад "nanoid" (цей пакет існує для генерації випадкових ID), пишимо назву в рядку пошуку браузера :

// nanoid npm   -  і переходим на сторінку пакета. На сторінці написано команду для встановлення  "npm install nanoid" або "npm i nanoid".
// УВАГА за замовчуванням :  "npm install nanoid" — встановлює пакет у dependencies (основні залежності)


// ВСІ ВАРІАНТИ як залежність розробки (devDependencies)::

// 1) Для ВСТАНОВЛЕННЯ пакету "nanoid" як залежність в полі "devDependencies" (пакет буде встановлений локально, в папку node_modules, і запис буде доданий у поле devDependencies). Ця команда додасть пакет "nanoid" як залежність розробки :

// npm install nanoid --save-dev  /   npm i nanoid --save-dev

// або

// npm i -D nanoid    (МЕНТОР  01:33:00)

// Пакет з'явиться в node_modules.
// Запис додасться в package.json у поле devDependencies.
// Використовується для інструментів, які потрібні тільки під час розробки.

// //........

// Для ВИДАЛЕННЯ пакету "nanoid" буде команда :

// npm uninstall nanoid --save-dev

// або

// npm uninstall nanoid    /    npm uni nanoid    (МЕНТОР)

// //...........  запускаємо проект і подивимось на встановлений пакет "nanoid"  (01:34:05)  ........

// 1) запускаємо проект :
// npm run dev

// 2) Для того щоб використовувати пакет "nanoid" потрібно в фалі "*.js" (наприклад в фалі main.js) спочатку потрібно його імпортувати :

// import { nanoid } from 'nanoid'    -   імпорт м/б на самій горі файлу main.js
// console.log(nanoid());   //   в консолі при кожному перезавантаженні сторінки пакет "nanoid" буде генерувати випадкові ID-ки



// .............................
// .............................


// ПОЯСНЕННЯ-21    ДЕФОЛТНИЙ ЕКСПОРТ (default export).  ІМПОРТ функції "sum" для різних файлів page-2.js і main.js  (01:36:00)


// 1) В нас є сторінка page-2.html - підключимо до неї якісь фал "*.js". В папці "src / helpers" створимо файл page-2.js підклюемо його до файлу page-2.html :
// <script type="module" src="./helpers/page-2.js"></script>

// УВАГА!!! (01:42:40) :  до тега <script> доданий атрибут type="module". Якщо його видалити, ми НЕ ЗМОЖЕМО використовувати ІМПОРТИ!!!
// Директива type="module" паралельно запустить атрибут (поведінку) defer (англ. відкласти). Це означає, що наш скрипт-файл (src="./helpers/page-2.js") буде завантажений, але запуститься коли повністю побудується сторінка page-2.html
// Скрипт ЗАВАНТАЖУЄТЬСЯ паралельно з HTML, а виконується ТІЛЬКИ ПІСЛЯ повного завантаження HTML

// 2) Створимо функцію, яка буде рахувати суму дво чисел :

// function sum(a,b) {
//   return a + b;
// }


// 3) Тепер ми хочемо, щоб на сторінці page-2.html також була можливість рахувати цю суму. Для цього В папці "src / helpers" створимо ще один файл helpers.js і перенесемо в цій фал нашу функцію "sum". Ми можемо цю функцію "sum" ЕКСПОРТУВАТИ :

// export default sum;

// function sum(a,b) {
//   return a + b;
// }

// 4) Тепер треба цю функцію "sum" ІМПОРТУВАТИ  в файлах page-2.js і main.js :

// import sum from "./helpers/helpers"




// .............................
// .............................


// ПОЯСНЕННЯ-22    ІМЕНОВАНІ експорт та імпорт (named export).   (01:47:10)

// ДОПОВНИМО наш код у файлі  helpers.js :

// export default sum;

// function sum(a,b) {
//   return a + b;
// }

// function sayHello() {
//     console.log("hello")
// }

// const userName = "Alice";


// Ось так виглядає синтаксис для ІМЕНОВАНОГО ЕКСПОРТУ :

// export function sayHello() {
//     console.log("hello")
// }

// export const userName = "Alice";

// або :

// export { sayHello, userName }

//..........

// РЕЗУЛЬТАТ для  файла helpers.js :

// export default sum;
// export { sayHello, userName }

// function sum(a,b) {
//   return a + b;
// }

// function sayHello() {
//     console.log("hello")
// }

// const userName = "Alice";

//..........

// Ось так виглядає синтаксис для ІМЕНОВАНОГО ІМПОРТУ  в файлах page-2.js і main.js :


// import { sayHello, userName } from "./helpers"          //    для файла page-2.js

// import { sayHello, userName } from "./helpers/helpers"  //    для файла main.js



// .............................
// .............................


// ПОЯСНЕННЯ-23    ПЕРЕЙМЕНУВАННЯ Rename export (01:54:20)

// Rename export — це техніка, яка дозволяє імпортувати іменовані експортовані змінні, функції тощо з одного модуля до іншого, змінюючи їм ім'я під час імпорту.
// Щоб задати нове ім'я під час імпорту з іншого модуля, використовується ключове слово "as" :
// import { name as newName } from '...'

// Якщо в наших в файлах page-2.js і main.js вже є змінна з таким ІМ'ЯМ як в ІМЕНОВАНОМУ ІМПОРТУ

// ПРИКЛАД для розуміння - буде ПОМИЛКА (в нас два "userName") :

// import sum from "./helpers/helpers";
// import { userName, sayHello } from "./helpers/helpers";          //   змінна "userName" вже є в цьому файлі
// // import sum, { userName, sayHello } from "./helpers/helpers";

// console.log(sum(2, 5));

// const userName = "Petya"

// sayHello();
// console.log(userName);

//..........


// import sum from "./helpers/helpers";
// // import { userName, sayHello } from "./helpers/helpers";
// import sum, { userName as helperName, sayHello } from "./helpers/helpers";    //   ІМЕНОВАНУ зміну "userName" перейменовуємо на "helperName"

// console.log(sum(2, 5));

// const userName = "Petya"

// console.log(sayHello());
// console.log(userName);
// console.log(helperName);


// .............................
// .............................


// ПОЯСНЕННЯ-24    Імпорт ПРОСТОРУ ІМЕН (namespace import)  (01:59:10)

// Імпорт простору імен (namespace import) — це техніка імпортування всього вмісту модуля як об'єкта з іменем, що представляє простір імен цього модуля. Це означає, що всі ІМЕНОВАНІ ЕКСПОРТИ з модуля стають властивостями цього об'єкта. Це зручно, коли потрібно імпортувати багато різних функцій, змінних або класів з модуля, не обираючи їх по одному.
// Ми імпортуємо всі іменовані експорти з модуля (файла) "helpers.js" як об'єкт ***** (зазвичай об'єкт називають ім'ям файлу експортера "helpers.js", тобто "helpers"). Усі іменовані експорти стають властивостями цього об'єкта.



// Замість :
// import { userName, sayHello } from "./helpers/helpers";

// Пишемо :
// import * as helper from "./helpers/helpers";    //   об'єкт *****, або helper (як в даному випадку), або lalala...

// console.log(helper.userName);    // "Alice"
// console.log(helper.sayHello());  // "hello"

// ...........

// УВАГА :  Дефолтний експорт НЕ ВКЛЮЧАЄТЬСЯ в імпорт простору імен (import * as).
// Як отримати дефолтний експорт :

// Варіант 1: Через властивість default :

// import * as helpers from './helpers.js';
// console.log(helpers.default(2, 5)); // 7

// // ...........

// Варіант 2: Окремий імпорт дефолтного експорту

// javascript
// import sum, * as helpers from './helpers.js';

// console.log(sum(2, 5));        // 7
// console.log(helpers.sayHello()); // "hello"
// console.log(helpers.userName);   // "Alice"


// .............................
// .............................


// ПОЯСНЕННЯ-25   ПИТАННЯ з ТАБЛИЧКИ (02:05:00) :
//
//  СТВОРЮЄМО проект за допомогою Vite (bundler Vite) (02:05:00) :

// Інструменти веброзробки - Vite (дивись рядок 596, 1143, 1220, 1286) :


// Ініціалізація проєкту з Vite (дивись рядок 1220) :

// Запускаємо створення проєкту з використанням готового шаблону (Vite). Треба переконатись, що знаходимось всередині папки projects, вводимо в терміналі команду :

// // npm create vite@latest
// // npm create vite   //  Або скорочений варіант (без @latest):

// 1) Project name:
// .
// 2) Select a framework:
// Vanilla
// 3) Select a variant:
// JavaScript



// .............................
// .............................


// ПОЯСНЕННЯ-26   ПИТАННЯ з ТАБЛИЧКИ (02:11:15) :


// html
// <form>
//   <input type="text" name="username" placeholder="Ім'я">
//   <input type="email" name="email" placeholder="Email">
//   <input type="number" name="age" placeholder="Вік">
// </form>

// javascript
// const form = document.querySelector("form");

// const obj = {};

// form.addEventListener("input", (event) => {
// const key = event.target.name;
// const value = event.target.value;

// obj[key] = value;
// console.log(obj);
// })


// const key = event.target.name;   // бере атрибут name з елемента, який змінився
// const value = event.target.value; // бере значення цього елемента

// obj[key] = value;  // додає/оновлює властивість об'єкта (СИНТАКСИС КВАДРАТНИХ ДУЖОК (4. Mодуль 4. Об'єкти  /  Доступ до властивостей через квадратні дужки))
// console.log(obj);  // виводить об'єкт у консоль


// .........


// При введенні в полях, в консолі будуть з'являтися такі об'єкти:

// Користувач ввів "Іван" у поле username:
// { username: "Іван" }

// // Потім ввів "ivan@mail.com" у поле email:
// { username: "Іван", email: "ivan@mail.com" }

// // Потім ввів "25" у поле age:
// { username: "Іван", email: "ivan@mail.com", age: "25" }

// Ключові моменти :
// - Динамічне оновлення — об'єкт оновлюється при кожному натисканні клавіші;
// - Атрибут name використовується як ключ — тому важливо, щоб усі поля мали унікальні name;
// - Значення завжди рядок — навіть для числових полів (type="number") значення буде рядком;
// - Подія input — спрацьовує миттєво при кожній зміні (не чекає відправки форми).


// .............................
// .............................

//   МОДУЛЬ 10
// .............................

// ПОЯСНЕННЯ-01  Модуль 10. Асинхронний JavaScript і проміси.
//                          АСИНХРОННІСТЬ.


// В асинхронній моделі старт мережевого запиту викликає щось на зразок розгалуження, тобто запуск запиту і результат його обробки — це різні дії. Доки виконується запит, програма продовжує працювати й виконувати інший код. Щойно мережевий запит буде виконаний, програма може почати обробляти його результат одразу після звільнення. Це означає, що користувач відправив коментар і відразу зміг відкрити сайдбар зі свіжими новинами, не чекаючи, доки прийде відповідь від сервера.

// За одиницю часу, як і раніше, може виконуватися тільки одна операція, тому що JavaScript — однопотокова мова. Асинхронне програмування досягається шляхом відкладених викликів функцій, де ініціалізація асинхронної операції і обробка її результату — це різні дії.

// Код нижче — асинхронний. З функцією setTimeout() ми познайомимося далі. Зараз про неї нам потрібно знати тільки те, що вона приймає два параметри:

// callback-функцію, яка буде викликана після закінчення часу;
// час, після якого буде викликана функція.


// // Виконується першою
// console.log("First log");

// setTimeout(() => {
// 	// Виконується третьою, через 2000 мілісекунд (2 секунди)
//   console.log("Second log");
// }, 2000);

// // Виконується другою
// console.log("Third log");


// Функція setTimeout() відпрацьовує синхронно й реєструє відкладений виклик переданої callback-функції. Ця функція буде викликана асинхронно, через вказаний проміжок часу.


// .............................
// .............................


// ПОЯСНЕННЯ-02  Модуль 10. Асинхронний JavaScript і проміси.
//                          АСИНХРОННІСТЬ.
//                          Метод setTimeout() - ТАЙМ-АУТ.

// Метод setTimeout() дозволяє запланувати одноразовий виклик функції через певний час :

// const timerId = setTimeout(callback, delay, arg1, arg2, ...);

// callback — функція, виклик якої необхідно запланувати;
// delay — час у мілісекундах, через який callback-функція буде викликана один раз;
// arg1, arg2 тощо - додаткові аргументи не обов'язкові і будуть передані callback функції під час виклику.

// Результатом виклику setTimeout() буде ЦИФРОВИЙ ІНДЕНТИФІКАТОР створеного таймера, який потім може бути використаним для його подальшого скасування.

// ЦИФРОВИЙ ІНДЕНТИФІКАТОР - це просто число (позитивне ціле), яке браузер присвоює кожному створеному таймеру, щоб мати змогу його ідентифікувати та керувати ним. Кожен виклик setTimeout() повертає унікальне число, яке збільшується на 1. Браузер повертає число: 1, 2, 3, 4... і так далі (кожен новий таймер отримує наступне число).

//........

// ПРИКЛАД-1 для розуміння :

// <button type="button" class="btn">Click me</button>


// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {        //  setTimeout() реєструємо таймер.	Повертаємо ЦИФРОВИЙ ІНДЕНТИФІКАТОР (наприклад, 1)
//     console.log("I love async JS!");
//   }, 2000);

//   console.log(timerId);   //  ЦИФРОВИЙ ІНДЕНТИФІКАТОР - ВИВОДИТЬСЯ ОДРАЗУ!
// };

// button.addEventListener("click", onClick);

// //........

// // Спочатку в консоль буде виводитися ЦИФРОВИЙ ІНДЕНТИФІКАТОР :
// console.log(timerId);     //  1, 2, 3, 4... і так далі (кожен новий таймер отримує наступне число)


// // А потім, за 2000мс callback — результат роботи функції, виклик якої заплановано :
// const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

// // тобто буде виведено :
// console.log("I love async JS!")


//........

// ПРИКЛАД-2 для розуміння (КАХУТ) :

// Що буде виведено у консоль?

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// ПРАВИЛЬНА відповідь: у консоль буде виведено А, С, В


// ПОЯСНЕННЯ :

// console.log("A") — виконується синхронно, одразу виводить A.

// setTimeout(() => console.log("B"), 0) — хоча затримка 0 мс, цей колбек потрапляє в чергу макрозавдань (task queue) і виконується лише після того, як стек викликів звільниться.

// console.log("C") — виконується синхронно, виводить C.

// Після завершення синхронного коду рушій JavaScript бере наступне завдання з черги — виводить B. Це демонструє асинхронну природу setTimeout навіть із нульовою затримкою.


// .............................
// .............................


// ПОЯСНЕННЯ-03  Модуль 10. Асинхронний JavaScript і проміси.
//                          АСИНХРОННІСТЬ.
//                          Метод clearTimeout(id) - СКАСУВАННЯ ТАЙМ-АУТу.

// Якщо з якихось причин нам потрібно скасувати відкладений виклик функції, зареєстрованої тайм-аутом, використовується метод clearTimeout(id).

// Метод clearTimeout(id) приймає ідентифікатор таймера (наприклад "timerId") та "очищає його", тобто видаляє реєстрацію відкладеного виклику функції з черги :

// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// У прикладі вище ми викликали clearTimeout(), який виконається раніше, ніж буде викликана функція greet(). Отже, таймер з timerId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.


// .............................
// .............................


// ПОЯСНЕННЯ-04  Модуль 10. Асинхронний JavaScript і проміси.
//                          АСИНХРОННІСТЬ.
//                          Метод setInterval() - ІНТЕРВАЛ.

// Метод setInterval() — це простий спосіб повторення коду знову і знову з певним інтервалом.

// Синтаксис і параметри такі самі, як у setTimeout() :

// const intervalId = setInterval(callback, delay, arg1, arg2, ...);

// Результатом виклику setInterval() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.

// На відміну від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу.

// У браузерного таймера є мінімально можлива затримка, вона коливається приблизно від 0 до 4 мілісекунд. За стандартом, мінімальна затримка становить 4 мілісекунди, тому різниці між setInterval(cb, 1) і setInterval(cb, 4) немає.

// Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay. Адже через занадто велике завантаження процесора деякі запуски функцій-інтервалів будуть пропущені. Браузери продовжують виконувати тайм-аути та інтервали, навіть якщо вкладка браузера неактивна, але водночас знижується частота спрацьовування таймерів.


// .............................
// .............................


// ПОЯСНЕННЯ-05  Модуль 10. Асинхронний JavaScript і проміси.
//                          АСИНХРОННІСТЬ.
//                          Метод clearInterval(id) - СКАСУВАННЯ ІНТЕРВАЛу.

// Якщо з якихось причин нам потрібно скасувати виконання функції, зареєстрованої інтервалом, використовується метод clearInterval.

// clearInterval(id)

// Він приймає ідентифікатор інтервалу та очищає його, тобто видаляє виклики, зареєстровані переданим інтервалом з асинхронної черги.

// const greet = () => {
//   console.log("Hello!");
// };

// const intervalId = setInterval(greet, 3000);

// clearInterval(intervalId);

// У прикладі вище ми викликали clearInterval(), який виконається раніше, ніж буде викликана функція greet(). Отже, інтервал з intervalId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.


// .............................
// .............................


// ПОЯСНЕННЯ-06  Модуль 10. Асинхронний JavaScript і проміси.
//                          ДАТА і ЧАС.
//                          Створення дати.

// Вбудований клас "Date" безпосередньо спрощує більшу частину роботи з датами. Використовуючи можливості класу "Date", можна створювати годинник, лічильники, календарі та інші інтерактивні елементи інтерфейсу....

// Екземпляр класу "Date" — це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, що зберігає дату і час на момент його ініціалізації, тобто поточні дату і час (Тобто екземпляр класу "Date" ЗБЕРІГАЄ ДАТУ і ЧАС !!!):

// const date = new Date();   //   створюємо екземпляр класу "Date"

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// У рядковому перетворенні об'єкт повертає результат виклику вбудованого методу toString(), тому у першому лозі ми отримаємо рядок, а не об'єкт.


// .............................
// .............................


// ПОЯСНЕННЯ-07  Модуль 10. Асинхронний JavaScript і проміси.
//                          ДАТА і ЧАС.
//                          Встановлення дати.

// Створюючи екземпляр класу Date, можна налаштувати різні формати відображення даних :

// 1)  Нижче приклад, де до класу Date передають рядок, який описує тільки дату :

// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"


// 2)  Тут до Date передали рядок, де дата і час розділяються великою літерою T (time) :

// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"


// 3)  Можна передати тільки рік, рік і місяць, або повну дату, включно з числом і часом :

// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"


// 4)  Інший спосіб створення нової дати — це передати сім чисел, які описують рік, місяць (починається з 0), день, години, хвилини, секунди й мілісекунди. Обов'язкові тільки перші три :

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "


// .............................
// .............................


// ПОЯСНЕННЯ-08  Модуль 10. Асинхронний JavaScript і проміси.
//                          ДАТА і ЧАС.
//                          Встановлення дати.  UNIX час:


// Для комп'ютерів відлік часу рахується в мілісекундах, що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time). Це — Unix час.

// Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула з 01.01.1970.


// ПРИКЛАДИ для розуміння :

// Приклад-1 :
console.log(new Date(0));  // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// "new Date(0)"  -  це Unix час (0), тобто це 0 мілісекунд з 1 січня 1970 00:00:00 UTC.
// 00:00:00 UTC	-  Базовий Unix час (1 січня 1970). Відображення залежить від поясу.
// +03:00 — це МІЙ ЧАСОВИЙ ПОЯС (Eastern European Time - Східноєвропейський літній час).
// Тому я бачу 03:00:00, а не 00:00:00 (Львів -	Europe/Kyiv	(Часовий пояс) - UTC+3 (Літо)  - 	UTC+2 (Зима)).

// Приклад-2 :
console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// 15000 мілісекунд = 15 секунд;
// 03:хх:хх  -  мій часовий пояс — UTC+3 (літній час в Україні).



// .............................
// .............................


// ПОЯСНЕННЯ-09  Модуль 10. Асинхронний JavaScript і проміси.
//                          ДАТА і ЧАС.
//                          Метод "Date.now()" :


// Date — це конструктор (клас).
// Date.now() — це статичний метод, який викликається БЕЗ створення об'єкта (new Date()).


// 1) Ми вже розглядали приклад створення об'єкта часу. У нього є метод getTime, який дозволяє отримати числове представлення моменту часу в кількості мілісекунд :

// const date = new Date();
// console.log(date.getTime()); // 1624021654154


// 2) У разі, коли все, що потрібно, це числове представлення моменту часу, немає сенсу створювати цілий об'єкт. Можна використовувати метод Date.now() — це швидкий і зручний спосіб отримати поточний час у вигляді мілісекунд :

// const time = Date.now(); // 1693237207904



// // ОСНОВНА ІДЕЯ застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.
// // Якщо треба виміряти, скільки часу займає виконання деякого коду, можна зробити так:

// const startTime = Date.now();

// // код, виконується упродовж деякого часу :

// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// // ТОБТО нам потрібно :
// // Зберегти час до події.
// // Зберегти час після події.
// // Порахувати різницю між кінцевим і початковим часом.



// .............................
// .............................


// ПОЯСНЕННЯ-10  Модуль 10. Асинхронний JavaScript і проміси.
//                          ДАТА і ЧАС.
//                          Геттери і сеттери :

// Екземпляр класу Date має безліч методів для читання та запису значень дати і часу. Методи повертають або присвоюють рік, місяць, день місяця або тижня, годину, хвилину, секунду і мілісекунду для кожного екземпляра.

// Простіше кажучи:

// ГЕТТЕР (get) — питає: «Котра година?» → повертає значення.
// СЕТТЕР (set) — наказує: «Встанови години на 15!» → змінює об'єкт.

// ......

// ГЕТТЕРИ використовуються для читання всієї дати або окремої складової. Значення, що повертається, залежить від поточного часового поясу, встановленого на комп'ютері :

// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// // Повертає день місяця від 1 до 31
// console.log("Day: ", date.getDate()); // 16

// // Повертає день тижня від 0 до 6, починається з неділі
// console.log("Day of the week: ", date.getDay()); // 6

// // Повертає місяць від 0 до 11
// console.log("Month: ", date.getMonth()); // 2    (Метод getMonth() в JavaScript повертає номер місяця від 0 до 11, де: 0 — січень (January), 1 — лютий (February), 2 — березень (March), 3 — квітень (April), і так далі...)

// // Повертає рік з 4 цифр
// console.log("Full year: ", date.getFullYear()); // 2030

// // Повертає години
// console.log("Hours: ", date.getHours()); // 14

// // Повертає хвилини
// console.log("Minutes: ", date.getMinutes()); // 25

// // Повертає секунди
// console.log("Seconds: ", date.getSeconds()); // 0

// // Повертає мілісекунди
// console.log("Milliseconds: ", date.getMilliseconds()); // 0


// ......


// СЕТТЕРИ — це методи, які змінюють (встановлюють) окремі частини дати та часу в уже існуючому об'єкті Date.
// Тож сеттери — це інструмент для запису окремих компонентів дати й часу.

// Головні особливості сеттерів:
// 1) Починаються з префікса "set" :
// setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds()

// 2) Змінюють оригінальний об'єкт "date" (мутують його).
// 3) Можуть автоматично коригувати суміжні значення (наприклад, якщо встановити 32 травня — JavaScript перетворить це на 1 червня).


// ПРИКЛАД із поясненням :
// const date = new Date("March 16, 2030 14:25:00");
// console.log(date); // Sat Mar 16 2030 14:25:00

// // Сеттер змінює хвилини
// date.setMinutes(50);
// console.log(date); // Sat Mar 16 2030 14:50:00

// // Сеттер змінює рік
// date.setFullYear(2040);
// console.log(date); // Fri Mar 16 2040 14:50:00

// // Сеттер змінює місяць (4 = травень, бо місяці з 0)
// date.setMonth(4);
// console.log(date); // Wed May 16 2040 14:50:00


// .............................
// .............................


// ПОЯСНЕННЯ-11  Модуль 10. Асинхронний JavaScript і проміси.
//                          ПРОМІСИ.


// Promise (проміс, від англ. promise — обіцяти) — об'єкт, що представляє поточний стан асинхронної операції.

// Promise - це обгортка для значення, невідомого на момент створення промісу. Проміс дозволяє обробляти результати асинхронних операцій таким чином, якби вони були синхронними: замість кінцевого результату асинхронної операції, повертається своєрідна обіцянка отримати результат у майбутньому.

// .........

// ПОЯСНЕННЯ (МОЯ аналогія з ПОШТОВИМ ящиком) :

// Поштове відділення - Проміс.
// Поштальони - .then() і .catch() (розносять листи).
// Завідуючий/прибиральник - .finally().

// Поштовий ящик - це проміс (Promise - контейнер, який може зберігати тільки один лист (один результат: успіх або помилка));
// Поштові скриньки - це resolve і reject (функції, куди Promise кладе результ);
// Сповіщення, що пошта отримана  - це resolve("1") і reject("2") (виклик функцій - момент, коли проміс переходить у стан fulfilled або rejected (змінює свій стан раз і назавжди));
// Листи (пошта) в поштових скриньках -  "1" і "2" (значення або помилка - дані, які отримує споживач);
// Поштальони — це .then() і .catch() (забирають пошту). Асинхронність - якщо листа ще немає (операція триває), поштальони (.then/.catch) чекатимуть біля ящика, поки лист не з'явиться. Якщо лист уже є — вони доставлять його миттєво.


// Метод finally() не має ніякого відношення до пошти. Це службовець (завідуючий) який слідкує за роботою поштового відділення, слідкує за процесами, чекає своєї черги, шоб своїми певними діями (кодом) логічно завершити робочий день. Завідуючий спрацьовує, навіть якщо пошта прийшла з помилкою, або якщо вона затримується, але він дочекається її появи.

// finally() — це не поштальон, а завідуючий відділенням або прибиральник, який :
// 1. Чекає на завершення проміса (не на .then()/.catch()), чекає коли проміс перейде у стан fulfilled або rejected
// 2. Слідкує, щоб усі поштальони закінчили роботу
// 3. Чекає своєї черги
// 4. Вимикає світло, закриває двері, здає звіт
// 5. НЕ чіпає пошту (листи) - не отримує результат проміса
// 6. Спрацьовує завжди (просто завершує робочий день):
// - Якщо пошта прийшла успішно (resolve);
// - Якщо пошта з помилкою (reject);
// - Якщо пошта затримується — дочекається її появи;
// - Але якщо пошта НІКОЛИ не прийде (проміс завис у pending) — завідуючий буде чекати її ВІЧНО.


//..........


// Коли зовнішній код отримує проміс, він додає до нього ОБРОБНИКИ — це функції, які будуть викликані, коли проміс перейде у стан:

// fulfilled (успішно виконано) — тоді спрацьовує перший аргумент .then()

// rejected (помилка) — тоді спрацьовує другий аргумент .then() або окремий .catch()

// Конкретно — які бувають обробники:
// Метод	                             Що робить	                                Коли викликається
// .then(onFulfilled, onRejected)	     Додає обробники для успіху та помилки	    При fulfilled або rejected
// .catch(onRejected)	                 Додає обробник тільки для помилки	        При rejected
// .finally(onFinally)	               Додає обробник, який виконується завжди	  При будь-якому результаті (і fulfilled, і rejected)


// ПРИКЛАД :

// const promise = new Promise((resolve, reject) => {
//   // Асинхронний код
//   setTimeout(() => {
//     resolve("Успіх!"); // або reject("Помилка")
//   }, 1000);
// });

// // Зовнішній код додає обробники:

// ОБРОБНИК (функція) для fulfilled. Метод then приймає функцію-ОБРОБНИК ((result) => {console.log("Результат:", result);}) як аргумент :

// promise
//   .then((result) => {            // <-- обробник для fulfilled
//     console.log("Результат:", result);
//   })


// ОБРОБНИК (функція) для rejected. Метод catch приймає функцію-ОБРОБНИК ((error) => {console.log("Помилка:", error);}) як аргумент :

//   .catch((error) => {            // <-- обробник для rejected
//     console.log("Помилка:", error);
//   })
//   .finally(() => {               // <-- обробник, який виконується завжди
//     console.log("Завершено");
//   });

// Що таке "обробник" у цьому контексті?
// Обробник — ЦЕ ФУНКЦІЯ зворотного виклику (callback), яка :

// 1) приймає результат (для fulfilled) або помилку (для rejected);
// 2) виконується автоматично, коли проміс змінює свій стан.

// Тобто зовнішній код не чекає активно, а просто реєструє ці функції, і вони "прокидаються", коли асинхронна операція завершується.

// Коротко:
// "Зовнішній код додає до промісу ОБРОБНИКИ"
// = викликає методи .then(), .catch(), .finally() і передає в них функції, які будуть виконані пізніше, коли проміс завершиться.

//........

// ВАЖЛИВИЙ НЮАНС - у методі .then() може бути ДВА обробники одночасно:

// promise.then(
//   (result) => {   // перший обробник - для fulfilled
//     console.log("Успіх:", result);
//   },
//   (error) => {    // другий обробник - для rejected
//     console.log("Помилка:", error);
//   }
// );
// Але частіше використовують окремі .then() і .catch() — так читабельніше.


// //..........

// ПОЯСНЕННЯ  МОЄ :

// Тобто обробники - це функції-колбеки в середині методів then(), catch(), finally() :

// 1) для  then() :

// (result) => {
//     console.log("Результат:", result);
//   }

// 2) для  catch() :

// (error) => {
//     console.log("Помилка:", error);
//   }

// 3) для  finally() :

// () => {
//     console.log("Завершено");
//   }


//........................

// Що означає РЕЗОЛВ/иться  (від англ. resolve) :

// Коротко: "резолвиться" - "успішно завершується з результатом". А виклик resolve() — це спосіб цього досягти.


// Ключові моменти:

// Проміс резолвиться	  -  Він переходить у стан fulfilled (або rejected)
// Викликати resolve()	  -  Завершити проміс успішно зі значенням
// Значення резолвиться	-  Воно стає доступним через then

//........................

// ПОЯСНЕННЯ методу "then" :


// const p1 = new Promise(resolve => setTimeout(() => resolve(10), 1000));

// const p2 = p1.then(value => {
//   console.log(value); // 10 - виконається через 1 секунду
//   return value * 2;
// });

// Тотбто коли створили змінну "const p2 = p1.then" - код "p1.then" означає підписку на проміс p1. Створюється не просто новий проміс р2, а створюється проміс який , по-перше, чекає завершення промісу р1, а, по-друге, використовує результат роботи промісу р1 (значення ) для своєї колбек функціі, і , по-третє, передає результат роботи свого колбеку наступному  then (промісу р3).
// При чому, починаючи з р3, результат промісу р1 вже не достпний, доступні тільки похідні (наступних промісів) цього результату

// пункти:
// - "p1.then" — це підписка на проміс p1
// Так, метод then прив'язує новий проміс до вихідного.

// - Створюється проміс, який чекає завершення p1
// Саме тому p2 залишається в стані pending, поки p1 не виконається.

// - Використовує результат p1 для своєї колбек-функції
// Колбек отримує значення 10 тільки після того, як p1 його поверне.

// - Передає результат роботи свого колбека наступному then (p3)
// return value * 2 стає значенням, з яким резолвиться p2, і воно йде далі.

// - Починаючи з p3, результат p1 вже недоступний
// Це ключова властивість ланцюжка — кожен then трансформує значення, і оригінал "зникає".

// Кожен наступний "then" працює лише з результатом попереднього, а не з початковим значенням.


// "then" створює новий проміс, який:

// 1) Чекає на попередній,
// 2) Бере його результат,
// 3) Пропускає через колбек,
// 4) Передає трансформоване значення далі, забуваючи про оригінал.


// .............................
// .............................


// ПОЯСНЕННЯ-1  Модуль 10. Асинхронний JavaScript і проміси.
//                          ПРОМІСИФІКАЦІЯ.

// ПРОМІСИФІКАЦІЯ — це перетворення функції, яка працює з колбеками (callbacks), на функцію, що повертає Promise.

// Замість того, щоб передавати функцію для обробки результату, отримуємо об'єкт, який можна обробити через .then().


// Колбек-функція: знає, що робити з результатом (викликати onSuccess або onError).
// Колбеки: помилку треба обробляти окремо на кожному рівні вкладеності.
// Колбек — це просто разова передана функція.

// Промісифікована функція: просто повертає проміс, а зовнішній код сам вирішує, що робити далі.
// Проміси: один .catch() в кінці ловить усі помилки з усього ланцюжка.
// Проміс можна передати в іншу функцію, зберегти в змінній, об'єднати з іншими промісами через Promise.all() або Promise.race().

// КОРОТКО: промісифікація робить код читабельнішим, безпечнішим (єдина обробка помилок) і гнучкішим (легко комбінувати асинхронні операції). Це перехід від "скажи мені, що робити" до "я поверну результат, а ти вже сам вирішуй".



// .............................
// .............................


// УРОК-1 Mодуль-10.  Асинхронний JavaScript і проміси (00:30:55) :

// ПОЯСНЕННЯ-001
// - Стек викликів (Call Stack);
// - "зовнішній відділ" браузера або середовище хоста / Host Environment (Web API);
// - Черга завдань (Task Queue) та Черга мікрозавдань (Microtask Queue).


// ПОЯСНЕННЯ  (Host Environment - "зовнішній відділ" браузера) :
// «Хост» -  це хазяїн будинку (host) приймає гостя, дає йому кімнату, світло, воду та посуд, так і Середовище хоста приймає JavaScript-код і дає йому ресурси комп'ютера, мережу та екран для роботи.

// У JavaScript (особливо в браузерах) асинхронні операції не виконуються самим рушієм JS. Коли викликається асинхронна функція, така як "setTimeout", "fetch" або реєстрація обробника подій, рушій JS передає логіку виконання та колбек-функцію (функцію зворотного виклику) СЕРЕДОВИЩУ ХОСТА Web API (наприклад, браузеру) для обробки.

// Роль Web API :
// Це можна розуміти як "зовнішній відділ" браузера, який відповідає за виконання цих асинхронних завдань:

// 1) Виконання операції: Наприклад, браузер відповідає за відлік часу "setTimeout", за ініціювання мережевого запиту "fetch" та очікування відповіді, за прослуховування подій кліку мишею.

// 2) Очікування завершення: Поки Web API виконує ці операції, рушій JS не блокується і може продовжувати виконувати наступний синхронний код у стеку викликів.

// 2) Розміщення зворотного виклику в черзі: Коли асинхронна операція в Web API завершується (наприклад, минув час, прийшла відповідь на запит), Web API не викликає функцію зворотного виклику безпосередньо, а розміщує функцію зворотного виклику до відповідної черги (черги завдань або черги мікрозавдань) для очікування, поки цикл подій не перенесе його в стек викликів, коли той звільниться. Лише коли стек викликів очищується, цикл подій (Event Loop) витягує її звідти і поміщає назад у стек для виконання.

//  Функція зворотного виклику (callback function — це функція, яка передається як аргумент в іншу функцію і викликається (виконується) пізніше, коли настане певна подія або завершиться певна операція):
//  Callback = колбек = функція зворотного виклику.

// Таким чином колбек після виходу зі стеку викликів (Call Stack) "виконується" в Web API (наприклад, там відбувається відлік часу, там очікується мережевий запит), а після завершення виконання вона "потрапляє до черги завдань або черги мікрозавдань" для очікування.

// // ............

// ПОЯСНЕННЯ  (Web API) :

// - Web (веб) — всесвітня павутина, інтернет-простір.
// - API — абревіатура від "Application Programming Interface", що перекладається як - "Інтерфейс прикладного програмування".
// - Web API (вимовляється як "веб-апі") - це веб-інтерфейс прикладного програмування. Набір готових інструментів/команд, які браузер або сервер надають розробнику для роботи з інтернетом та пристроями.

// Слово «Інтерфейс» (API) означає «перехідник» або «місток».
// • Звичайний інтерфейс (UI) — це кнопки та меню на екрані, через які людина взаємодіє з програмою.
// • Програмний інтерфейс (API) — це готові команди та правила в коді, через які одна програма або мова взаємодіє з іншою програмою або середовищем.
// У випадку з Web API у браузері — це місток, який дозволяє вашому JavaScript-коду давати команди самому браузеру (наприклад, дізнатися геолокацію користувача, увімкнути камеру чи зробити запит до сервера).

// • JavaScript-рушій (наприклад, V8 у Chrome або SpiderMonkey у Firefox) розуμε лише базову мову: змінні, цикли, функції, типи даних, математику (Math, Array, Promise). Сам по собі він не знає, що таке кнопка на сторінці або інтернет-запит.
// • Середовище хоста (Браузер) додає до рушія глобальний об'єкт window та набір Web API, які дозволяють керувати сторінкою та браузером.

// Приклади того, що дає Web API у браузері :

// • Робота з DOM (сторінкою): document.querySelector(), element.addEventListener()
// • Мережа: fetch(), XMLHttpRequest
// • Час: setTimeout(), setInterval()
// • Зберігання даних: localStorage, sessionStorage, IndexedDB
// • Геолокація, медіа та пристрої: navigator.geolocation, navigator.mediaDevices

// ............

// Приклад 001 (00:44:10) :

// console.log("before");      //  синхронний код (потрапляє в Call Stack (стек викликів) і виконується негайно)

// setTimeout(() => {          //  асинхронний код. Сам виклик функції setTimeout є синхронним (він миттєво реєструє таймер), але колбек (функція всередині) — це асинхронний код. Браузер (Web API) починає відраховувати 100 мс у фоні, а коли час вийде, він помістить цей колбек у чергу завдань (Callback Queue / Task Queue).
//   console.log("time");
// }, 100);

// console.log("after");      //  синхронний код (потрапляє в Call Stack (стек викликів) і виконується негайно)

// for(let i = 0; i < 100000000; i++) {       //  синхронний код блокує потік - порожній цикл, який виконується 100 мільйонів разів. Займає стек викликів (Call Stack) і довго виконується, НЕ дає колбек функції, яка стоїть в черзі завдань, потрапити до Call Stack і відпрацювати "console.log("time")"
// }


// ............

// Приклад 001 (00:46:25) :
// Ми можемо не створювати функцію (наприклад стрілку "logger") в "setTimeout()", а створити окремо і передати в "setTimeout()" ПОСИЛАННЯ на функцію, як аргумент :

// (дивись конспект :
//   10. Модуль 10. Асинхронний JavaScript і проміси
//   Асинхронність / Тайм-аут
// )


// const logger = ((time, name)) => {
//   console.log(`Log after ${time}`, name);
// }

// setTimeout(logger, 1000, { time: "1s", name: "Alice"});
