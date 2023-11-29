
// page 6
// 객체 자료형
let number = new Number(273);
let string = new String('hello');
let boolean = new Boolean(true);

// 자료형 출력
console.log(typeof number);
console.log(typeof number.valueOf);
console.log(typeof string.indexOf);
console.log(typeof boolean);



// page 11
// 변수 선언
let number2 = 273.5210332;

// 출력
console.log(number2.toFixed(1));
console.log(number2.toFixed(4));



// page 18
// 변수 선언
let string2 = 'abcdefg';

// 출력
string2 = string2.toUpperCase();
console.log(string2);



// page 19
// 변수 선언
let string3 = 'hello. good morning !';

// 문자열 내부에 'good'이라는 문자열이 있는지 확인
if (string3.indexOf('good') >= 0) {
    console.log('good morning ..!');
}



// page 25
// 변수 선언
let now = new Date();
let before = new Date('March 31, 2001');

// 시간 간격 구하기
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

console.log(`태어나고 ${interval}일 지났습니다.`)
