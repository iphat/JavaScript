// Scope - Scope defines where variables and functions are accessible in your code
//scope type - function scope, global scope and block scope

//1- function scope - use only inside the function
function ab(){
    var a = 12;
}
console.log(a);//err becz not access outside the function

//2- global scope - used in any part of code 
var a = 12;//not inside {} & any function so that is why it is global

//3- block scope - used only inside the {} braces
{
    let a = "hi";
}


//Execution context - memory creation, execution phase

//1- Memory phase -  Allocates memory for variables and functions(ex - a box stores all variables and function code)
// 2- Execution phase - Executes the code line by line,Assigns values to variables, Runs function logic


//Lexical Scope , Dynamic Scope

//1- Lexical scope - (runs in js) - how and where variables are accessible based on their physical availability in the code.
function  outer(){
    let name = "iphat";
    function inner(){
        console.log(name);
    }
    inner();
}
outer();

//2- Dynamic scope - A function looks for variables in the place it was called, not where it was written.
let x = 12;
function xyz(){
    console.log(x);
}
function abc(){
    let x = 14;
    xyz();
}
abc();

//closures - these are functions that are presents inside parent function and inside function is returning, there returning func use parent func variable 

function hi(){
    let s = 10;
    return function (){
        console.log(s);
    };
}
//when a closer is created, so there is backlink of func & variables created and its name is [[Environment]]
//[[Environment]] - allows the function to "remember" variables even after the outer function has finished executing.
//1-
function abcd(){
    let a = 62;
    return function inner(){
        console.log(a);
    }
}
// abcd();
let fnc = abcd();
fnc();//calls inner() function
//2-
function countForMe(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    }
}
// both func have their own c
let func1 = countForMe();
func1();
func1();
func1();

let func2 = countForMe();
func2();
func2();
func2();
func2();