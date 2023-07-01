/*
TASK №1
На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, сервер обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі. (змінено).
*/
// SOLUTION***************************************************************************************
// let btn = document.querySelector("#myButton");
// btn.addEventListener("click", async function () {
//   let response = await fetch("./script.json"); // A smulatied request to the server
//   let date = await response.json();
//   btn.innerHTML = date["Vote"];
// });
////SECOND VARIANT
// let btn = document.querySelector("#myButton");
// btn.addEventListener("click", async function () {
//   fetch("./script.json")
//     .then((response) => response.json())
//     .then((data) => {
//       btn.innerHTML = data["Vote"];
//     });
// });

/*
TASK №2
На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, завантажується файл books.json і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.
*/
//SOLUTION******************************************************************************************
// let btn = document.querySelector("#myButton");
// let authorList = document.querySelector(".booksList");
// btn.addEventListener("click", async function () {
//   let response = await fetch("./books.json");
//   let data = await response.json();
//   authorList.innerHTML = ""; // It is forbidden to reapeat the authors' names in subsequent clicks on the button
//   data.map((author) => {
//     authorList.innerHTML += `<li>${author.name}</li>`;
//   });
// });

/*
TASK №3
Використати сервіс 
https://randomuser.me/
Та при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію про користувача (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).
*/
//SOLUTION****************************************************************************************
// let user = document.querySelector(".user");
// async function getRandom() {
//   let response = await fetch("https://randomuser.me/api/");
//   let data = await response.json();
//   console.log(data.results);
//   let avatar = data.results[0].picture.large;
//   let name = data.results[0].name.first;
//   let age = data.results[0].dob.age;
//   let gender = data.results[0].gender;
//   let country = data.results[0].location.country;
//   let login = data.results[0].login.username;
//   let password = data.results[0].login.password;
//   let email = data.results[0].email;

//   user.innerHTML = `<li>Avatar: ${avatar},</li>
//   <li>Name: ${name},</li>
//   <li>Age: ${age},</li>
//   <li>Gender: ${gender},</li>
//   <li> Country: ${country},</li>
//   <li>Login: ${login},</li>
//   <li>Password: ${password},</li>
//   <li> Email: ${email}</li>`;

//   //SECOND VARIANT INSTAND OF A LOT OF VARIABLES AND user.innerHTML - DESTRUTORISATION
//   // data.results.map((el) => {
//   //   let userInfo = Object.values(el);
//   //   console.log(userInfo);
//   //   let [
//   //     f,
//   //     { first, last },
//   //     { city, country },
//   //     s,
//   //     ,
//   //     { age },
//   //     ,
//   //     ,
//   //     ,
//   //     ,
//   //     { large },
//   //   ] = userInfo;
//   //   console.log(f);
//   //   console.log(first, last);
//   //   console.log(city, country);
//   //   console.log(s);
//   //   console.log(age);
//   //   console.log(large);
//   // });
// }

// getRandom();
