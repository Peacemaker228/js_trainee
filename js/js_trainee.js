// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let y = 0;

// do{
//     console.log(y);
//     y++
// } while(y < 10);

// const num = 2;
// const str = "str"
// const bool = false;
// const noll = null;
// const und = undefined

// const obj1 = {
//     a: 2

// }

// const arr = [1, 2, 4];

// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(noll);
// console.log(und);
// console.log(obj1);
// console.log(arr);

// const age = 18;
// const male = true;
// const firstName = "Артем";

// if (age >= 18 && firstName=== "Артем" ) {
//   console.log(`Вам уже есть ${age} лет, и к тому же вы не ${firstName} проходите`);
// }
// else if (male==="Мужской") {
//   console.log("Салам, брачос");
// }
// else if (firstName ==="Артем") {
//     console.log(`Fuck U ${firstName}`);
// }
// else {
//     console.log("ok");
// }

// const a = 2;
// const b = 3;

// if (a==2 && b === 4) {
//     console.log("equel")
// }
// else {
//     console.log("not equal");
// }

//
//

// const enter = parseInt(prompt("Сколько пользователей вы хотите проверить?", 3));

// const usersArray = [
//   {
//     userEmail: "batchaev1999@mail.ru",
//     surname: "Batchaev",
//     username: "Alan",
//   },
//   {
//     userEmail: "alanchik99@gmail.com",
//     surname: "Batchaev",
//     username: "Alan",
//   },
//   {
//     userEmail: "petrov@mail.ru",
//     surname: "Petrov",
//     username: "Petr",
//   },
//   {
//     userEmail: "index@mail.ru",
//     surname: "Semenov",
//     username: "Semen",
//   },
//   {
//     userEmail: "gay@mail.ru",
//     surname: "Ivanov",
//     username: "Gayorgy",
//   },
//   {
//     userEmail: "killer101@mail.ru",
//     surname: "Ismail",
//     username: "Magomedov",
//   },
//   {
//     userEmail: "1",
//     surname: "1",
//     username: "1",
//   },
//   {
//     userEmail: "2",
//     surname: "2",
//     username: "2",
//   },
// ];

// //let sum = 0;
// let isUserExist
// let existUsers = [];
// let alertString = '';
// let sum = 0;

// for (let y = 0; y < enter; y++) {
//   alert(`Введите данные пользователя №${y+1} `);
//   const email = prompt("Введите свой email");
//   const userSurname = prompt("Введите свою фамилию");
//   const userName = prompt("Введите свое имя");
//   const user = {
//     userEmail: email,
//     surname: userSurname,
//     username: userName,
//   }
//   isUserExist = chekUserData(user, usersArray);
//   if (isUserExist) {
//     existUsers.push(user);
//     alertString+= "\n" + 'Почта: ' + user.userEmail + "\n";
//     alertString+="Фамилия: " + user.surname + "\n";
//     alertString+="Имя: " + user.username + "\n" ;
//     //sum += 1;
//   }
//   else {
//   alert(
//     "Ошибка, совпадения отсутствуют! Вам необходимо зарегистрироваться!"
//   );
// }
// }

// if (isUserExist) {
//   alert(
//     `Количество совпадений: ${existUsers.length} \nДанные пользователей: \n${alertString}`
//   );
// }

// function chekUserData(userData, arr) {
//   return arr.some(x=> x.userEmail === userData.userEmail &&
//     x.surname === userData.surname &&
//     x.username === userData.username)
// }

// console.log(alertString);

//
//

// function chekUserData(userData, arr) {
// let flag = false;
// // for (let y = 0; y <= enter; y++ ) {
// for (let i = 0; i < arr.length; i++) {
//   if (
//     arr[i].userEmail === userData.userEmail &&
//     arr[i].surname === userData.surname &&
//     arr[i].username === userData.username
//   ) {
//     sum += 1;
//     flag = true;
//   }
//}
// if (flag) {
//   alert(
//     `Привет, ${userData.username} ${userData.surname}, вот твой email: ${userData.userEmail}`
//   );
// } else {
//   alert("Ты кто такой, я тебя  не знаю, пашол ты");
// }
// }

// let a = 1;
// let b = 3;
// let c = -4;

// function discriminant(a, b, c) {
//   if (a === 0) {
//     return console.log("Ошибка значение а не может равняться нулю");
//   }

//   const dis = b * b - 4 * a * c;
//   console.log(dis);

//   const x = -b / (2 * a);
//   const x1 = (-b + Math.sqrt(dis)) / (2 * a);
//   const x2 = (-b - Math.sqrt(dis)) / (2 * a);

//   if (dis < 0) {
//     console.log("Дискриминант меньше нуля, корней нет");
//   } else if (dis === 0) {
//     console.log(`Дискриминант равен нулю, имеется один корень: x = ${x}`);
//   } else if (dis > 0) {
//     console.log(
//       `Дискриминант больше нуля, имеются два корня: x1 = ${x1}, x2 = ${x2}`
//     );
//   } else {
//     console.log("Ошибка! Введены некорректные данные!");
//   }
// }

// discriminant(1, -5, 9);

// function numbers(string) {
//   return string
//     .split(" ")
//     .sort((a, b) => b - a)
//     .join(" ");
// }
// console.log(numbers("5 6 7 1 10 15 98 101 -2 -100 -15 0 2"));

