let modeBtn = document.querySelector("#toggle");
let hoverDiv = document.querySelector("#hover");
let currDiv = "plain";
let currMode = "light";


modeBtn.addEventListener("click", ()=> {
    if (currMode === "light"){
        currMode = "dark";
        document.body.style.backgroundColor = "black";
        modeBtn.style.backgroundColor = "white";
        modeBtn.style.color = "black";
        hoverDiv.style.display = "block";
    }
    else {
        currMode = "light";
        document.body.style.backgroundColor = "White";
        modeBtn.style.backgroundColor = "black";
        modeBtn.style.color = "white";
        hoverDiv.style.display = "none";
    }
    console.log(currMode);
  
})