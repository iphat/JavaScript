//toaster
function createToaster(config){
    // console.log(config.positionX);
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "light" ? "bg-red-800 text-white" : "bg-blue-800 text-white" } px-6 py-3 rounded shadow-lg  pointer-events-none transition-opacity duration-300`;

    let parent = document.querySelector(".parent");
    parent.appendChild(div);

    if(config.positioX !== "left" || config.positionY !== "top"){
        parent.classList.add("fixed");
        parent.className += `{config.positionX === "right" ? " right-5" : "left-5"} ${config.positionY === "bottom" ? " bottom-5" : "top-5"}`
    }

        setTimeout(()=>{
            parent.removeChild(div);
        }, config.duration * 1000);
    };   
}

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});
toaster("Download done");
setTimeout(() => {
    toaster("done");
},2000);