// function numbers(string) {
//   const arr = string
//     .split(" ")
//     .filter((el) => !isNaN(el))
//     .sort((a, b) => b - a);

//   return `${arr[0]} ${arr[arr.length - 1]}`;
// }

// console.log(numbers("5 hello 6 awew 7 1 10 15 98 101 -2 -100 -15 0 2"));

// const someStr = "28 1 hello 2 4 7 30 3 -1";

// function getMinMax(numbers) {
//   return `${Math.max.apply(
//     null,
//     numbers
//       .split(" ")
//       .filter(function (el) {
//         if (!isNaN(el)) {
//           return el;
//         }
//       })
//       .map((el) => Number(el))
//   )} ${Math.min.apply(
//     null,
//     numbers
//       .split(" ")
//       .filter(function (el) {
//         if (!isNaN(el)) {
//           return el;
//         }
//       })
//       .map((el) => Number(el))
//   )}
// `;
// }

// console.log(getMinMax(someStr));

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce();

//
//
//
//
//
//
//

// function sumOfDifferences(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
// }

// sumOfDifferences([-3, -1, -2]);

// // Sum Numbers
// function sum(numbers) {
//   "use strict";
//   return numbers.length > 0 ? numbers.reduce((x, y) => x + y) : 0;
// }

// function findNextSquare(sq) {
//   let b = Number.isInteger(Math.sqrt(sq)) ? (a + 1) ** 2 : -1;
//   console.log(a);
//   console.log(b);
// }

// console.log(findNextSquare(121));

// function sumOfDifferences(arr) {
//   const copy = [...arr];
//   const sortCopy = copy.sort((a, b) => -a + b);

//   console.log(sortCopy);
//   const arrCopy =
//     arr.length === 0 || arr.length === 1
//       ? 0
//       : sortCopy.reduce(
//           (prev, curr, currIndex) => arr[currIndex] - curr,
//           arr[0]
//         );

//   return arrCopy;
// }

// console.log(
//   sumOfDifferences([
//     -2, -13, -5, -2, -9, 11, -19, 21, -15, 11, 15, 4, -10, 12, 20, 7, 17,
//   ])
// );

// const countPositivesSumNegatives = (input) => {
//   let count = 0;
//   let sum = 0;

//   return input === null || input.length === 0
//     ? []
//     : input
//         .filter((el) => el !== 0)
//         .map((el) => {
//           if (el < 0) {
//             sum += el;
//           } else {
//             count++;
//           }
//         })
//         .map((el) => [count, sum])[0];
// };

// function getCount(str) {
//   return str.match(/[aeiou]/gi || []).length;
// }

// console.log(getCount("my pix"));

// function lovefunc(flower1, flower2) {
//   // return !(flower1 % 2 === 0 && flower2 % 2 === 0);
//   return (flower1 % 2 === 0) !== (flower2 % 2 === 0);
// }

// console.log(lovefunc(1, 4));

// function isNarcissistic(n) {
//   //   return n.toString.split("").map( el => Math.pow(el, 3))
//   let a =
//     n
//       .toString()
//       .split("")
//       .reduce((acc, el) => acc + Math.pow(el, 3), 0) === n;
//   console.log(a);

//   //   return true || false ;
// }

// function isNarcissistic(n) {
//   return (
//     n
//       .toString()
//       .split("")
//       .reduce(
//         (acc, el) => acc + Math.pow(el, n.toString().split("").length),
//         0
//       ) === n
//   );
// }

// console.log(isNarcissistic(1741725));

// let abc = 1556;
// console.log(String(abc).length);

// function disemvowel(str) {
//   return str.match(/[aeiou]/gi);
// }

// console.log(disemvowel("This website is for losers LOL!"));

// function solution(number) {
//   return number >= 0
//     ? [...Array(number).keys()]
//         .filter((el) => el % 3 === 0 || el % 5 === 0)
//         .reduce((acc, el) => acc + el, 0)
//     : 0;
// }

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         [...names.slice(2, names.length)].length
//       } others like this`;
//   }
//   const last = names.slice(-1);
//   const varity =
//     names.length > 1 && names.length <= 2
//       ? names.join(" and ")
//       : `${names.slice(0, names.length - 1).join(", ")} and ${last}`;
//   return `${names.length ? varity : "no one"} ${
//     names.length > 1 ? "like" : "likes"
//   } this`;
// }

// console.log(likes(["Jacob", "Alex", "Oleg", "Ivan"]));

// var countDeafRats = function (town) {
//   //  let a = town.indexOf("P");
//   let a = town.replace(/\s+/g, "").split("P");
//   console.log(a);
//   let left =
//     a[0].length !== 0 ? (a[0].length - a[0].match(/~O/gi).length * 2) / 2 : 0;
//   let right = a[1].length !== 0 ? a[1].match(/~O/gi).length : 0;
//   return right;
// };

// console.log(countDeafRats("~O~O~O~OP"));

// var countDeafRats = function (town) {
//   //  let a = town.indexOf("P");
//   let a = town
//     .replace(/\s+/g, "")
//     .split("P")
//     .splice(1)
//     .reverse()
//     .join("")
//     .split("")
//     .reverse();
//   console.log(a);
// };

