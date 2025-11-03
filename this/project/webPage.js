
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#url");

const userManager = {
    users: [],
    init: function(){
        form.addEventListener("submit", this.submitForm.bind(this));//'this' is userManager
    },
    submitForm: function(e){
        e.preventDefault();
        // console.log(this);
        this.addUser();
    },
    addUser: function(){
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
        //  console.log(this.users);
        form.reset();
        this.renderUI();
    },
    renderUI: function(){
        this.users.forEach(function(user){
//grid grid-cols-1 md:grid-cols-3
// Create container
const container = document.createElement("div");
container.className = "flex flex-row gap-10  px-2 max-w-6xl mx-auto";

// Card wrapper
const card = document.createElement("div");
card.className = "bg-gray-600 backdrop-blur rounded-xl shadow-xl p-4 flex flex-col items-center";

// Image
const img = document.createElement("img");
img.src = "https://i.pinimg.com/736x/e1/77/31/e17731d4df0c4ea041ad98b63c2e7612.jpg";
img.alt = "";
img.className = "w-28 h-28 rounded-full object-cover mb-5 border-2 border-gray-800";
card.appendChild(img);

// Name
const name = document.createElement("h2");
name.textContent = "John Doe";
name.className = "text-2xl font-bold mb-1 text-black-800";
card.appendChild(name);

// Role
const role = document.createElement("p");
role.textContent = "Developer";
role.className = "text-black-500 mb-2 font-medium";
card.appendChild(role);

// Description
const desc = document.createElement("p");
desc.textContent = "love to built UIs and learning new things";
desc.className = "text-black-400 text-center";
card.appendChild(desc);

// Append card to container
container.appendChild(card);

// Finally, append to body or any specific element
document.body.appendChild(container);
        }
    )},
    removeUser: function(){},
}
userManager.init();
