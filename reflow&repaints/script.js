// avoiding unnecessary reflows and repaints

const ul = document.querySelector("ul");
//in this code bulk of element are adding and this took lot of time for loading a element or cause lag
// for(let i=0; i<100; i++){
//     const li = document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li)
// }

//this is the better version 
let space = document.createDocumentFragment();//it will provide the space in the memory
for(let i=0; i<100; i++){
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li)
}
ul.appendChild(space);