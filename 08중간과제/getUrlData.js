var page=1;
var pagesize=6;
var tap="trending";

function getUrlData( callback){
    document.querySelector('#loading').classList.remove('loading');
    var url =`https://1boon.kakao.com/ch/${tap}.json?page=${page}&pagesize=${pagesize}`;
    fetch(url)
    .then(function(response){
        response.json().then(function(data){
            callback(data);
            document.querySelector('#loading').classList.add('loading');
        });
    });
}