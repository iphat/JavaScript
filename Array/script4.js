//destructuring
let arr = [1,2,3,4,5];
let [a,b,c] = arr;
let arr2 = [...arr];
console.log(arr2);
console.log(arr2.push(6));
console.log(arr2);

console.log(arr);
console.log(arr.unshift(0));
console.log(arr);
console.log(arr2);

//que1- create an array with 3 fruits and print second fruit
let  fruit = ['apple','mango','banana'];

console.log(fruit[1])
console.log(fruit.push('guvava'));
console.log(fruit.unshift('pineapple'));
console.log(fruit);

console.log(fruit.pop());
console.log(fruit.push('kiwi'));

console.log(fruit);

//que1- Insert "red" and "blue" at index 1 in this array
let colors = ["green", "yellow"];
colors.splice(1,0,"red","blue");
console.log(colors);

//que2- extract only midddle 3 elements from this array
let item = [1,2,3,4,5,6,7,8,9];
let newitem = item.slice(1,4);
console.log(newitem);

//que3 - sort this array alphabetically and then reverse it.
let name  = ['zara','aira', 'mira','sara']
name.sort().reverse();
console.log(name);

//que4- use .map() to square each num
let ar = [2,5,7,3];
let num = ar.map(function(el){
   return el*2;
});
console.log(num);

//que5 -  use filter() to keep numbers greater than 10
let fil = [20,8,12,7,11];
let newfil = fil.filter(function(el) {
    return el>10;
})
console.log(newfil);
//que6- Use reduce to find the sum of this array
let arr1 = [10,20,30];
let num1 = arr1.reduce(function(acc, el){
    return acc + el;
})
console.log(num1);

//que7- use find() to get first num less than 10
let arr3 = [2,5,13,11,8];
let num2 = arr3.find(function(el){
    return el < 10;
})
console.log(num2);
//que8- use some() to check if any student has scored below 35;
let some  = arr.some(function(el) {
    return el < 35 ;
})
console.log(some);

//que9- use every() to check if all num are even
let x = arr3.every(function(el){
    return el%2 === 0;
})
console.log(x);

//que10- Destructure this array to get firstname and lastname
let  name1 = ["iphat","adnan"];
let [firstName, lastName] = name1;
console.log(firstName);

//que11- Merge two arrays using spread operator

let n = [1,2,3,4];
let m = [11,22,33,44];

let i = [...n,...m];
console.log(i);

//que11- Add "India" to the start of this array using spread
let add = ["India", ...m];
console.log(add);

//que12- clone this array properly (not by reference): 
let newArr = [9,8,7,6];
let newArr1 = [...newArr];
console.log(newArr1);