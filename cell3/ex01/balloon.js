let cNo = 1;
let colors = ["red","green","blue"];
let balloon = document.getElementById("balloon");

function chengeSize(no = 10 , min = 200,max = 420) {
    let bp = balloon.getBoundingClientRect();
    
    let w = bp.width += no;
    let h = bp.height += no;
    if(w > max) {
        w = min ;
        h = min ;
    }
    if(w < min) {
        w = min;
        h = min;
    }
    balloon.style.width = w + "px";
    balloon.style.height = h + "px";
}

balloon.addEventListener("click",()=> {
    let color = colors[cNo]
    if(cNo < colors.length-1) {
        chengeSize(10);
        cNo++;
    }else {
        chengeSize(10);
        cNo = 0;
    }
    balloon.style.backgroundColor = color;
})
balloon.addEventListener("mouseout",()=> {
    let color = colors[cNo]
    if(cNo > 0) {
        chengeSize(-5);
        cNo--;
    }else {
        chengeSize(-5);
        cNo = colors.length-1;
    }
    balloon.style.backgroundColor = color;
})