// console.log(countDeafRats("~O~O~O~OP~O~OO~"));

// function Fighter(name, health, damagePerAttack) {
//   this.name = name;
//   this.health = health;
//   this.damagePerAttack = damagePerAttack;
//   this.toString = function () {
//     return this.name;
//   };
// }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   let attacker1 = {};
//   let attacker2 = {};

//   if (firstAttacker === fighter1.name) {
//     attacker1 = fighter1;
//     attacker2 = fighter2;
//   } else {
//     attacker1 = fighter2;
//     attacker2 = fighter1;
//   }

//   do {
//     attacker2.health -= attacker1.damagePerAttack;
//     console.log(attacker2.health);
//     attacker1.health -= attacker2.damagePerAttack;
//     console.log(attacker1.health);
//   } while (attacker2.health > 0 && attacker1.health > 0);
//   return attacker2.health > attacker1.health
//     ? `${attacker2.name} wins`
//     : `${attacker1.name} wins`;
// }

// console.log(
//   declareWinner(
//     new Fighter("Harald", 20, 5),
//     new Fighter("Harry", 5, 4),
//     "Harald"
//   )
// );

// let b = () => "sam";

// let a = () => b();
// const obj = {
//   a: {
//     b: {
//       c: {
//         d: "Привет!",
//       },
//     },
//   },
// };

// const optionalChaining = (object, array) => {
//   let key;
//   const inner = (currObj) => {
//     for (const el of array) {
//       key = currObj[el];
//       if (typeof key === "object") {
//         return inner(key);
//       } else if (key) {
//         return key;
//       }
//     }
//     // console.log(key);
//   };
//   return inner(object);
// };

// function optionalChaining(obj, chain) {
//   const inner = (currObj, currI) => {
//     const key = currObj[chain[currI]];
//     const newI = (currI += 1);
//     if (typeof key === "undefined") {
//       return undefined;
//     }
//     if (newI < chain.length) {
//       return inner(key, newI);
//     }
//     return key;
//   };
//   return inner(obj, 0);
// }

// console.log(optionalChaining(obj, ["a", "b", "c", "d"]));

// function partition(array, callback = (x) => !!x) {
//   const currArr = [[], []];
//   array.map((el) => (callback(el) ? currArr[0].push(el) : currArr[1].push(el)));
//   //   el ? currArr[0].push(el) : currArr[1].push(el);
//   return currArr;
// }

// console.log(partition([1, 2, "hello", {}, false, undefined]));

// function createObjectCalculator(first, second) {
//   return {
//     a: first,
//     b: second,
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     },
//     read(first, second) {
//       this.a = first;
//       this.b = second;
//     },
//   };
// }

// const calculator = createObjectCalculator(2, 3);
// console.log(calculator.mul());
// calculator.read(3, 4);
// console.log(calculator.mul());

// const data = [
//   {
//     name: "Denis",
//     age: 25,
//   },
//   {
//     name: "Ivan",
//   },
//   {
//     name: "Ann",
//     age: 18,
//   },
// ];

// const getField = (objArr, field) => {
//   return objArr ? objArr.map((el) => el[field]) : [];
// };

// console.log(getField(data, "age"));

// const data = [
//   {
//     firstName: "Emily",
//     lastName: "N.",
//     country: "Ireland",
//     continent: "Europe",
//     age: 30,
//     language: "Ruby",
//   },
//   {
//     firstName: "Nor",
//     lastName: "E.",
//     country: "Malaysia",
//     continent: "Asia",
//     age: 20,
//     language: "Clojure",
//   },
// ];

// const createUsernames = (objArr) => {
//   return objArr.map((el, { ...rest }) => {
//     return {
//       aywo: (
//         el.firstName +
//         el.lastName.slice(0, -1) +
//         (new Date().getFullYear() - el.age)
//       ).toLowerCase(),
//       ...rest,
//     };
//   });
// };

// const processData = createUsernames(data);
// console.log(processData);

// const data = [
//   {
//     type: "food",
//     price: 130,
//   },
//   {
//     type: "clothes",
//     price: 7300,
//   },
//   {
//     type: "other",
//     price: 1400,
//   },
// ];

// const calculatePrice = (data) => {
//   return !data.length || !data
//     ? []
//     : data.reduce((acc, curr) => {
//         return acc + curr.price;
//       }, 0);
//   // return arr;
// };

// const calculatePrice = (data) => {
//   return data && data.length
//     ? data.reduce((acc, curr) => (acc += curr.price), 0)
//     : 0;
//   // return arr;
// };

// console.log(calculatePrice(data));

// const dataMost = [
//   {
//     firstName: "Gabriel",
//     lastName: "X.",
//     country: "Monaco",
//     continent: "Europe",
//     age: 49,
//     language: "PHP",
//   },
//   {
//     firstName: "Odval",
//     lastName: "F.",
//     country: "Mongolia",
//     continent: "Asia",
//     age: 38,
//     language: "Python",
//   },
//   {
//     firstName: "Emilija",
//     lastName: "S.",
//     country: "Lithuania",
//     continent: "Europe",
//     age: 19,
//     language: "Python",
//   },
//   {
//     firstName: "Sou",
//     lastName: "B.",
//     country: "Japan",
//     continent: "Asia",
//     age: 49,
//     language: "PHP",
//   },
// ];

