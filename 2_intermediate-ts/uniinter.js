// tsc 2_intermediate-ts/uniinter.ts && node 2_intermediate-ts/uniinter.js
// 1. union 합집합
var nameOrAge;
nameOrAge = "dh";
nameOrAge = 22;
var printUnion = function (params) {
    // name 정보가 들어왔을 때
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때
    if ("age" in params) {
        console.log(params.age);
    }
};
printUnion({ name: "dh" });
function search(params) {
    console.log(params.age + " " + params.name);
}
search({ age: 22, name: "dh" });
