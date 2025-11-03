//Prototypal Inheritence - when one object inherit property from another object

let coffee = {
    color : "dark",
    drink: function(){
        console.log("good ....");
    }
}

let iphatCoffee = Object.create(coffee);
iphatCoffee.taste = "bitter";
console.log(iphatCoffee);