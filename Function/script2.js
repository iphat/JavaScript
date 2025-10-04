//que1- what is the diff bw function declaration and expression in terms of hoisting?
//ans -  function declaration will  hoist but function expression not

//in funtion statement it will work and this is called hoisting
abcd();

function abcd(){
    console.log("hi");
}
//but in function expresstion it will not work
// abc();

// let abc = function(){
//     console.log("hello");
// }

//que2- convert this function into an arrow function
let arrow = (a,b) => {
  console.log(a+b);
}
arrow(2,3);

//que3- what does the ... operator mean in parameters?
//ans- It is rest in parameter but in object and array it is spread

//que4- Use rest parameter to accept any number of scores and return the total.
function getScore(...score){
    let total = 0;
    score.forEach(function(val) {
        total = total + val;
    })
    // return total;
    console.log(total);
}
// console.log(getScore(1,2,3,4,5,6));
getScore(1,2,3,4,5,6);

//que5- 
// function checkAge(age){
//     if(age<18){
//         console.log("Too younge");
//     }
//     else{
//         console.log("allowed");
//     }
// }
//or
function checkAge(age){
    if(age < 18) return "too young";
    return "allowed";
}
console.log(checkAge(23));

//undefined when a function not return anything

//que6- what does it mean when we say "function are first class citizens"?
//ans- functions are treated as values (when a one function is passed as value in another function)

//que7- Pass a function into another function and execute it inside
function ab(val1) {
    val1();
}
ab(function(){
 console.log("hey....");
});

//que8- what is the higher order function or a function that accept another function in their parameter?
//higher order function is a function that return another function or accept a function in their parameter

function order(val2){
val2();
}
order(function(){
 console.log("hey....iphat");
});

//que9- convert the above function into pure function
// let total = 0;
// function addToTotal(num){
//     total += num;
// }
let total = 0;
function addToTotal(num){
    let newtotal = total;
    newtotal +=  num;
}

//que9- what is a closure? when is it created?

function xyz(){
    let val = 0;
    return function (){
        console.log(val);
    };
}

//que10
function outer(){
    let count = 0;
    return function (){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
counter();

//que11- convert this function into an IIFE
//  function init(){
//     console.log("initialize");
//  }
( function init(){
    console.log("initialize");
 })();


//que12 - Write a BMI calculater
function bmi(weight,height){
   return  weight / (height*height); 
}
console.log(bmi(69,1.7).toFixed(2));
console.log(Math.floor(bmi(69,1.7)));

//que13- create a reusable discount calculator
function discountCalculator(discount){
  return function(price){
    return price * (discount/100);
  }
}
let discounter = discountCalculator(10);//10 is discount
console.log(discounter(300));//300 is price

//que14- Build a counter using closure
function cunt(){
   let count = 0;
    return function (){
        count++;
        console.log(count);
    }
}
let c = cunt();
c();
c();
let d = cunt();
d();

//que14- Create a pure function to tansform a value
function dbl(val){
 return val * 2;
}
console.log(dbl(5));

//que15- Use IIFE to isolate variable
(function(){
    const password = "secret";
    console.log(password);
}) ();
// console.log(password);//we can't use variables outside becz IIFE isolate the variable

//que16-  diff bw higher order function and closure
//ans- In a closure, the child function must use variables from its parent function, but in a higher-order function, it’s not necessary to use parent variables.
