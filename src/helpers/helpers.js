// ПОЯСНЕННЯ-21    ДЕФОЛТНИЙ ЕКСПОРТ (default export).  ІМПОРТ функції "sum" для різних файлів page-2.js і main.js  (01:36:00)


// export default sum;  //  дефолтний експорт м/б тільки один !!!

// function sum(a,b) {
//   return a + b;
// }


// .............................
// .............................


// ПОЯСНЕННЯ-22    ІМЕНОВАНІ експорт та імпорт (named export).   (01:47:10)


export default sum;
export { sayHello, userName };

function sum(a,b) {
  return a + b;
}

function sayHello() {
    return "hello";
}

const userName = "Alice";