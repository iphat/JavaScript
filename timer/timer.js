// //setTimeout,, clearTimeout
// let tm = setTimeout(function(){
//     console.log("hi")
// },5000);

// clearTimeout(tm);

// //setInterval
// setInterval(function(){
//     console.log("hello....")
// },2000);

//
// let count = 10;
// let setInt = setInterval(function(){
//     if(count >= 0){
//     console.log(count);
//     count--;
//     }
//     else{
//         clearTimeout(setInt);
//         console.log("stop");
//     }
// },1000);

// Downloading % bar 
let count = 0;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");

let int = setInterval(function(val){
    if(count<=99){
        count++; 
        progress.style.width = `${count}%`;  
        percent.textContent = `${count}%`;

    }
    else{
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(int);
    }
},300 / 10)