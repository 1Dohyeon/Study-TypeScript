// tsc 2_intermediate-ts/keyof.ts && node 2_intermediate-ts/keyof.js
// Book 내의 속성으로만 key를 설정 가능
function prt(params, key) {
    console.log(params[key]);
}
prt({
    title: "TS",
    publisher: "인프런",
    price: 29700,
    author: "도현",
}, "title");
