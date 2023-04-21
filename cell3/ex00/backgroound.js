let button = document.createElement("input");
button.type = "button";
button.value = "Click me!";
document.body.appendChild(button);


function newColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

button.addEventListener("click",()=> {
    document.body.style.backgroundColor = newColor();
})