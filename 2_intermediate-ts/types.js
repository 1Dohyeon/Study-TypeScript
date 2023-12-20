// tsc 2_intermediate-ts/types.ts && node 2_intermediate-ts/types.js
function login(params) {
    // ... 로그인
    console.log(params);
}
login({ name: "dh", age: 22 });
function searchBook(params) {
    // 책을 검색하는 로직
    console.log(params);
}
searchBook({ title: "TS", price: 29700 });
function addBookToCart(params) {
    // 책을 검색하는 로직
    console.log(params);
}
addBookToCart({ userName: "dh", bookName: "TS" });
