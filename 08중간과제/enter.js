function enter(){
    document.querySelector('.active').classList.remove('active');
    document.getElementById('btnenter').classList.add('active');
    document.getElementById('list').innerHTML = "";
    tap = "enter";
    getUrlData(print);
    document.getElementById('btnenter').class="active";
}