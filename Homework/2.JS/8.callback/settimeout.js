// node.js 비동기
// setTimeout(callback 함수, 지연시간(ms)...) 1000ms = 1초

console.log('시작');
setTimeout(sayHello, 2000);
console.log('함수호출후');

function sayHello(){
    console.log('안녕하세요. 이것은 콜백함수입니다.');
}

console.log('종료');

// -------------------------------------

setTimeout(() => {
    console.log("비동기 코드 실행");
}, 1000);