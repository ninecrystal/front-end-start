console.log('my-note app.js');
 
var content = document.querySelector("#memo");
var info = document.querySelector('.about');

function newNote() {
    localStorage.removeItem("memo");
    content.value="";
}
function saveNote(){
    localStorage.setItem("memo", content.value);
}
function link() {
    window.location.href = "https://github.com/ninecrystal/front-end-start";
}
function download() {
    var blob = new Blob([content.value],{type:"text/plain; charset=utf-8"});
    saveAs(blob,"저장된메모장.txt");
}
function showAbout() {
    info.style.visibility = "visible";
}
function close() {
    info.style.visibility = "hidden";
}
function fullScreen() {
    document.documentElement.webkitRequestFullScreen();
}
document.querySelector('.btn-savenote').addEventListener('click', saveNote);
document.querySelector('.btn-newnote').addEventListener('click', newNote);
document.querySelector('.btn-download').addEventListener('click', download);
document.querySelector('.btn-link').addEventListener('click', link);
document.querySelector('.btn-about').addEventListener('click', showAbout);
document.querySelector('.close').addEventListener('click', close);
document.querySelector('.btn-screen').addEventListener('click', fullScreen);
console.log(localStorage.getItem("memo"));
content.value = localStorage.getItem("memo");