// const getMostSenior = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i].age >= arr[i + 1].age) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// const getMostSenior = (arr) => {
//   return arr.filter((obj) => obj.age === Math.max(...arr.map((el) => el.age)));
// };

// console.log(getMostSenior(dataMost));

// const example = {
//   a: 3,
//   b: 2,
//   c: 3,
//   d: 3,
// };

// function invert(obj) {
//   // const newObj = {};
//   // Object.keys(obj).map((el) => {
//   //   return (newObj[obj[el]] = el);
//   // });
//   // return newObj;
//   return Object.fromEntries(Object.entries(obj).map((el) => el.reverse()));
// }
// console.log(invert(example));

// const first = {
//   z: "hello",
//   a: {
//     b: {
//       d: "string",
//       c: 1,
//       e: {
//         num: 1,
//       },
//     },
//   },
// };

// const second = {
//   z: "hello",
//   a: {
//     b: {
//       e: {
//         num: 1,
//       },
//       d: "string",
//       c: 1,
//     },
//   },
// };

// console.log(Object.entries(first).forEach((el) => console.log(el)));

// const newFirst = Object.entries(first).map((el) => el.sort());
// const newSecond = Object.entries(second).sort();
// console.log(newFirst, "first");
// console.log(newSecond, "second");

// console.log(JSON.stringify(newFirst) === JSON.stringify(newSecond));

// const deepEqual = (obj1, obj2) => {
//   const inner = (innerObj) => {
//     const arrObj = Object.entries(innerObj).sort();
//     arrObj.map((el) => {
//       if (typeof el[1] === "object") {
//         el[1] = inner(el[1]);
//       }
//     });
//     return Object.fromEntries(arrObj);
//   };
//   inner(obj1);
//   inner(obj2);
//   return JSON.stringify(inner(obj1)) === JSON.stringify(inner(obj1));
// };

// console.log(deepEqual(first, second));

// const merge = (...rest) => {
//   // console.log(rest);
//   return Object.assign({}, ...rest);
// };

// console.log(
//   merge(
//     {
//       name: "John",
//       age: 22,
//     },
//     {
//       surname: "Klein",
//       age: 20,
//       profession: "student",
//     },
//     {
//       profession: "frontend developer",
//       country: "USA",
//     }
//   )
// );

// const numbers = [1, 2, 3, 4, 5];

// const sum = ([one, , three, ...rest]) => {
//   console.log(one, three, rest);
//   return a + b;
// };

// console.log(sum(numbers));

// const sum = (...rest) => {
//   return rest
//     .filter((el) => Number(el))
//     .reduce((acc, curr) => (acc += curr), 0);
// };

// console.log(sum(1, 2, 3, 4, 5, 6)); // 21
// console.log(sum(-10, 15, 100)); // 105
// console.log(sum()); // 0
// console.log(sum(1, "fqwfqwf", {}, [], 3, 4, 2, true, false));

// const data = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "C",
//     year: 2019,
//   },
//   {
//     firstName: "Anna",
//     lastName: "R.",
//     country: "Liechtenstein",
//     continent: "Europe",
//     age: 52,
//     language: "JavaScript",
//     year: 2019,
//   },
//   {
//     firstName: "Piter",
//     lastName: "G.",
//     country: "Sweden",
//     continent: "Europe",
//     age: 30,
//     language: "JavaScript",
//     year: 2019,
//   },
//   {
//     firstName: "Ramon",
//     lastName: "R.",
//     country: "Paraguay",
//     continent: "Americas",
//     age: 29,
//     language: "Ruby",
//     year: 2014,
//   },
//   {
//     firstName: "George",
//     lastName: "B.",
//     country: "England",
//     continent: "Europe",
//     age: 81,
//     language: "C",
//     year: 2016,
//   },
// ];

// // let indexLang = 1;

// const getLanguagesStatistic = (dataArr) => {
//   const obj = {};
//   const test = dataArr.filter((el) => el.year === 2019);
//   test.map((el) => {
//     const { language } = el;
//     const inner = test.filter((el) => el.language === language);
//     Object.assign(obj, { [language]: inner.length });
//   });
//   return obj;
// };

// const result = getLanguagesStatistic(data);

// console.log(result);
// const superObj = {
//   obj: {
//     value: "OBJb",
//   },
// };

// const {
//   obj: { value: currVal },
//   obj,
// } = superObj;

// console.log(superObj);
// console.log(currVal);
// console.log(obj);
// // const
// const newObj = Object.assign(superObj, (obj = currVal));
// console.log(newObj);

// const currMap = new Map();
// currMap.set(1, "hello");
// currMap.set(1, "we");
// currMap.set("1", false);

// console.log(currMap);

// function unique(arr) {
//   return new Set(arr);
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values)); // Hare,Krishna,:-O

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log(["wadw"].sort());

// function aclean(data) {
//   const newMap = new Map();
//   data.map((el) => {
//     const sortEl = el.toLowerCase().split("").sort().join("");
//     newMap.set(sortEl, el);
//   });
//   return [...newMap.values()];
// }

// // console.log(aclean(arr));

// let map = new Map();

// map.set("name", "John");
// map.set("surname", "Malcovich");

