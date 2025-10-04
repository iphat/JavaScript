//2.6- mouseover, mouseout, mousemove
// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",function(){
//    abcd.style.backgroundColor = "yellow";
// });

// abcd.addEventListener("mouseout", function(){
//     abcd.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove", function(det){
//     // console.log(det);
//     // console.log(det.clientX,det.clientY);  
// // top & left works only when position is absolute 
//     abcd.style.top = det.clientY + "px";
//     abcd.style.left = det.clientX + "px";
// });

//3- Event Object - target, type , preventDefault

abcd.addEventListener("click", function(det){//here "det" is a Event obj
  console.log(det.target)//"target" where we click
  console.log(det.type);//here "type" is pointing to type of event, so here is  type "click"
});

let form = document.querySelector("form");
let inp = document.querySelector("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
});

//top, left,right,bottom, z index works only when position is given

//4- Event bubbling and capturing
