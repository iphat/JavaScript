//Prototype
function CreatePencil(name, price,color){
    this.name = name;//here 'this' is blank object made by "new" 
    this.price = price;
    this.color = color;
    this.company = "Apsara";
    this.write = function(text){
      let h1 = document.createElement("h1");
         h1.textContent = text;//when text is argument 
      h1.style.color = color;
      document.body.appendChild(h1);
    }
}
//If cunstructor func add any field on its prototype so all the new instances(or objects) created by that func will get that field automatically
//protoype means shared memory
 CreatePencil.prototype.company = "Sheriyans";
//'new' make blank object 
let pencil1 = new CreatePencil("HB",5,"black","ger");
console.log(pencil1);
let pencil2 = new CreatePencil("natraj",3,"red");
console.log(pencil2);

//
function CreatePen(name, price,color,company){
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
  }

CreatePen.prototype.write =  function(text){
  // console.log(this);
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;//here "this" is object created by new = "pen1"
  console.log(h1);
  document.body.append(h1);
}
  
  let pen1 = new CreatePen("bolpen", 10, "blue", "classMate");
    let pen2 = new CreatePen("gelpen", 10, "red", "DOMS");
 
  console.log(pen1.write("hi"));
  console.log(pen2.write("hi....dear"));
//method - a function present in object is konwn as method