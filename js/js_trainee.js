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

const enter = parseInt(prompt("Сколько пользователей вы хотите проверить?", 3));

const usersArray = [
  {
    userEmail: "batchaev1999@mail.ru",
    surname: "Batchaev",
    username: "Alan",
  },
  {
    userEmail: "alanchik99@gmail.com",
    surname: "Batchaev",
    username: "Alan",
  },
  {
    userEmail: "petrov@mail.ru",
    surname: "Petrov",
    username: "Petr",
  },
  {
    userEmail: "index@mail.ru",
    surname: "Semenov",
    username: "Semen",
  },
  {
    userEmail: "gay@mail.ru",
    surname: "Ivanov",
    username: "Gayorgy",
  },
  {
    userEmail: "killer101@mail.ru",
    surname: "Ismail",
    username: "Magomedov",
  },
  {
    userEmail: "1",
    surname: "1",
    username: "1",
  },
  {
    userEmail: "2",
    surname: "2",
    username: "2",
  },
];

//let sum = 0;
let isUserExist
let existUsers = [];
let alertString = '';
let sum = 0;


for (let y = 0; y < enter; y++) {
  alert(`Введите данные пользователя №${y+1} `);
  const email = prompt("Введите свой email");
  const userSurname = prompt("Введите свою фамилию");
  const userName = prompt("Введите свое имя");
  const user = {
    userEmail: email,
    surname: userSurname,
    username: userName,
  }
  isUserExist = chekUserData(user, usersArray);
  if (isUserExist) {
    existUsers.push(user);
    alertString+= "\n" + 'Почта: ' + user.userEmail + "\n";
    alertString+="Фамилия: " + user.surname + "\n";
    alertString+="Имя: " + user.username + "\n" ;
    //sum += 1;
  }
  else {
  alert(
    "Ошибка, совпадения отсутствуют! Вам необходимо зарегистрироваться!"
  );
}
}



if (isUserExist) {
  alert(
    `Количество совпадений: ${existUsers.length} \nДанные пользователей: \n${alertString}`
  );
}


function chekUserData(userData, arr) {
  return arr.some(x=> x.userEmail === userData.userEmail &&
    x.surname === userData.surname &&
    x.username === userData.username)
}

console.log(alertString);
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
