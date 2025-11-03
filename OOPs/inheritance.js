//class
class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }
    checkRole(){
        console.log(`you are a ${this.role}`)
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}
//classical Inheritance - when one class inherit property from another class - using super and extends
class Admin extends User {
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
        // console.log(this);
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(ele){
            ele.remove();
        });
    }
}
let u1 = new User("iphat", "meerut", "@ic", "ic123@gmail.com");
let u2 = new User("diya", "Mumbai", "@dy", "diya123@gmail.com");

let ad1 = new Admin("Jiya", "London", "@jiya", "jiya13@gmail.com");

console.log(u1.checkRole());