console.log("hello world");
// 타입 주석
var a = 22;
var aa = Number("22");
var b = "hi ts";
var ba = String(123);
var c = true;
// any - 다 들어감 -> 쓰지마셈
// number - 숫자(int, long, double) 다.
// string - "" '' ``
// boolean - true, false
// object - {} -> 객체계의 any -> 쓰지마셈
// 타입 추론
var d = 1;
// d = "hi"; // 위에서 d는 1, 즉 number로 작성함. -> ts는 추론을 통해 string으로 업데이트하는 것을 막음
