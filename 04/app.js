 var wrap = document.querySelector('.wrap');

var str='', sw=0;

for(j=0;j<4;j++){
    for(i=0;i<4;i++){
        if(i%2==sw){
            str+='<div class="b"></div>';
        }else{
            str+='<div class="w"></div>';
        }
    }
    sw=(sw+1)%2;

}
wrap.innerHTML = str;

var boards = document.querySelectorAll('.wrap>div');
var selectedDom = null;


    function selectBoard() {
        console.log('selected');

        var board = event.currentTarget;
        console.log(board)

        if(selectedDom){
            selectedDom.className =  selectedDom.className.replace(' select', '');
          }

        board.className +='select';

        selectedDom = board;

    }

for(var i = 0; i<16; i++) {
    boards[i].addEventListener('click', selectBoard);
}


//for (var i=0; i<16; i++) {
  //  blocks[i].addEventListener('click', function(event) {
    //    blocks[i].style.backgroundColor = 'yellow';

   // }); ?