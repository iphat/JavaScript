//localStorage - 
// 1- setItem - saves data in browser storage, if aready store it will update it
localStorage.setItem("name","iphat");
console.log(localStorage);

//2- getItem - fetch
let val = localStorage.getItem("name")
console.log(val);

//3- remove
 localStorage.removeItem("name");
console.log(localStorage);

//4- update
localStorage.setItem("name","jack");
console.log(localStorage);

//Session Storage -
//1-setItem
sessionStorage.setItem("name","jiya");
console.log(sessionStorage);
//2- remove
sessionStorage.clear();
console.log(sessionStorage);