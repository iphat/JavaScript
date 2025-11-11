//sepration of concerns - there is DOM code and logic code should be seperate

//This is not a good way of coding
// const btn = document.querySelector("button");
// const ul = document.querySelector("ul");

// btn.addEventListener("click", function(){
//     const num1 = Math.floor(Math.random() * 10);
//     const num2 = Math.floor(Math.random() * 10);

//     let add = num1 + num2;
//     let li = document.createElement("li");
//     li.textContent = add;   
//     ul.appendChild(li);
// })


//better way of coding
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(n1,n2){
    return n1 + n2;
}

btn.addEventListener("click", function(){
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    let finalAdd = add(num1, num2);

    let li = document.createElement("li");
    li.textContent = finalAdd;   
    ul.appendChild(li);
})

