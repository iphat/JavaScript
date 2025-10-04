//Array
//how to make array
//type1-
let arr = new Array();
//type2-
let array = [1,2,3,4,5,6,7,8,9,];
//shift
array.shift(9);
console.log(array)
//slice
let newArr = array.slice(0,3);
console.log(newArr);

//forEach
array.forEach(function(val) {
    console.log(val + 2);
});
//map - use only when we make new array on the basis of existing array
let newarr = array.map(function(val){
    // return 2;
    if(val > 5) return val;
});
console.log(newarr);

//filter - 
let Arr = array.filter(function(val){
    if(val > 10) return true;
});
console.log(Arr);
//reduce
let ans = array.reduce(function(acc,val){
    return acc + val ;
},0)
console.log(ans);
//find
let arrObj = [
    {id : 1, key : 1},
    {id : 2, key : 2},
    {id : 3, key : 3},
];
let v = arrObj.find(function(val) {
    return val.key === 1;
});
console.log(v);

//some 
let a = [10,20,30,40];
let any = a.some(function(val) {
    return val > 35;
});
console.log(any);

//every 
let b = a.every(function(val){
    return val > 20;
})
console.log(b);

//splice

let z = [5,10,15];
z.splice(1,0, 20);//1- index no. , 0- nothing removed from array, 20- no. added at 1 index
console.log(z);

//sort
let arr4 = [35,55,45,25]
let newA = arr4.sort((a,b) => a-b);//a-b = ascending oreder & b-a = descending order 
console.log(newA);
//reverse
let arr5 = ["x","y","z"]
let rev = arr5.reverse(function(val){
    return val;
});
console.log(rev);