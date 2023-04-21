let cNo = 1;
let colors = ["red","green","blue"];
let balloon;
function chengeSize(no = 10 , min = 200,max = 420) {
    let bp = balloon[0].getBoundingClientRect();
    console.log(bp)
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
    balloon[0].style.width = w + "px";
    balloon[0].style.height = h + "px";
}

$(document).ready(()=> {
    balloon = $('<div id="balloon"></div>');
    $("body").append(balloon);
    balloon[0].addEventListener("click",()=> {
        let color = colors[cNo]
        if(cNo < colors.length-1) {
            chengeSize(10);
            cNo++;
        }else {
            chengeSize(10);
            cNo = 0;
        }
        balloon[0].style.backgroundColor = color;
    })
    balloon[0].addEventListener("mouseout",()=> {
        let color = colors[cNo]
        if(cNo > 0) {
            chengeSize(-5);
            cNo--;
        }else {
            chengeSize(-5);
            cNo = colors.length-1;
        }
        balloon[0].style.backgroundColor = color;
    })
})





