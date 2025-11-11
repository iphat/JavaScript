//Call Stack (execution Stack)

//JS is single threaded - it works one work at a time.
//when you call a function it will add at the top of stack.
//Once function is completed it will get out from the stack

function a(){
    console.log("this is A");
}
function b(){
    a();
    console.log("this is B");
}
function c(){
    b();
    console.log("This is C");
}
c();

//web api comes from browser
// setTimeout => Task Queue =>event loop(check call stack is empty or not if) =>  call Stack 

//asynchronous example
setTimeout(() => {
    console.log("hi1");
},1000);
setTimeout(() => {
    console.log("hi5");
},2000);
setTimeout(() => {
    console.log("hi4");
},1000);
setTimeout(() => {
    console.log("hi2");
},3000);
setTimeout(() => {
    console.log("hi3");
},500);
