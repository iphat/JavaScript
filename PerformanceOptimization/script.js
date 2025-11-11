// //performance optimization

// function debounce(fnc, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             fnc(...args);
//         },delay);
//     }
// }

// document.querySelector("input").addEventListener("input", debounce(function(){},1000));


//

let input  = document.querySelector("input");
//1- debouncing - "Wait until the user stops doing something, then run the code."
function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        },delay);
    }
}

//2- throttle - used to limit how often a function can run over time.
function throttle(fnc, delay){
    let timer = 0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    }
}

// input.addEventListener("input",debounce(function(det){
//     console.log(det);
// }, 1000));

input.addEventListener("input", throttle(function(det){
    console.log("running");
},1000));
