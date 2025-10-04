// Cookies - To store small data in browser.
//in cookies we store - 4kb only
//localStorage sessionStorage - 5mb


document.cookie = "age = 26"

//
localStorage.setItem("friends",JSON.stringify(["iphat","jack","jam"]));
console.log(localStorage);
// let friend = localStorage.getItem("friends");
// console.log(friend);

let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);

