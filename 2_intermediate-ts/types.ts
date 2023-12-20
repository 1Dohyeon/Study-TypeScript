// tsc 2_intermediate-ts/types.ts && node 2_intermediate-ts/types.js

// 타입이 나눠질 경우
interface User {
    name: string;
    age: number;
}

interface Book2 {
    title: string;
    price: number;
}

interface Cart {
    userName: string;
    bookName: string;
}

// 타입을 한곳에 모아둠
interface UserCartService {
    user: User;
    book: Book2;
    cart: Cart;
}

function login(params: UserCartService["user"]) {
    // ... 로그인
    console.log(params);
}
login({ name: "dh", age: 22 });

function searchBook(params: UserCartService["book"]) {
    // 책을 검색하는 로직
    console.log(params);
}
searchBook({ title: "TS", price: 29700 });

function addBookToCart(params: UserCartService["cart"]) {
    // 책을 검색하는 로직
    console.log(params);
}
addBookToCart({userName: "dh", bookName: "TS"})