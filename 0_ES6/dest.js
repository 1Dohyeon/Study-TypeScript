// 구조 분해 할당(destructurize)


// 1. 생략 가능
const ID = "dh";

// 2. 만약 파라미터로 받은 ID와 PW 가 객체를 반환할 때, key와 value가 같을 경우 아래처럼 생략 가능
const register = (ID, PW) => ({ ID: ID, PW: PW});
const register2 = (ID, PW) => ({ ID, PW});
console.log(register2("dh", 1))


// 3. 객체에서 특정 필드만 추출
const {name: manName, age: manAge} = {
    name: "dh",
    age: 22,
    sex: "male",
};
console.log(manName, manAge);
// 2에서 key와 value가 같을 경우 생략 가능함을 배웠음.
const {name, age, sex} = {
    name: "dh",
    age: 22,
    sex: "male",
};
console.log(manName, manAge, sex);

// 4. 배열
const [first, second, third] = [true, false, "hi"]
// first -> true, second -> false, third -> "hi" 와 연결이됨.
console.log(first, second, third)

// 5. spread 연산자 (...)
const [first2, ...rest] = [true, false, "hi"];
console.log(first2, rest); // rest는 배열로 묶임

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5, 6];
console.log(arr2);

// 객체도 적용됨
const {name: name2, ...rest2} = {
    name: "dh",
    age: 22,
    sex: "male",
};
console.log(name2, rest2);  // name은 따로 빠지고 나머지는 객체로 묶임

console.log({
    name: "hello world",
    ...rest2,
    height: 173,
})
// 전부 객체로 묶임