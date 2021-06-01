//Start of guessing game
// let maximum = parseInt(prompt("enter a maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("enter a valid number"));
// }
// let randomnum = Math.floor(Math.random() * maximum);
// console.log(randomnum);

// let guess = prompt("enter your first guess");
// let atempt = 1;
// while (parseInt(guess) !== randomnum) {
//   atempt++;
//   if ((guess.toLowerCase()) == 'q') {
//     break;
//   }
//   if (guess > randomnum) {
//     guess = prompt("too high! enter a new guess");
//   }
//   else {
//     guess = prompt("too low! enter a new guess");
//   }
// }
// console.log(`you got it in ${atempt} atempt`);
//END of guessing game

// TO-DO list  creating application 
// const todolist = [];
// let value = "";
// let input = prompt("what would you like to do");
// while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
//   switch (input) {
//     case "new":
//       value = prompt("enter the task");
//       todolist.push(value);
//       for (let i = 0; i <= todolist.length - 1; i++) {
//         console.log(`${i}: ${todolist[i]}`);
//       }
//       console.log(`*********************`);
//       break;
//     case "list":
//       for (let i = 0; i <= todolist.length - 1; i++) {
//         console.log(`${i}: ${todolist[i]}`);
//       }
//       console.log(`*********************`);
//       break;
//     case "delete":
//       value = prompt("enter the index of the value to be deleted");
//       todolist.splice(value, 1);
//       for (let i = 0; i <= todolist.length - 1; i++) {
//         console.log(`${i}: ${todolist[i]}`);
//       }
//       console.log(`*********************`);
//       break;
//   }
//   input = prompt("what would you like to do");
// }

// console.log('ok u quit');
//file:///V:/web_devlopment_udemy_bootcamp/kirakiraWebsite/test.html
//END of TO-DO list  creating application 