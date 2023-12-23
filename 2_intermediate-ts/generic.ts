// // tsc 2_intermediate-ts/generic.ts && node 2_intermediate-ts/generic.js

// function printType(params: any) {
//     console.log(typeof params);
// }

// printType("아무거나");
// printType(22);
// printType({});

// // 타입이 여러개일 때 제네릭 이용하여 지정 가능
// // interface Gene<T> {
// //     data: T;
// // }

// // function prt(params: Gene<string>) {
// //     console.log(typeof params.data);
// // }

// // prt({data: "23"})

// interface Gene<T, U> {
//     data: Array<T>; // 제네릭을 배열에 넘길 수도 있음
//     name: U;
// }

// function prt(params: Gene<number, string>) {
//     console.log(typeof params.data);
// }

// prt({data: [22, 23, 24, 25, 26], name: "dohyeon"})