// 배열 타입 지정
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];

// 여러 타입을 한 배열에 담을 수는 있지만 사용 x
const arr5 = [1, true, false, "haha", {}];

// 객체 이용 가능
interface Person {
    name: string;
    age: number;
    city?: string;
}

const arr6: Person[] = [
    {
        name: "dh",
        age: 22,
        city: "seoul",
    },
    {
        name: "dh",
        age: 22,
    },
    {
        name: "dh",
        age: 22,
        city: "seoul",
    },
    {
        name: "dh",
        age: 22,
        city: "seoul",
    },
    {
        name: "dh",
        age: 22,
        city: "seoul",
    },
];

arr6.forEach(e => console.log(e?.city ?? "default"));

// 튜플: 배열의 길이 length 와 안에 원소를 바꿀 수 없음. 순서가 없음 .. 불변성 유지
const arr7: [number, string, object, any[]] = [1, "hi", {}, []]

console.log(arr7);
arr7.push("hahaha");
console.log(arr7);