console.log('app')

var appkey = '0ddb0a4e4d6b5d88ca888d32d820af80';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;

var myHeaders = new Headers();
myHeaders.append('Authorization','KakaoAK 0ddb0a4e4d6b5d88ca888d32d820af80')
var options = {
    headers : myHeaders
};

fetch(url, options)
.then(function(response){
    response.json().then(function(data){
        console.log('json data:',data);
    });
});