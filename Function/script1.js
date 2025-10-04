//1- functions

// normal code run automatically
console.log("hello dear");
console.log("hello dear");

// but we control the function code 
function abc(){
console.log("hello iphat");
}
abc();
abc();

//
let func = function(){
    console.log("dear");
}
func();

// arrow function
let fun = () => {
    console.log("hi");
}
fun();

//

function dan(v1,v2){//v1 and v2 is parameter
    console.log(`${v1} do it ${v2}`);
}
dan("hey","now");//"hey","now" these are argument

//
function add(v1, v2){
    console.log(v1+v2);
    console.log(v1,v2);

}
add(1,2);
add();

//
function add(v1 = 4, v2 = 2){
    console.log(v1+v2);
    console.log(v1,v2);

}
add(1,2);
add();

//if ...  is add in functions parameter then it is rest operator and if ...  is add in arrays and objects it is spread operator
function arg(x,y,...a){
    console.log(x,y,a);
}
arg(2,4,3,6,7,8);

//2- return 

function abcd(){
    return 12;
}
let y = abcd();
console.log(y);

//
function ab(v){
    return v+12;
}
let z = ab(2);
console.log(z);

// first class function -  would treat(or use) them as a value
function firstClass(val){
  val();
}
firstClass(function(){
    console.log("freedom for everyone");
});

//higher order function - a func that return a func or a func that accept a func in their parameter
//1-
function higherOrder(){
  return function(){
    console.log("a func that return a func");
  }
}
higherOrder()();
//2-
function high(val){
  val();
}
high(function(){
    console.log("func that accept a func in their parameter");
});

//PURE  vs  IMPURE function
//pure
let a = 12;
function pure(){
    console.log("PURE function");
}
//impure
function impure(){
    a++;
    console.log(a);
}
pure();
impure();

//clouser - a func that return a func and that return func use a parent func variable 
function clouser(){
    let x = 14;
    return function inner(){
       console.log(a);
    }

}
//laxical scope
function lax(){
    let a = 2;
    function lax2(){
        let x = 4;
        function lax3(){
            let y = 6;
        }
    } 
}

//IIFE (Imediately Invoked Function Expression)
(function(){
   console.log("imediately invoked function");
}) ();

//output is 3 becz no of times loop run
let i = 0; 
while (i < 3) { 
    i++; 
} console.log(`${i}`);
