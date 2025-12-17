learn everything about core concepts of JS

points to remember -

1- callBack - a function that does not run instantly, but it runs after completion of any work 
Ex - forEach, addEventlistener etc.

note- 
var obj = {
    user:"iphat",
    age:29,
    city:"bhopal",
    skills:['js','react','next']
}

// let{user,...b} = obj;
// console.log(b);

let {skills} = obj;
let[fir,sec,...b] = skills;
console.log(b);
