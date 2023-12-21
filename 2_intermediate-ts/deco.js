// tsc --experimentalDecorators 2_intermediate-ts/deco.ts && node 2_intermediate-ts/deco.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수임
function InitClass(constructor) {
    console.log("InitClass : ", constructor);
}
// 2. 데코레이터는 무조건 class 와만 쓰인다.
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass = __decorate([
        InitClass
    ], ExampleClass);
    return ExampleClass;
}());
// 위까지만 하면 `InitClass :  [Function: ExampleClass]` 가 출력됨을 알 수 있음.
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();
function Column(params) {
    console.log("Column !!", params);
}
var ExampleController = /** @class */ (function () {
    function ExampleController(email) {
        this._email = email;
    }
    __decorate([
        Column("email")
    ], ExampleController.prototype, "_email", void 0);
    return ExampleController;
}());
