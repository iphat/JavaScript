// //Fetch API + HTTP Basics
// // Download jsonview

//fetch -built‑in JavaScript function used to make network requests (like calling an API) and get data from a server.
function getUsers(){

    fetch("https://randomuser.me/api/?results=1")
  .then((rawdata) => rawdata.json())
  .then((data) => {
    document.querySelector(".users").innerHTML = "";

    data.results.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden";

      const content = document.createElement("div");
      content.className = "p-4 flex items-start gap-4";

      const avatar = document.createElement("img");
      avatar.className = "h-20 w-20 rounded-full object-cover ring-2 ring-white shadow-sm";
      avatar.src = user.picture.large;
      avatar.alt = "User avatar";

      const info = document.createElement("div");
      info.className = "flex-1";

      const nameRow = document.createElement("div");
      nameRow.className = "flex items-center justify-between";

      const nameBlock = document.createElement("div");
      const name = document.createElement("h2");
      name.className = "text-lg font-semibold text-gray-900";
      name.textContent = `${user.name.first} ${user.name.last}`;

      const email = document.createElement("p");
      email.className = "text-sm text-gray-500";
      email.textContent = user.email;

      nameBlock.appendChild(name);
      nameBlock.appendChild(email);
      nameRow.appendChild(nameBlock);

      const buttonGroup = document.createElement("div");
      buttonGroup.className = "mt-4 flex gap-3";

      const followBtn = document.createElement("button");
      followBtn.className = "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none";
      followBtn.textContent = "Follow";

      const messageBtn = document.createElement("button");
      messageBtn.className = "px-4 py-2 border border-gray-200 text-sm rounded-lg hover:bg-gray-50";
      messageBtn.textContent = "Message";

      buttonGroup.appendChild(followBtn);
      buttonGroup.appendChild(messageBtn);

      info.appendChild(nameRow);
      info.appendChild(buttonGroup);
      content.appendChild(avatar);
      content.appendChild(info);
      card.appendChild(content);

      // Append to .card-row
      document.querySelector(".card-row").appendChild(card);
    });
  })
  .catch((err) => {
    console.log("this is error", err);
  });
}
getUsers();

//button
document.querySelector("#refreshBtn").addEventListener("click", function(){
    getUsers();
})