// let keys = [...map.keys()];

// console.log(keys);

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// console.log(keys);

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];

// const p0 = performance.now();

// const getArraysCounts = (dataArr) => {
//   const map = new Map();
//   dataArr.forEach((el) => {
//     if (map.has(el)) {
//       map.set(el, map.get(el) + 1);
//     } else {
//       map.set(el, 1);
//     }
//   });
//   return map;
// };

// const p1 = performance.now();
// console.log(p1 - p0, "ms");

// const getArraysCounts = (dataArr) => {
//   const map = new Map();
//   const unique = dataArr.filter((el, index) => {
//     return dataArr.indexOf(el) === index;
//   });
//   unique.forEach((elem) => {
//     const hello = dataArr.filter((el) => el === elem);
//     map.set(elem, hello.length);
//   });
//   return map;
// };

// const counts = getArraysCounts(data); // экземпляр Map

// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

// const unique = (data) => {
//   return [...new Set(data)];
// };

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: "John" };
// const data2 = [obj, obj, obj, { name: "John" }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

// const getDaysBetweenDates = (first, second) => {
//   if (second || second === null) {
//     const dateNew1 = new Date(first);
//     const dateNew2 = new Date(second);
//     const oneDay = 86400000;
//     const dateDiff = dateNew2.getTime() - dateNew1.getTime();
//     const resDays = Math.trunc(dateDiff / oneDay);
//     return resDays === -0 ? 0 : resDays;
//   } else {
//     throw new TypeError();
//   }
// };

// console.log(
//   getDaysBetweenDates(new Date(2012, 6, 2, 18, 0), new Date(2011, 6, 2, 6, 0))
// );
// console.log(getDaysBetweenDates(1409925600000, 1409796000000));
// console.log(getDaysBetweenDates("1-10-2020", 1409796000000));
//
// const obj = Object.create(null);

// const isEmpty = (dataObj) => {
//   return !Object.keys(dataObj).length;
// };

// console.log(isEmpty(obj));
// console.log(isEmpty({ prop: "value" }));

// const protoObj = Object.create(null);
// const obj = Object.create(protoObj);
// const superObj = {
//   a: "a",
// };
// console.log(obj);
// console.log({});

// const isEmptyWithProtos = (dataObj) => {
//   for (let value in dataObj) {
//     return !dataObj[value];
//   }
//   return true;
// };

// const str = [
//   [1, 2],
//   ['"a,b"', '"c, d"'],
// ];
// console.log(str.join("\n"));

// console.log(isEmptyWithProtos(obj));
// console.log(isEmptyWithProtos({}));
// console.log(isEmptyWithProtos(superObj));
// //
//
//
// const createObj = Object.create(
//   { proto: "prototype" },
//   {
//     name: { value: true },
//   }
// );
// console.log(createObj);
// //
// const newN = new Object({ count: 5 });
// newN.__proto__ = { prop: "value" };
// console.log(newN);
// console.log({ name: "hell" });

// function User(pName, pAge) {
//   this.name = pName;
//   this.age = pAge;
//   this.displayInfo = function () {
//     document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
//   };
// }

// User.prototype.hello = function () {
//   document.write(this.name + " говорит: 'Привет!'<br/>");
// };
// User.prototype.maxAge = 110;

// var tom = new User("Том", 26);
// tom.hello();
// var john = new User("Джон", 28);
// john.hello();
// console.log(tom); // 110
// console.log(john.maxAge); // 110

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     // [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return "hello";
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin); // John Smith (*)

// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper
// for (let a in admin) {
//   if (admin.hasOwnProperty(a)) console.log(a);
// }
// //
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal,
// };

// модифицирует rabbit.isSleeping
// rabbit.sleep();
// console.log(Object.keys(rabbit));
// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };

// console.log(rabbit);
// delete rabbit.jumps;
// console.log(rabbit);
// delete a.jumps;
// console.log(rabbit);
// let hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach = [];
//     // this.stomach = [food];
//     this.stomach.push(food);
//     this.apple = true;
//   },
// };

// let speedy = {
//   // stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   // stomach: [],
//   __proto__: hamster,
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// function Rabbit() {}
// // Rabbit.prototype = {
// //   eats: true,
// // };
// Rabbit.prototype = {
//   cum: "hell",
// };

// let rabbit = new Rabbit();
// console.log(rabbit); // ?

// Rabbit.prototype = {
//   cum: "qwe",
// };

// console.log(rabbit); // ?
// let obj = {};
// // alert(obj); // "[object Object]" ?
// console.log(obj); // "[object Object]" ?

// console.log(new Array(1, 2, 3));
// if (!Function.prototype.defer) {
//   Function.prototype.defer = function (time) {
//     setTimeout(this, time);
//   };
// }
// function f() {
//   console.log("hello");
// }

// f.defer(1000);
// if (!Function.prototype.defer) {
//   Function.prototype.defer = function (time) {
//     setTimeout(this, time);
//     function qwe(x, y) {
//       this.a = x;
//       this.b = y;
//     }
//     return qwe;
//   };
// }

// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// {
// prop.objectName:

