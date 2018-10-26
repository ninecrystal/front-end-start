function print(json){
    console.log(json);

    var str = ' ';

    for(var i=0; i<json.data.length;i++){

        var title = json.data[i].title;
        var coverImage = json.data[i].coverImage;
        var path = json.data[i].path;
        var totalView = json.data[i].totalView;

        str += `<div class="news"><a href="https://1boon.kakao.com/${path}"><p class = "title">${title}</p><img src="${coverImage}"/></a><br><p class = "view">조회수 ${totalView}</p><br></div>`;
    }

    document.getElementById('list').innerHTML += str;
}