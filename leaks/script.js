
//your all timers are running constantly, here is timer not stop at 10
// let count  = 0
// const int = setInterval(() => {
//     if(count < 10){
//         count++;
//         console.log(count);
//     }
//     else{
//         console.log("still it works");
//     }
// },1000);

//here timer is stop now
let count  = 0
const int = setInterval(() => {
    if(count < 10){
        count++;
        console.log(count);
    }
    else{
        clearInterval(int);
        console.log("finished");
    }
},500);