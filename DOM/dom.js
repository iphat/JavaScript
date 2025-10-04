let a = document.getElementById("abc");
a.style
console.log(a.tagName);
console.log(a.id);
// console.dir(a);
//classname
let b = document.getElementsByClassName("xyz");
console.log(b);
//query selector
let c = document.querySelector(".xyz");//by class name 
// let c = document.querySelector("h2");//by element name 
console.dir(c);
console.log(c.innerText);
// console.log(c.innerHTML);
c.innerText = "hello....$$$"
console.log(c.innerText);
console.log(c.outerText);
console.log(c.textContent);

let p = document.querySelector("p");
console.dir(p);
p.innerHTML = "<h1>listen carefully</h1>";
// p.hidden = true;
console.log(p.innerText)

//query selectorAll
let d = document.querySelectorAll("p");
console.dir(p);