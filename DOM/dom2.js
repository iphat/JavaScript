//que1- what is DOM? how does it represent the HTML structure?
//ans- It represents the page as a tree-like structure where every element (<p>, <button>) is a node that JavaScript can access and manipulate. 

//que2- WHat does getElementByClassName return ? Is it an array?
//ans- it is not array but an HTMLCollection
let h2 = document.getElementsByClassName("xyz");
console.log(h2);
console.log(h2[0].textContent);

//que3- Use querySelectorAll to select all buttons with class ".buy-now"
//ans-
// let btn = document.querySelectorAll(".buy-now");
// console.log(btn);

//que4- select the heading of a page by ID and change its text to "welcome to sheryians!"
//ans-
let h1 = document.querySelector("#abc");
h1.innerHTML = "<h1>welcome to homePage</h1>";
console.log(h1.innerText);

//que5- select all <li> elements & print their text using a loop.
let l = document.querySelectorAll("li");
// for(let list of l){
//     console.log(list.innerText);
// }

// l.forEach(function(list){
//     console.log(list.innerText);
// });

for(let i=0; i<l.length; i++){
    console.log(l[i].innerText);
}

//que6- what is the diff bw innerText, textContent, and innerHTML?
//ans-innerText- Returns only visible text, textContent- 	Returns all text, even hidden

//que7- How do you get the src of an image using js?
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1758566486732-c6bcc1d080e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8")


//que8- select a link and update its href to point to https://facebook.com
let a = document.querySelector("a");
a.setAttribute("href","https://facebook.com")

//que9- Add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title","hey");
console.log(div);

//que10- Remove the disable attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

//que11- what does createElement() do? what's returned?

let pre = document.createElement("pre");
console.log(pre.innerText = "keep learning")

document.querySelector("body").prepend(pre);

//que12- create a new list item <li>New task</li> and add it to the end of a <ul>
let li = document.createElement("li");
li.innerText = "five";

let ul = document.querySelector("ul").appendChild(li);
console.log(ul);

//que13- create a new image element with a placeholder source and add it at the top of a div.
