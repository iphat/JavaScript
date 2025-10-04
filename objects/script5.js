//objects
//1- key value structure
let obj = {
    name : "chaudhary",
    age : 25,
    class : "html"
};
//2- dot notation
console.log(obj.age);
//3- bracket notation
console.log(obj['name']);


//4- nesting 
const user = {
    name : "iphat",
    address : {
        vill : "mode",
        pin : 250404,
        location : {
            lat : 23.3,
            lng : 77.4,
        },   
    },
    rollNo : 223445, 
};
//5- deep access
let a = user.address.pin;
console.log(a);

//6- object destructuring
let {lat,lng} = user.address.location;
console.log(lat,"....",lng);

//7-for in - here we get all the key of object in a userkey variable
for (let userkey in user){
    // console.log(userkey);
    console.log(userkey, "",user[userkey])
}

//
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//8-copying objects: spread, object.assign, deep clone
//spread
let user2 = {...user};
//it is start passing reference so that both user1 & user city became "indore" this is due to nested objects but not good to use
user2.address.city = "indore";
console.log(user2);
console.log(user);

//deep clone - this is good to use in nested objects

//this convert object into string
// console.log(JSON.stringify(user));
// this convert obj again into real form
let user3 = JSON.parse(JSON.stringify(user));
console.log(user3);
user3.address.city = "meerut";
console.log(user);

//if we change address into addresses
console.log(user?.addresses?.city);//undefined value 
console.log(user?.address?.city);

//que1 - Can object key be a no. or boolean? try this

let object = {
    name: "jack",
    age : 45,
    isEnrolled: true,
    33 : "answer",//no.
    true : "absent"//boolean
}
console.log(object);
console.log(object.name);

//que2- given a dynamic key let key = "age" , how will you access user[key]?
let key = "age";
const User = {
    age : 23,
}
console.log(User['age']);

//que3- destructure the key "first-name" as a variable called firstName.
const student  = {
    "first-name" : "brayn"
}
let {"first-name" : firstName} = student;
console.log(student);
//que4- use for-in to log all keys in this object
const course = {
    title: "javaScript",
    duration : "4 weeks",
}
for(let key in course){
    console.log(key);
}
//que5- use Object.entries() to print all key-value pairs as: title :JavaScript, duration: 4 weeks

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]);
});

//que6- what is problem with this?
const object1 = {info : {score: 80}};
const clone = {...object1};
clone.info.score = 100;
console.log(object1.info.score);
console.log(clone.info.score);

//answer - You used {...object1} to copy the object, but it only copies the outer part. The inside part (info) is still shared between both object1 and clone.
//Result: Changing clone.info.score also changes object1.info.score.

//que7- Deep clone the object1 safely

let newObject = JSON.parse(JSON.stringify(object1));
newObject.info.score = 200;
console.log(newObject);
console.log(object1);

//que8- Rewrite this safely using optional chaining
const person = {};
console.log(person?.profile?.name)//undefine prints not error

//que9- Use a variable to dynamically assign a property
const Key = "role";
let Obj = {
    name : "rozer",
    [Key] : "admin",
};
console.log(Obj);