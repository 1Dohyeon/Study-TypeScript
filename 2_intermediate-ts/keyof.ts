// tsc 2_intermediate-ts/keyof.ts && node 2_intermediate-ts/keyof.js

interface Book {
    title: string;
    publisher: string;
    price: number;
    author: string;
}

// Book 내의 속성으로만 key를 설정 가능
function prt(params: Book, key: keyof Book) {
    console.log(params[key]);
}

prt(
    {
        title: "TS",
        publisher: "인프런",
        price: 29700,
        author: "도현",
    },"title"
);











