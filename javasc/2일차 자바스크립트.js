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


    let input = prompt('숫자를 입력하세요:')
    switch (input%2) {
        case 0 :

    }

    let mon = 'Monday';
    let tue = 'Tuesday';
    let wed = 'Wednesday';
    let thu = 'Thursday';
    let fri = 'Friday';
    let sat = 'Saturday';
    

    let days0week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


    // 오브젝트내에서 인자(argument)로 받는 함수를 만들어서
    //짝수인지 홀수인지 판별하시오
   
    var number = parseInt(prompt("숫자를 입력하세요:"));
      
    if (isNaN(number)) {
        alert("올바른 숫자를 입력하세요.");
        return;
        }
      
    if (number % 2 === 0) {
        alert(number + "은(는) 짝수입니다.");
        } else {
        alert(number + "은(는) 홀수입니다.");
        }
      
      
    //배열내 최댓값 찾기
    // 배열 을 인자로 받는 함수를 만들어서
    //그 배열의 최대값을 반환해보세요
    function findMaxValue(arr) {
        if (arr.length === 0) {
          return undefined; // 배열이 비어있으면 undefined 반환
        }
      
        var maxValue = arr[0]; // 초기값을 배열의 첫 번째 요소로 설정
      
        for (var i = 1; i < arr.length; i++) {
          if (arr[i] > maxValue) {
            maxValue = arr[i]; // 현재 요소가 최대값보다 크면 최대값을 갱신
          }
        }
      
        return maxValue;
      }
      
      // 함수 호출 예시
      var numbers = [5, 8, 2, 10, 3];
      var max = findMaxValue(numbers);
      console.log("최대값:", max); // 출력: 최대값: 10

      
      //2번째로 큰 값으로 찾아보세요
      // Math.max()를 사용하지 마세요
      function findSecondMaxValue(arr) {
        if (arr.length < 2) {
          return undefined; // 배열의 요소 개수가 2개 미만인 경우 undefined 반환
        }
      
        var max = arr[0]; // 초기값을 배열의 첫 번째 요소로 설정
        var secondMax = -Infinity; // 초기값을 음의 무한대로 설정
      
        for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            secondMax = max; // 현재 최대값을 두 번째로 큰 값으로 설정
            max = arr[i]; // 현재 요소를 최대값으로 갱신
          } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i]; // 현재 요소가 두 번째로 큰 값보다 크면 갱신
          }
        }
      
        if (secondMax === -Infinity) {
          return undefined; // 두 번째로 큰 값이 존재하지 않는 경우 undefined 반환
        }
      
        return secondMax;
      }
      
      // 함수 호출 예시
      var numbers = [5, 8, 2, 10, 3];
      var secondMax = findSecondMaxValue(numbers);
      console.log("두 번째로 큰 값:", secondMax); // 출력: 두 번째로 큰 값: 8



      //구구단 만들기
      function generateMultiplicationTable(number) {
        if (isNaN(number)) {
          console.log("올바른 숫자를 입력하세요.");
          return;
        }
      
        console.log(number + "단 구구단:");
      
        for (var i = 1; i <= 9; i++) {
          var result = number * i;
          console.log(number + " x " + i + " = " + result);
        }
      }
      
      // 사용자로부터 숫자 입력 받기
      var input = prompt("구구단을 출력할 숫자를 입력하세요:");
      
      // 구구단 생성 함수 호출
      generateMultiplicationTable(parseInt(input));


      //1부터 30까지 숫자를 돌면서
      //3의 배수면 'fizz'출력
      //5의 배수면 'buzz'출력
      //3과 5의 배수면 'fizzbuzz'출력
      //나머진 숫자 그대로 출력      
      for (var i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzbuzz");
        } else if (i % 3 === 0) {
          console.log("fizz");
        } else if (i % 5 === 0) {
          console.log("buzz");
        } else {
          console.log(i);
        }
      }
      