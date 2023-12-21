// tsc 3_job/assert.ts && node 3_job/assert.js

// npm install -g ts-node 
// 터미널에 위 명령어를 작성하면 ts-node 3_job/assert.ts -> 이걸로만 ts 실행가능, js를 따로 만들지 않음

// npm install -D @types/node
// npm install -D @tsconfig/node19

// const testText = document.querySelector("#someText")!;
// console.log(testText.id);  // id가 없을 수도 있기에 위에 ! 를 붙임

// html 요소임을 알려서 에러를 없앨 수도 있음
// const testText = document.querySelector("#someText") as HTMLElement;
// console.log(testText?.id);  

interface Exam {
    value: number;
}

const example: object = { value: 1 };
// console.log(example.value);

// 1. as
console.log((example as Exam).value);
// 2, <>
console.log((<Exam>example).value);