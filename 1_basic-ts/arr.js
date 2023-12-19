// 배열 타입 지정
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ["hi", "hello", "world"];
var arr4 = ["hi", "hello", "world"];
// 여러 타입을 한 배열에 담을 수는 있지만 사용 x
var arr5 = [1, true, false, "haha", {}];
var arr6 = [
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
arr6.forEach(function (e) { var _a; return console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : "default"); });
// 튜플: 배열의 길이 length 와 안에 원소를 바꿀 수 없음. 순서가 없음 .. 불변성 유지
var arr7 = [1, "hi", {}, []];
console.log(arr7);
arr7.push("hahaha");
console.log(arr7);
