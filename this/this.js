// this 
//1- global scope
console.log(this);//here 'this' is window

//2-function scope
function abc(){
    console.log(this);//here 'this' is window
}
abc();

//3- method - a function present in object is konwn as method
//3.1
let obj = {
    name: "Iphat",
    sayName: function(){
        console.log(this);//here 'this' is object, if make it arrow function so value become window  
        }
}
obj.sayName();
//3.2
let object = {
    name: "sara",
    sayName: function(){
        //make sure inner function should be arrow function, if it is not arrow then it will become window
        let inner =  () => {//arrow func takes 'this' value from their parent
            console.log(this); 
          }
          inner();
        }
}
object.sayName();

//4-Event handler
 document.querySelector("h1").addEventListener("click", function(){
    console.log(this.style.color = "red");//here 'this' is that on which addEventListener is putted
 });

 //5- class - first letter should be capital
 class Abcd{
    constructor(){
        console.log("hey....hello");
        this.a = 12;//here is 'this' value is blank obj when we call with new keyword
    }
 }
let val =  new Abcd();
console.log(val);

