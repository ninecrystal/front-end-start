console.log("1boon");

var url ='https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';

getUrlData(url,print)

function print(json){
    console.log(json);

    var str = ' ';

    for(var i=0; i<json.data.length;i++){
        //console.log(json.data[i].title);

        var title = json.data[i].title;
        var path = json.data[i].path;
        str +='<a href="http://1boon.kakao.com/'+path+'"target ="_blank">'+title+'</a><br>';
    }

    document.getElementById('wrap').innerHTML += str;
}

function getUrlData(url, callback){
fetch(url)
.then(function(response){
    response.json().then(function(data){
         //console.log('json data:', data);
         callback(data)
    });
})
.catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

page = 1;

document.getElementById('button').addEventListener('click',function(){
    page +=1 ;
    url ='https://1boon.kakao.com/ch/enter.json?page='+page+'&pagesize=10'
    getUrlData(url,print);
    
    


})