// value: prop.objectName.value,
// writable: prop.objectName.writable ? prop.objectName.writable : false,
// enumerable: prop.objectName.enumerable ? prop.objectName.enumerable : false,
// configurable: prop.objectName.configurable
//   ? prop.objectName.configurable
//   : false,
// }
// console.log(Object.getPrototypeOf(newObj));
// console.log(newObj.getObjectName());
// console.log(prop.objectName);
// Object.create = function (proto, propertiesObject) {
//   if (
//     typeof proto === "undefined" ||
//     (typeof proto !== "object" && typeof proto !== "null")
//   ) {
//     throw new TypeError();
//   }
//   const newObj = {};
//   Object.setPrototypeOf(newObj, proto);
//   if (
//     propertiesObject &&
//     typeof propertiesObject !== "undefined" &&
//     typeof propertiesObject === "object"
//   ) {
//     Object.defineProperties(newObj, propertiesObject);
//   }
//   return newObj;
// };

// const A = {
//   objectName: "Object A",
//   getObjectName: function () {
//     return `This is ${this.objectName}!`;
//   },
// };

// Object.setPrototypeOf(A, {
//   hell: "no",
// });

// const B = Object.create(A, {
//   objectName: {
//     value: "Object B",
//   },
// });

// const nullObj = Object.create(null, {
//   objectName: {
//     value: "Object B",
//   },
// });

// console.log(
//   Object.create(A, {
//     objectName: {
//       value: "Object B",
//     },
//   })
// );
// console.log(A.getObjectName());
// console.log(B.getObjectName());
// console.log(A.hasOwnProperty("getObjectName"));
// console.log(A.hasOwnProperty("objectName"));
// console.log(B.hasOwnProperty("getObjectName"));
// console.log(B.hasOwnProperty("objectName")); // This is Object A! // This is Object B!
// console.log(B);
// console.log(nullObj);

// A.hasOwnProperty("getObjectName"); // true
// A.hasOwnProperty("objectName"); // true

// B.hasOwnProperty("getObjectName"); // false
// B.hasOwnProperty("objectName"); // true

