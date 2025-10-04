//2.5 submit
let main = document.querySelector("#main")
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    // console.log(inputs);//inputs of form
    // console.log(inputs[1].value,inputs[2].value,inputs[3].value,);
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5)
    card.appendChild(p);
    main.appendChild(card);

    //when form submited make the form inputs empty
inputs.forEach(function(inp){
    // console.log(inp.value);
    if(inp.type !== "submit"){
        inp.value = "";
    }
  });
});