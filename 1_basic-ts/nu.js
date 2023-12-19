// 1. null undefined 같은 값이라고 봐도 무방
var un = undefined;
function printName(params) {
    console.log("printName on!");
    console.log(params.name);
    // console.log(params?.name ?? "default value"); // 이거 쓰면 에러 안뜸.
}
printName({ name: "dohyeon" });
// printName(undefined); // 실행시키면 console.log("printName on!"); 는 작동함.
