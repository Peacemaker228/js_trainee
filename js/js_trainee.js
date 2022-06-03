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

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker1 = {};
  let attacker2 = {};

  if (firstAttacker === fighter1.name) {
    attacker1 = fighter1;
    attacker2 = fighter2;
  } else {
    attacker1 = fighter2;
    attacker2 = fighter1;
  }

  do {
    attacker2.health -= attacker1.damagePerAttack;
    console.log(attacker2.health);
    attacker1.health -= attacker2.damagePerAttack;
    console.log(attacker1.health);
  } while (attacker2.health > 0 && attacker1.health > 0);
  return attacker2.health > attacker1.health
    ? `${attacker2.name} wins`
    : `${attacker1.name} wins`;
}

console.log(
  declareWinner(
    new Fighter("Harald", 20, 5),
    new Fighter("Harry", 5, 4),
    "Harald"
  )
);
