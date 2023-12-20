// tsc 2_intermediate-ts/uniinter.ts && node 2_intermediate-ts/uniinter.js

// 1. union 합집합
let nameOrAge: string | number;
nameOrAge = "dh";
nameOrAge = 22;

interface Name {
    name: string;
}
interface Age {
    age: number;
}

type MyType = Name | Age
const printUnion = (params: MyType) => {
    // name 정보가 들어왔을 때
    if("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때
    if("age" in params) {
        console.log(params.age);
    }
}
printUnion( {name: "dh"} )

// 2. intersection 교집합
interface Name2 {
    name: string;
}
interface Age2 {
    age: number;
}
// const nameAndName: Name2 & Age2 = {
//     name: "도현",
//     age: 22,
// };

type forSearch = Name2 & Age2;
function search(params: forSearch) {
    console.log(params.age + " " + params.name);
}
search({age: 22, name: "dh"})
