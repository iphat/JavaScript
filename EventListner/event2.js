//2.4-keyup
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(details){
    // console.log(details);
    // h1.innerText = details.key;
     if(details.key === ""){
        h1.textContent = "spc";
     }
     else{
        h1.textContent = details.key;
     }
});
//
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
   fileinp.click();
});
fileinp.addEventListener("change", function(det){
    // console.log(det.target.files[0].name);
    // btn.textContent = det.target.files[0].name;
    const file = det.target.files[0];
    // console.log(file);
    if(file ){
        btn.textContent = file.name;
    }
})

