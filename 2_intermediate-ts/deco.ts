// // tsc --experimentalDecorators 2_intermediate-ts/deco.ts && node 2_intermediate-ts/deco.js

// // 1. 데코레이터는 함수임
// function InitClass(constructor: Function) {
//     console.log("InitClass : ", constructor);
// }

// // 2. 데코레이터는 무조건 class 와만 쓰인다.
// @InitClass
// class ExampleClass {
//     constructor() {}
// }

// // 위까지만 하면 `InitClass :  [Function: ExampleClass]` 가 출력됨을 알 수 있음.

// // 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// // new ExampleClass();


// function Column(params: any): any {
//     console.log("Column !!", params);
// }

// class ExampleController {
    
//     @Column("email")
//     private _email: string;

//     constructor(email: string) {
//         this._email = email;
//     }
// }