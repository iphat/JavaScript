class CreatePencil{
    constructor(name,company,price,color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((ele) => {
            // console.log(this);
            if(ele.style.color === this.color){
                ele.remove();
            }
        })
    }
    write(text){
        let h1 = document.createElement("h1");
            // console.log(this);
            h1.textContent = text;
            h1.style.color = this.color;
            document.body.appendChild(h1);
    }
}

let p1 = new CreatePencil("HB", "natraj", 3, "red");
let p2 = new CreatePencil("HB2", "Apsara", 5, "grey");
console.log(p1.write("hiiiii......"));
console.log(p2.write("hiiiii......"));
console.log(p2.erase());

//method - a function present in object is konwn as method