//Reading values from input,textarea,select

let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(det){
    det.preventDefault();
    console.log(nm)
//validation
    // if(nm.value.length <= 2){
    //     document.querySelector("#hide").style.display = "initial";
    // }
    // else{
    //     document.querySelector('#hide').style.display = "none";
    // }

//regex validation
    let nameRegex = /^[a-zA-Z]{3,}$/;
    let ans = nameRegex.test("iphat");
     console.log(ans);
});


//regex validation
