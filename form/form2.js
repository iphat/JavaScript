let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(det){
    det.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  
    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;
     
    if(!emailAns){
        document.querySelector("#emailError").textContent = "email is incorrect";
        document.querySelector(".error").computedStyleMap.display = "initial";

    }
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "password is incorrect"
        document.querySelector(".error").computedStyleMap.display = "initial";

    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }
})