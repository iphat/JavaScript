
//map() - The map() function in JavaScript is a powerful array method used to transform elements of an array. It creates a new array by applying a function to each element of the original array — without modifying the original.

//this normal code do same, as map do
const arr = [1,2,3,4,5];

function myMap(arr, callback){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(callback(arr[i], arr, i));
    }
    return newArr;
}
// let ans = myMap([1,2,3,4], (num) => num + 2);
// console.log(ans);

let ans = myMap(arr, function(val){
    return val + 2;
});
console.log(ans);