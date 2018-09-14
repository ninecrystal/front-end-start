function  gugudan(num) {
    //for(var i = 2; i<= 9; i++) {
        console.log(i + '단');
        for (var j= 1; j<=9; j++) {
            console.log(i+'*'+j+'='+i*j);
        }
    //}
}
for(var i = 2; i<= 9; i++) {
gugudan(2);
}

//javascript 퀴즈 - 총합

function total(){
var num, sum = 0;
 
while(true){
num = prompt("숫자를 입력하세요. 단 아무것도 입력안할 경우 총합이 나옵니다.");
if(num ===""){
    alert("총합은 " + sum);
    break;
}
else
     sum +=parseInt(num);
}
}

total();