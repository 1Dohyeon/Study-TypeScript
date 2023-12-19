function add1(a, b) {
    // void: 반환을 안한다는 뜻
    console.log("hello world");
}
;
add1(1, 2);
var minus = function (a, b) { return a - b; };
var minusString = function (a, b) { return String(a - b); };
var minus2 = function (a, b) { return String(a - b); };
// 어질어질한 문법
var multiple1 = function (a, b) {
    return function () {
        return a * b * 2;
    };
};
// 따라서 위 multiple1 함수는 아래와 같이 변경 가능
var multiple2 = function (a, b) {
    return function () {
        return a * b * 2;
    };
};
function sendError() {
    console.log("에러 발생");
}
var result = sendError();
console.log("result :", result); // sendError()는 void 메서드이므로 result에는 아무것도 넘어오지 않음 undefined
// throw: return은 아니지만 값이 넘어옴
function sendError2() {
    throw { erroCode: 500, message: "internal server error" };
}
var result2 = sendError2();
console.log("result :", result2);
