//var btn = document.getElementById('btn');
var btn = document.querySelector('#btn');
console.log(btn);


btn.addEventListener('click', click())

function click() {
    return function () {
        console.log('click');
        window.open('http://m.daum.net', '', 'width=500, height=500');
    };
}
var clickCount=0;
