
function newColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

$(document).ready(()=> {
    let button = $('<input type="button" value="Click me!" >');
    $("body").append(button);
    button.click(()=> {

        $("body")[0].style.backgroundColor = newColor();
    })
})


