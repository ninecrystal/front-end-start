// function addPoint(){
//     point++;
//     $point
// }

// function move() {
//     var x = random(wrapwidth - bugwidth);
//     var y = random(wrapwidth - bugwidth);
//     console.log
// }
var clickBox=document.querySelector('.clickBox');
var selected;

function changeColor(e){
    console.log('selected');

    if(selected != undefined) {
        selected.style.backgroundColor = null;
    }
    e.currentTarget.style.backgroundColor = "blue";
    selected = e.currentTarget;
}


clickBox.addEventListener('click', changeColor);

