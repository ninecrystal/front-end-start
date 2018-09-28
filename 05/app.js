console.log('app.js');

  function jsonp(){
      var head = document.querySelector("head");
      var script = document.createElement('script');
      script.src = 'jsonp.js';
      head.appendChild(script);
  }

function callback(data){
    console.log(data)
    document.getElementById('name').innerHTML = data.name;
}

  //jsonp();