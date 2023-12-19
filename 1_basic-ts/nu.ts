// 1. null undefined 같은 값이라고 봐도 무방
const un: undefined = undefined;

// 2. undefined 는 2개가 있다.

// 3. 최하위 계층 -> undefined 는 모든 타입의 최하위 계층임
interface Man {
    name: string;
}

function printName(params: Man) {
    console.log("printName on!");
    console.log(params.name);
    // console.log(params?.name ?? "default value"); // 이거 쓰면 에러 안뜸.
}

printName({name: "dohyeon"});
// printName(undefined); // 실행시키면 console.log("printName on!"); 는 작동함.