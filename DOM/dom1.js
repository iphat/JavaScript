let a = document.querySelector("a");
// a.href = "https://www.google.com";
//OR
//1- setAttribute
a.setAttribute("href","https://www.google.com");

//
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1698571090063-0758fa13fa86?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

//2- getAttribute
console.log(a.getAttribute("href"));

//3- removeAttribute
// console.log(a.removeAttribute("href"));

//4- createElement
let span = document.createElement("span");
span.textContent = "my name is iphat";

//5- appendChild
document.querySelector("body").prepend(span)
// document.body.prepend(span);
// document.body.append(span);

// 4- removeChild
// div.remove();

//
let h1 = document.createElement("h1");
console.dir(h1);
h1.innerText = "later added text";
h1.style.color = "red";
h1.style.textTransform = "capitalize"
document.querySelector("div").prepend(h1);

//how to add css style from css file
// h1.classList.add("back");//back is a class in css & this code will add it
// h1.classList.remove("back");// & this code will remove it

//this code - if class is already added so remove it , if not added so add it
h1.classList.toggle("back");