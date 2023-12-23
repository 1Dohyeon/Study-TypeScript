// 데코레이터 정의
function logClass(target: any) {
    // 클래스 생성자에 접근
    console.log(target);
}

// 클래스에 데코레이터 적용
@logClass
class MyClass {
    // 클래스 멤버에 데코레이터 적용
    @logProperty
    myProperty!: number;

    // 클래스 메서드에 데코레이터 적용
    @logMethod
    myMethod() {
        console.log("Hello, world!");
    }
}

// 프로퍼티 데코레이터 정의
function logProperty(target: any, key: string) {
    console.log(`Property Decorator: ${key}`);
}

// 메서드 데코레이터 정의
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Method Decorator: ${key}`);
}