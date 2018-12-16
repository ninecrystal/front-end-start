var clickBox=document.querySelector('.clickBox');
var attribute = document.querySelector('.attribute');
var selected;
var score, level, miss;

function changeColor(e){
    console.log('selected');

    if(selected != undefined) {
        selected.style.backgroundColor = null;
    }
    e.currentTarget.style.backgroundColor = "blue";
    selected = e.currentTarget;
    setTimeout(function back(e){
        selected.style.backgroundColor = null;
    },1500)
}

function Point(){

}

clickBox.addEventListener('click', changeColor);

function move() {
    var x = Math.random(wrapwidth - bugwidth);
    var y = Math.random(wrapwidth - bugwidth);
    console.log
}