// Arrow function and lexical scope
//1- 

let obj = {
    name: "Iphat",
    age: 26,
};
function abc(){
    console.log(this.name);//here 'this' is 'obj'
}
abc.call(obj);

//2-
let object = {
    name: "nova",
    age: 26,
};
function abcd(a,b,c){
    console.log(this.name,a,b,c);//here 'this' is 'object' and  a=1,b=5,c=9
}
//call
abcd.call(object,1,5,9);//here a=1,b=5,c=9
//apply
abcd.apply(object, [33,44,55]);
//bind
// abcd.bind(obj, 2,3,4);//not working
 let fnc = abcd.bind(object, 2,3,4);//here bind makes a copy of function abcd
 fnc();
