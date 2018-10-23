function issue(){
    document.querySelector('.active').classList.remove('active');
    document.getElementById('btnissue').classList.add('active');
    document.getElementById('list').innerHTML = "";
    tap = "issue";
    getUrlData(print);
    document.getElementById('btnenter').class="active";
}