// 1. 타입
const man = {
    name: "dh",
    age: 22,
    // city: "seoul",
};

// city가 없을 경우 아래는 추론이 되어 에러표시가 뜸.
// console.log(man.city)

// params가 어느 타입인지도 모르고 city라는 필드가 있는지도 모른다.
// 이런 상황에서 데이터 베이스에 city를 넣는다고 생각하면 끔찍하다.
function prt(params: any) {
    console.log(params.city ?? "default city");
}
prt(man);

// 2. 명세, 타입, 클래스를 만들때
interface Person {
    name: string;
    age: number;
}

// 아래는 파라미터의 타입(interface Person)을 지정해줬기에 에러가 표시된다.
/** 
 * function prt2(params: Person) {
    console.log(params.city ?? "default city");
}
prt(man);
*/

// 3. ?
interface Person2 {
    name: string;
    age: number;
    city?: string;
}
function prt2(params: Person2) {
    console.log(params?.city ?? "default city");
}
prt(man);

// 4. 익명 인터페이스
const man2: {name: string; age: number; city: string} = {
    name: "dh",
    age: 22,
    city: "seoul",
}