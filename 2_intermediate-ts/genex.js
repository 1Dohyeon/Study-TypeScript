// tsc 2_intermediate-ts/genex.ts && node 2_intermediate-ts/genex.js
// extends 1 제한 안정성, 2 보장
// 1 extends를 이용하여 제너릭 타입에는 string 와 number 만 참조 가능하다고 제한 가능
function prt(params, params2) {
    if (typeof params === "string")
        console.log("문자열");
    else if (typeof params === "number")
        console.log("숫자");
    if (typeof params2 === "boolean")
        console.log("불리언");
    else if (typeof params2 === "object")
        console.log("객체");
}
prt("hello world", true);
prt(123, {});
function execute(params) {
    params.hi("dohyeon");
}
execute({
    hi: function (name) {
        console.log("hi", name);
    },
});
