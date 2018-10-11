console.log('app')

var appkey = '0ddb0a4e4d6b5d88ca888d32d820af80';
var myHeaders = new Headers();
myHeaders.append('Authorization','KakaoAK 0ddb0a4e4d6b5d88ca888d32d820af80')
var options = {
    headers : myHeaders
};
var query;
var pagesize;

function print(json){
    console.log(json);

    var str = '';

    for(var i=0; i<json.documents.length; i++){
        //console.log(json.data[i].title);
        var title = json.documents[i].title;
        var url = json.documents[i].url;
        var contents = json.documents[i].contents;
        console.log(title);
        str += `<a href = ${url}>${title}</a><br>${contents}<br>`;
    }

    document.getElementById('wrap').innerHTML = str; // html파일에 
}                                       //있는 'wrap'이라는 아이디를 가진 태그에
                                        // str을 넣습니다
                                        var query
function getdata(query, options, callback){
    var url = `https://dapi.kakao.com/v2/search/web?query=${query}&size=${pagesize}`;
    fetch(url, options)
    .then(function(response){
        response.json().then(function(data){
            callback(data);//getdata(print<< 이거를 가져온거야 
        });                 //callback() -> print() 이렇게됨)
    });
}

document.getElementById('button').addEventListener('click',function(){
    query = document.getElementById("search").value;
    pagesize=10;
    getdata(query, options,print);
})


document.getElementById('moreview').addEventListener('click',function(){
    pagesize += 5;
    getdata(query, options,print);
})