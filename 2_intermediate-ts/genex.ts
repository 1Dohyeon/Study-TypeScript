// tsc 2_intermediate-ts/genex.ts && node 2_intermediate-ts/genex.js

// extends 1 제한 안정성, 2 보장

// 1 extends를 이용하여 제너릭 타입에는 string 와 number 만 참조 가능하다고 제한 가능
function prt<T extends string | number, U>(params: T, params2: U) { // 함수에도 제너릭 표현 가능
    if(typeof params === "string") console.log("문자열");
    else if(typeof params === "number") console.log("숫자");

    if(typeof params2 === "boolean") console.log("불리언");
    else if(typeof params2 === "object") console.log("객체");
}
prt<string, boolean>("hello world", true);
prt<number, object>(123, {});

// 2
// 어떤 객체가 hi라는 메서드가 있는지 보장이 되지 않아서 에러가 뜸.
// function execute<T extends object>(params: T) {
//     params.hi();
// }

// execute({ 
//     hi(){
//         console.log("hi");
//     }, 
// })

// 인터페이스를 통해서 명시해줌
interface IHi {
    hi: (name: string) => void;
}

function execute<T extends IHi>(params: T) {
    params.hi("dohyeon");
}

execute({ 
    hi(name: string){
        console.log("hi", name);
    }, 
})