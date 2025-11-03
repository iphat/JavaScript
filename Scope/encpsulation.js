// Encapsulation - hiding internal details and exposing only what’s needed. It protects data and keeps your code clean and secure.

// In JavaScript, you can do it using:
    // Closures → Hide variables inside functions
    // Classes → Use #privateFields or _underscores convention
    // Getters/Setters → Control access to properties

function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked : ${click} times`)
        }
        else{
            console.log("limit exceded try after some time")
        }
    }
}
let funcc = clickLimiter();
funcc();
funcc();
funcc();
funcc();
funcc();
funcc();