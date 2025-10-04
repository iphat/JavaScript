//continue dom2.js in dom22.js
//que13- create a new image element with a placeholder source and add it at the top of a div.
let img = document.createElement("img");
img.setAttribute("src","https://www.nchsoftware.com/photoeditor/images/foursteps_collage03.png");

document.querySelector("div").appendChild(img);

//que14- select the first item in a list and delete it from the DOM.
let li = document.querySelector("li");
let ul = document.querySelector("ul")

ul.removeChild(li);

//que15- how do you change the background color of an element?
ul.style.backgroundColor = "red"

//que16- what is the diff bw clssList.add() and classList.toggle()
img.classList.add("placeholder");
// img.classList.toggle("placeholder");


//que17- add a highlight class to every even item in a list
let l = document.querySelectorAll("ul li:nth-child(2n) ");//2n- means every 2nd element and  2- means only 2nd element
 l.forEach(function(el) {
    el.classList.add("highlight");
 })

//que18- toggle a clss active on a button when clicked
let btn = document.querySelector("button");
btn.classList.add("active");

//que19- set the font size of all <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach(function(el){
    el.style.fontSize = "20px"
})