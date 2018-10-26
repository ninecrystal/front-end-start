function trend(){
    document.querySelector('.active').classList.remove('active');
    document.getElementById('btntrend').classList.add('active');
    document.getElementById('list').innerHTML = "";
    tap = "trending";
    getUrlData(print);
}