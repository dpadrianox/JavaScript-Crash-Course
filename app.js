// fetch("https://jsonplaceholder.typicode.com/users"))
const emailRef = document.querySelector(".email");

// // 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1") //fetching data from the API(backend)
//   .then((response) => {                              //unlocks the promise
//     return response.json();                         //converts the response to JSON
//   })
//   .then((data) => {                                 //.then unlocks the promise response.json()
//     console.log(data);                              //logs the data to the console
//     emailRef.innerHTML = data.email;               //displays the email in the HTML
// });

// 2. Async/Await
await fetch("https://jsonplaceholder.typicode.com/users/1")