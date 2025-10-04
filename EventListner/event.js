//Event Listner

//addEvent Listner
let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "red";
});

let btn = document.querySelector("button");
let dblClick = function(){
    btn.style.backgroundColor = "blue"
}
btn.addEventListener("dblclick", dblClick )

//removeEvent Listner
btn.removeEventListener("dblclick", dblClick );

//2-common events
//2.1 click
let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.fontSize = "30px";
})

//2.2 input
let inp = document.querySelector("input");
inp.addEventListener("input", function(details){
    if(details.data !== null){
        console.log(details.data);
    }
})
//2.3 change
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(details){
    // console.log(details.target.value);
    device.textContent = `${details.target.value} is selected`;
})