// let worker = {
//   slow(min, max) {
//     console.log(`Called with ${min},${max}`);
//     return min + max;
//   },
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function () {
//     let key = hash(arguments); // (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments); // (**)

//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + "," + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log(worker.slow(3, 5)); // работает
// console.log("Again " + worker.slow(3, 5)); // аналогично (из кеша)

// function abs() {
//   return arguments;
// }

// console.log(abs(1, 2));
// function hash(...args) {
//   console.log(...args, "args");
//   console.log([].join.apply(args)); // 1,2
// }

// hash(1, 2);

// class Addition {
//   constructor(num) {
//     this.num = num;
//   }

//   add(...nums) {
//     const sum = (a, b) => a + b;
//     return this.num + nums.reduce(sum);
//   }
// }

// Addition.prototype.add = (function newFoo(foo) {
//   return function (...nums) {
//     console.log("called");
//     return foo.call(this, ...nums);
//   };
// })(Addition.prototype.add);

// const startedValue = new Addition(5);
// console.log(startedValue);
// const result = startedValue.add(3, 5, 6); // called
// console.log(result); // 19
// класс

// class Calc {
//   constructor(dataNum = 0) {
//     this.number = dataNum;
//   }
//   add(addNum) {
//     return new Calc(this.number + addNum);
//   }
//   sub(subNum) {
//     return new Calc(this.number - subNum);
//   }
//   result() {
//     return this.number;
//   }
// }

// const calc = new Calc();
// // calc.result(); // 0
// console.log(calc.add(5).result());
// // calc.add(5).result(); // 0 + 5 = 5

// // console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7
// console.log(calc.result());
// console.log(calc);
// const ten = calc.add(10);
// console.log(ten.result());
// console.log(ten.sub(5).result());
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

// function arraysToCsv(data) {
//   //   const symbolArr = ['"', ",", ";", "\n"];
//   const newData = data.map((arr) => {
//     return arr.map((el) => {
//       if (typeof el !== "string" && typeof el !== "number") {
//         throw new Error("Unexpected value");
//       }
//       if (
//         typeof el === "string" &&
//         /[",;\n]/g.test(el)
//         // symbolArr.filter((sym) => el.includes(sym)).length
//       ) {
//         // return `"${el.replace(/"/g, '""')}"`;
//         return '"' + el.replace(/"/g, '""') + '"';
//       }
//       return el;
//     });
//     // return newArr;
//   });
//   return newData.join("\n");
//   //   return newData.join("\n");

//   //   return `'${newData.join("\n")}'`;
// }
// const reg = /\\,/gi.test('"a,b"');
// console.log(reg);

// arraysToCsv([
//   [1, 2],
//   ["a", "b"],
// ]);
// console.log(
//   arraysToCsv([
//     [1, 2],
//     ['"text"', 'other "long" text'],
//   ])
// );

// localStorage.user = JSON.stringify({ name: "John_change" });
// localStorage.setItem("obj", JSON.stringify({ key: "value" }));
// console.log(localStorage.getItem("bannerClick"));
// немного позже
// let user = JSON.parse(localStorage.user);
// console.log(user.name);
// let JSONTest = '{ "hell": 3[0 }';

// localStorage.setItem("counters", JSON.stringify({ bannerClick: 5 }));
// localStorage.setItem("counters", JSONTest);
// const incrementCounter = (counterName) => {
//   try {
//     const parseCounters = JSON.parse(localStorage.counters);
//     if (!parseCounters[counterName]) {
//       parseCounters[counterName] = 1;
//     } else {
//       parseCounters[counterName] += 1;
//     }
//     localStorage.setItem("counters", JSON.stringify(parseCounters));
//     return parseCounters[counterName];
//   } catch (e) {
//     localStorage.setItem("counters", JSON.stringify({ [counterName]: 1 }));
//     return JSON.parse(localStorage.counters)[counterName];
//   }
// };

// console.log(incrementCounter("bannerClick"), "funcClick");
// console.log(incrementCounter("bannerClose"), "funcClose");
// incrementCounter("bannerClick"); // 6
// incrementCounter("bannerClose"); // 1
// incrementCounter("bannerSex"); // 1
// incrementCounter("bannerSex"); // 1

// console.clear();
// try {
//   let JSONTest = '{ "hell": 3[0}';
//   console.log(JSON.parse(JSONTest));
// } catch (e) {
//   console.log(e);
//   if (e instanceof SyntaxError) {
//     JSONTest = '{ "hell": 30 }';
//     console.log(JSON.parse(JSONTest));
//   }
// }

// localStorage.clear();
// console.log(Error);

// class ExecutionError extends Error {
//   constructor(elem, stack) {
//     super();
//     this.name = "ExecutionError";
//     this.elem = elem;
//     this.stack = stack;
//   }
//   getArgData() {
//     return this.elem;
//   }
// }

// const applyFn = (dataArr, callback) => {
//   const result = { succeeded: [], errors: [] };
//   dataArr.forEach((el) => {
//     try {
//       result.succeeded.push(callback(el));
//     } catch (e) {
//       console.log(e.trace);
//       console.trace();
//       result.errors.push(new ExecutionError(el, e.stack));
//     }
//   });
//   return result;
// };

// // const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],

// const dataArr = ['{"login":"login","password":"password"}', "{{}"];
// // console.log(JSON.parse(dataArr[1]));
// console.log(applyFn(dataArr, JSON.parse));
// // const callback = JSON.parse;
// // const { succeeded, errors } = applyFn(dataArr, callback);
// // //   succeeded: [{ login: 'login', password: "password" }],
// // //   errors: [ExecutionError],
// // errors[0].getArgData(); // '{{}'

// class AttemptsLimitExceeded extends Error {
//   constructor() {
//     super("Max attempts limit exceed");
//     this.name = "AttemptsLimitExceeded";
//   }
// }

// class NotFoundError extends Error {
//   constructor() {
//     super("Not found");
//     this.name = "NotFoundError";
//   }
// }

// class TemporaryError extends Error {
//   constructor() {
//     super("TemporaryError");
//     this.name = "TemporaryError";
//   }
// }

// const getRepeatableData = (getData, key, maxRequestsNumber) => {
//   for (let i = 0; maxRequestsNumber ? i < maxRequestsNumber : i > -1; i++) {
//     try {
//       return getData(key);
//     } catch (error) {
//       console.log(error);
//       if (error.name === "NotFoundError") {
//         throw new NotFoundError();
//       } else if (error.name === "TemporaryError") {
//         continue;
//       }
//     }
//   }
//   throw new AttemptsLimitExceeded();
// };

// const getData = (key) => "hello" + key;
// const res = getRepeatableData(getData, "1", 3); // 'hello1'
// console.log(res);

// let fileSizes = {
//   testFile1: 65,
//   testFile2: 48,
// };

// function getFileSize(filename, cb) {
//   setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
// }

// // console.log(getFileSize("testFile1", (x) => x));

// function sumFileSizes(filename1, filename2, cb) {
//   //Ваш код...
//   getFileSize(filename1, (x) => {
//     getFileSize(filename2, (y) => {
//       cb(x + y);
//     });
//   });
// }

// console.log(sumFileSizes("testFile1", "testFile2", (x) => x));

// const users = {
//   id4: { name: "sam" },
//   id2: {
//     name: "vlad",
//     age: 1337,
//   },
//   id3: { name: "nina", age: 228 },
// };

// const db = {
//   getUsersIds(cb) {
//     setTimeout(() => {
//       cb(Object.keys(users));
//     }, Math.random() * 500);
//   },
//   // getUsersIds(cb) {
//   //   return cb(Object.keys(users));
//   // },
//   getUserInfo(id, cb) {
//     setTimeout(() => {
//       cb(users[id]);
//     }, Math.random() * 500);
//   },
// };

// const { getUserInfo, getUsersIds } = db;

// getUsersIds((x) => console.log(x));

// console.log(getUsersIds((x) => x));
// getUserInfo("id3", (x) => console.log(x, "info"));

// function getUsersInfo(onLoad) {
//   const resArr = [];
//   const fooId = getUsersIds((x) => x);
//   for (let i = 0; i < fooId.length; i++) {
//     console.log(fooId[i]);
//     resArr[i] = getUserInfo(fooId[i], (x) => x);
//   }
//   return onLoad(resArr);
// }

// function getUsersInfo(onLoad) {
//   const resArr = [];
//   getUsersIds((x) => {
//     for (let i = 0; i < x.length; i++) {
//       getUserInfo(x[i], (y) => {
//         resArr[i] = y;
//         if (resArr.length === x.length && !resArr.includes(undefined)) {
//           onLoad(resArr);
//         }
//       });
//     }
//   });
// }

// getUsersInfo((users) => console.log(users, "res"));

// function increaseSalary() {
//   return (
//     api
//       .getEmployees()
//       .then((res) => {
//         return res.find(
//           (fil) => fil.salary === Math.min(...res.map((el) => el.salary))
//         );
//       })
//       .then((currEmp) => {
//         //   lala("sddw");
//         return api.setEmployeeSalary(currEmp.id, currEmp.salary * 1.2);
//       })
//       .then((empSalary) => {
//         return api.notifyEmployee(
//           empSalary.id,
//           `Hello, ${empSalary.name}! Congratulations, your new salary is ${empSalary.salary} `
//         );
//       })
//       // .then((e) => console.log(e))
//       .catch((err) => {
//         api.notifyAdmin(err);
//         return false;
//       })
//   );
// }

// const api = {
//   _employees: [
//     { id: 1, name: "Alex", salary: 120000 },
//     { id: 2, name: "Fred", salary: 110000 },
//     { id: 3, name: "Bob", salary: 80000 },
//   ],

//   getEmployees() {
//     return new Promise((resolve) => {
//       resolve(this._employees.slice());
//     });
//   },

//   setEmployeeSalary(employeeId, newSalary) {
//     return new Promise((resolve) => {
//       this._employees = this._employees.map((employee) =>
//         employee.id !== employeeId
//           ? employee
//           : {
//               ...employee,
//               salary: newSalary,
//             }
//       );
//       resolve(this._employees.find(({ id }) => id === employeeId));
//     });
//   },

//   notifyEmployee(employeeId, text) {
//     return new Promise((resolve) => {
//       resolve(true);
//     });
//   },

//   notifyAdmin(error) {
//     return new Promise((resolve) => {
//       resolve(true);
//     });
//   },

//   setEmployees(newEmployees) {
//     return new Promise((resolve) => {
//       this._employees = newEmployees;
//       resolve();
//     });
//   },
// };

// console.log(increaseSalary());
// //
//
// console.clear();

// const firstPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(300), Math.random() * 300)
// );

// const secondPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(200), Math.random() * 200)
// );

// const thirdPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(100), Math.random() * 100)
// );

// function promiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach((element) => {
//       element.then((prom) => resolve(prom)).catch((err) => reject(err));
//     });
//   });
// }

// console.log(promiseRace([firstPromise, secondPromise, thirdPromise]));
// //
// //
// console.clear();

// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const resArr = [];
//     if (!promises.length) resolve(resArr);
//     promises.forEach((el, index) => {
//       el.then((prom) => {
//         resArr[index] = prom;
//         if (resArr.length === promises.length && !resArr.includes(undefined)) {
//           resolve(resArr);
//         }
//       }).catch((err) => reject(err));
//     });
//   });
// }

// promiseAll([firstPromise, secondPromise, thirdPromise]).then((res) =>
//   console.log(res)
// );

async function increaseSalary() {
  let success = 0;
  try {
    const res = await api.getEmployees();
    const arithMean =
      res.reduce((acc, curr) => (acc += curr.salary), 0) / res.length;
    res.forEach(async (el) => {
      if (el.salary < arithMean) {
        const empSalary = await api.setEmployeeSalary(el.id, el.salary * 1.2);
        await api.notifyEmployee(
          empSalary.id,
          `Hello, ${empSalary.name}! Congratulations, your new salary is ${empSalary.salary} `
        );
        success += 1;
      } else if (el.salary > arithMean) {
        const empSalary = await api.setEmployeeSalary(el.id, el.salary * 1.1);
        await api.notifyEmployee(
          empSalary.id,
          `Hello, ${empSalary.name}! Congratulations, your new salary is ${empSalary.salary} `
        );
        success += 1;
      }
    });
    const newRes = await api.getEmployees();
    await api.sendBudgetToAccounting(
      newRes.reduce((acc, curr) => (acc += curr.salary), 0)
    );
    return success;
  } catch (err) {
    api.notifyAdmin(err);
    console.log(err);
    return false;
  }
}

const api = {
  _employees: [
    { id: 1, name: "Alex", salary: 120000 },
    { id: 2, name: "Fred", salary: 110000 },
    { id: 3, name: "Bob", salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      const updatedEmployees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
              ...employee,
              salary: newSalary,
            }
      );
      this._employees = updatedEmployees;
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },

  sendBudgetToAccounting(newBudget) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

// increaseSalary().then((e) => console.log(e));

console.clear();

async function promisesInSeries(asyncFns) {
  try {
    asyncFns.forEach(async (prom) => {
      return await prom();
    });
  } catch (e) {
    console.log(e);
  }
}

const firstPromise = () => {
  new Promise((resolve) => setTimeout(() => resolve(300), 3000));
};

const secondPromise = () => {
  new Promise((resolve) => setTimeout(() => resolve(200), 2000));
};
const thirdPromise = () => {
  new Promise((resolve) => setTimeout(() => resolve(100), 1000));
};

promisesInSeries([firstPromise, secondPromise, thirdPromise]).then((res) =>
  console.log(res)
);
