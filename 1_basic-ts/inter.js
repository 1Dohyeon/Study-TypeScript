// 1. 타입
var man = {
    name: "dh",
    age: 22,
    city: "seoul",
};
// 아래는 추론이 되어 에러표시가 뜸.
// console.log(man.city)
// params가 어느 타입인지도 모르고 city라는 필드가 있는지도 모른다.
// 이런 상황에서 데이터 베이스에 city를 넣는다고 생각하면 끔찍하다.
function prt(params) {
    var _a;
    console.log((_a = params.city) !== null && _a !== void 0 ? _a : "default city");
}
prt(man);
function prt2(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default city");
}
prt(man);
// 4. 익명 인터페이스
var man2 = {
    name: "dh",
    age: 22,
    city: "seoul",
};
