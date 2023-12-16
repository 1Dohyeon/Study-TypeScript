console.log("hello world");

// 타입 주석
const a: number = 22;
const aa: number = Number("22");
const b: string = "hi ts";
const ba: string = String(123);
const c: boolean = true;

// any - 다 들어감 -> 쓰지마셈
// number - 숫자(int, long, double) 다.
// string - "" '' ``
// boolean - true, false
// object - {} -> 객체계의 any -> 쓰지마셈


// 타입 추론
let d = 1;
// d = "hi"; // 위에서 d는 1, 즉 number로 작성함. -> ts는 추론을 통해 string으로 업데이트하는 것을 막음
