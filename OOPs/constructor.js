//Constructor function
function CreateBiscuit(name, price,qty, company, category){
    this.name =  name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}
let biscuit1 = new CreateBiscuit("Oreo",10, 5, "cadbaury","chocolate");
console.log(biscuit1);
let biscuit2 = new CreateBiscuit("Fantasy",20, 8, "Parle","whiteChocolate");
console.log(biscuit2);

//factories 
function CreatePencil(name, price,color,company){
    this.name = name;//here 'this' is blank object made by "new" 
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text){
      let h1 = document.createElement("h1");
    //   h1.textContent = "Hey how are you";//when text is string
         h1.textContent = text;//when text is argument 
      h1.style.color = color;
      document.body.appendChild(h1);
    }
}
//'new' make blank object 
let pencil1 = new CreatePencil("HB",3,"red","Nataraj");
// console.log(pencil1);
// console.log(pencil1.write());
console.log(pencil1.write("hi"));

let pencil2 = new CreatePencil("HB2",5,"black","Apsara");
// console.log(pencil2.write());
console.log(pencil2.write("hello"));

//method - a function present in object is konwn as method