/**
 * Hoistiong
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는것 처럼 느껴지는 현상
 * var와는 다르게 let과 const는 tdz를 이용하여
 * 마치 호이스팅이 일어나지 않은것 처럼 동작하게 해준다.
 */

console.log(name);
var name = "jun";
console.log(name);

console.log(name);
let name = "jun";