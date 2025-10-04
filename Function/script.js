// // let str = "42";
// // let num;
// //  num += str;
// // console.log(num);

// //1-
// function getGrade(score) {
//     if(score >= 90 && score <= 100) return "A+"; 
//     else if(score >= 80 && score < 90) return "A";
//     else if(score >= 70 && score < 80) return "B";
//     else if(score >= 60 && score < 70) return "C";
//     else if(score >= 33 && score < 60) return "D";
//     else return "fail";
// }
// let a = getGrade(24);
// console.log(a);
// document.write("this is a num :", a);

// //2-
// function rps (user, computer) {
//     if(user === computer) return "withdraw";

//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "scissor" && computer === "rock") return "computer";
//     if(user === "paper" && computer === "scissor") return "computer";
//     if(user === "scissor" && computer === "paper") return "computer";

// }
// let s = rps("rock","rock");
// console.log(s);

// //3-
// let x = 2;
// switch(x) {
//     case 2 : 
//     console.log("two");
//     case  3 :
//         console.log("three");
// }

// //q1-Print numbers from 1 to 10 using for loop
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// //q2-Print numbers from 10 to 1 using while loop

// let i = 10;
// while(i>=1){
//     console.log(i);
//      i--;
// }

// //q3-Print even numbers 1 to 20 using for loop

// for(let i=1; i<=20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// //q4-Print odd num from 1 to 15 using a while loop
// let j = 1;
// while(j<=15){
//     // console.log(j);
//     j++;
//     if(j%2 !== 0){
//         console.log(j);
//     }
// }
// //q5-Print the mul table of 5 
// for(let i=1; i<=10; i++){
// console.log(`5*${i} = ${5*i}`);
// }

// //q6- find the sum of numbers from 1 to 100 using loop.
// let sum = 0;
// for(let i=1; i<101; i++){
//     sum=sum+i;
// }
//  console.log(sum);

//  //q7-  Print all no. bw 1 to 50 that are divisible by 3

//  for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
//  }

//q8- Ask the user for a no. and print whether each num from 1 to that number is even or odd

let val = prompt("given no. is ")
for(let i=1; i<val; i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
   else{
    console.log(`${i} is odd`);
   }
}

//que9- Count how many numbers bw 1 to 100 are divisible by both 3 and 5
for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}


//break and continue

// //que1- Stop at first multiple of 7
// for(let i=1; i<=100; i++){
//     //here 7 also prints
//     // console.log(i);
//     if(i%7 === 0){
//         break;
//     }    
//     console.log(i);
// }

// //que2- skip multiple of 3
// for(let i=1; i<=20; i++){
//     if(i%3 === 0){
//         continue;
//     }    
//     console.log(i);
// }

//que3- Print first 5 odd number only
let count = 0;
for(let i=1; i<=30; i++){
    if(i%2 !== 0){
        count++;
        console.log(`${count}.  ${i}`);

    }
    if(count === 5) break;
}
