function add1(a: number, b: number): void {
    // void: 반환을 안한다는 뜻
    console.log("hello world");
};
add1(1, 2)

const minus = (a: number, b: number): number => a - b;
const minusString = (a: number, b: number): string => String(a - b);

const minus2: (a: number, b: number) => string = (
    a: number,
    b: number
): string => String(a - b);

// 어질어질한 문법
const multiple1: (a: number, b: number) => () => number = (a: number, b: number): (() => number) => {
    return () => {
        return a * b * 2;
    };
};

// 따라서 type을 씀 -> 타입을 치환
// type typeName = any; 형태
type addFunc = (a: number, b: number) => string; // number 변수 2개를 파라미터로 받고 string 을 반환하는 함수 타입
type subMultiple = () => number; // 파라미터를 받지 않고 number 을 반환
type mainMultiple = (a: number, b: number) => subMultiple;

// 따라서 위 multiple1 함수는 아래와 같이 변경 가능
const multiple2: mainMultiple = (a: number, b: number): subMultiple => {
    return () => {
        return a * b * 2;
    };
};

function sendError(): void {
    console.log("에러 발생");
}
const result = sendError();
console.log("result :", result);    // sendError()는 void 메서드이므로 result에는 아무것도 넘어오지 않음 undefined

// throw: return은 아니지만 값이 넘어옴
function sendError2(): void {
    throw { erroCode: 500, message: "internal server error" };
}
const result2 = sendError2();
console.log("result :", result2);
