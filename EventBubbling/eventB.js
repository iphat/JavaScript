//1-Event Bubbling - Event bubbling is the process where an event triggered on a child element propagates upward through its parent and ancestor elements in the DOM.
//Starts at the target element & Moves upward to its parents (e.g., from <button> → <div id="nav"> → <div id="main"> → <body>)

// document.querySelector("#nav")
// .addEventListener("click", function(){
//     alert("clicked");
// })

//
let ul = document.querySelector("ul");
ul.addEventListener("click", function(det){
    // alert("clicked");
    // console.log(det.target);
    // det.target.style.textDecoration = "line-through";
   det.target.classList.toggle("lt");
});

//2-Event capturing

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");
//this is event bubbling
btn.addEventListener("click", function(){
    console.log("button clicked");
});

c.addEventListener("click", function(){
    console.log("c clicked");
});
b.addEventListener("click", function(){
    console.log("b clicked");
});
a.addEventListener("click", function(){
    console.log("a clicked");
},true);//here "true" on the capture phase so it will run 1st when button clicked
//opposite of event bubbling is event capturing

//when we click so there is any event raise at that time event is occuring in two phases
// phase1- from top to down of elements(event capturing phase) by default off
//phase2- from target element to parent element(event bubbling phase) by default on



//
let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(){
    let left = 20 - inp.value.length;
    span.textContent = left;

    if(left < 0){
        span.style.color = "red";
    }
    else{
        span.style.color = "white";    }

});