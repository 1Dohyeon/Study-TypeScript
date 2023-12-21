// tsc 2_intermediate-ts/genprac.ts && node 2_intermediate-ts/genprac.js

/** 제네릭을 왜 사용할까
 * interface나 객체에 타입이 많아질 때 코드를 유연하게 수정가능
 * 
 */
// 타입 제한을 걸 때 용이함
interface Ob1 {
    name: string;
    age: number;
}

interface Ob2 {
    city: string;
    phone: string;
}

function prtKey<T extends object, U extends keyof T>(params: T, key: U): T[U] {
    console.log(params[key]);
    return params[key];
}
prtKey<Ob1, keyof Ob1>({ name: "dohyeon", age: 22 }, "name");   // extends 와 keyof 로 제한을 둬서 "name" 대신 "name1111" 과 같이 잘못입력하면 에러가 뜸
// 즉 name과 age 등 Ob1 값만 키가 될 수 있다. 아래도 마찬가지
prtKey<Ob2, keyof Ob2>({ city: "seoul", phone: "010 1234 5678" }, "phone");

// 클래스 제네릭

class ClassName<T> {
    constructor(private _data: T) {}

    set data(newData: T) {
        this._data = newData;
    }

    get data(): T{
        return this._data;
    }
}