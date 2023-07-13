console.log(50);
console.log(50-3);

const a =50;
let b =50;
a=b;
a=50000;
console(a,b);
console.log("안녕하세요");

var date= new Date();
var hour = date.getHours();

if (hour>11){
    alert('알림')
}
else if (hour<15){
    alert('점심')
}
else{
    alert('저녁')
}

var input = Number(prompt('숫자를 입력하세요','숫자'));
switch(input){
    case 0:
        alert('짝수입니다.');
        break;
    case 1:
        alert('홀수입니다.');
        break;
    default:
        alert('숫자가 아닙니다')
        break;
    }