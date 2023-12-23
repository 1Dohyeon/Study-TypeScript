### 2.1 Class

**2.1.1 Class 기본**

``` ts
class UserInfo {
    name: string;
    age: number;
    city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
```

위 코드처럼 `class` 를 앞에 붙여서 클래스를 생성한다. 또한 생성자는 `constructor` 을 통해서 생성하면 된다. 개인적으로 자바와 비슷하면서 형태가 더 직관적인 것 같다.

클래스 객체를 생성할 때는 다음과 같이 생성하면 된다.
``` ts
const user = new UserInfo("Dohyeon", 22, "seoul");
console.log(user.name, user.age, user.city);
```

타입스크립트도 자바처럼 `private` 와 `protected` 가 존재한다. 이것은 `console.log(user.name)` 와 같이 외부의 접근을 막는다. 하지만 `protected` 는 상속된 클래스는 접근할 수 있게 허용한다.

`private` 를 선언할 때는 다음과 같이 선언하면 된다 :
``` ts
class UserInfo2 {

    public name: string;
    private _age: number;
    public city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this._age = age;
        this.city = city;
    }
}
```

`private` 로 선언한 필드나 메서드는 앞에 `_` 를 붙여서 더 보기 쉽게 알린다.

그렇다면 `private` 로 선언한 필드나 메서드에는 어떻게 접근하는 것이 좋을까? 이 내용은 2.1.2 에서 다룬다.

**2.1.2 getter, setter**

``` ts
class UserInfo2 {
    public name: string;
    private _age: number;
    public city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this._age = age;
        this.city = city;
    }

    get age(): number {
        return this._age
    }

    set age(newAge: number) {
        this._age = newAge;
    }
}
```

자바스크립트처럼 `get` 과 `set` 메서드가 있다. 자바에서는 `void set`, `리턴타입 get` 이런식으로 따로 선언했지만 그럴 필요가 없다. `default` 로 선언되었기에 외부에서 이 메서드를 통해서 `private` 필드에 접근할 수 있다.

**2.1.3 readyonly**

readyonly는 값을 아예 바꿀 수 없도록 지정한다. 아래와 같이 시용된다 :
``` ts
class Transfer {
	private readonly _ID;
	private _PW;
	
	constructor(ID: string, PW: string) {
		this._ID = ID;
		this.PW = PW;
	}
}
```

**2.1.4 코드 줄이기**

생성자에서 파라미터를 받는 부분에서 직접 필드 생성까지 한번해 하여 코드를 줄일 수 있다 :
``` ts
class Transfer {
	constructor(
		public readonly ID: string, 
		public readonly PW: string
	) {
        this.ID = ID;
        this.PW = PW;
    }
}
```

****
### 2.2 Union AND Intersection

**2.2.1 union 합집합**

파라미터로 어떤 타입이 들어올 지 모를 때 다음과 같이 `type` 을 통해서 타입집합을 생성하고, 이 집합 속한 타입의 파라미터를 받을 수 있다.

``` ts
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
```

**2.2.2 intersection 교집합**

교집합은 말 그대로 타입이 모두 충족될 경우이다.

``` ts
interface Name2 {
    name: string;
}
interface Age2 {
    age: number;
}
```

위와 같은 인터페이스가 있다고 가정해보자. 이 인터페이스의 타입을 동시에 만족하는 타입을 다음과 같이 선언한다 :
``` ts
type forSearch = Name2 & Age2;
```

그렇다면 각 인터페이스에 있는 모든 속성을 가진 객체만 받을 수 있는 메서드를 아래와 같이 만들 수 있다 :
``` ts
function search(params: forSearch) {
    console.log(params.age + " " + params.name);
}
search({age: 22, name: "dh"})
```

---
### 2.3 Key 설정

**2.3.1 keyof**

``` ts
interface Book {
    title: string;
    publisher: string;
    price: number;
    author: string;
}

function prt(params: Book, key: string) {
    console.log(params[key]);
}
```

위와 같이 한 인터페이스 객체의 한 속성만을 출력해주는 메서드가 있다고 가정해보자. 함수 호출은 다음과 같이 할 수 있다 :
``` ts
prt(
    {
        title: "TS",
        publisher: "인프런",
        price: 29700,
        author: "도현",
    },"title"
);
```

이렇게 되면 파라미터 `key` 부분에 `string` 타입을 가진 아무거나가 들어갈 수 있다. 이를 방지하기 위해서 다음과 같이 `keyof` 를 사용한다 :
``` ts
function prt(params: Book, key: keyof Book) {
    console.log(params[key]);
}
```

`keyof`를 사용하므오써 파라미터의 속성만 언급할 수 있게 되었다.

---
### 2.4 제네릭

**2.4.1 개념**

제네릭(Generic)은 함수, 클래스, 인터페이스 등을 작성할 때 타입을 매개 변수화하는 방법이다. 이를 통해서 코드의 재사용성을 높일 수 있고, 타입 안정성을 강화할 수 있다.

``` ts
function printNum(params: number) {
    console.log(typeof params);
}

printType("아무거나");
printType(22);
printType({});
```

예를 들어 위 예제와 같은 함수가 있을 때 매개변수로 `number` 타입밖에 받지 못한다. 그렇기에 이 함수를 다른 타입에서도 재사용을 하고 싶을 때, 사용할 수 없게된다. 따라서 제네릭 타입으로 타입을 매개변수화 하여 다른 타입도 함수를 이용할 수 있게 한다. 제네릭 예제는 클래스이다 :

``` ts
class GeneClass<T> {
    private value: T;
    
    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let numberGeneClass = new GeneClass<number>(42);
console.log(numberGeneClass.getValue()); // 출력: 42

let stringGeneClass = new GeneClass<string>("Hello, world");
console.log(stringGeneClass.getValue()); // 출력: Hello, world

```

위 예시에서는 객체 생성시에 값을 제네릭 타입으로 받기 때문에 `number` 와 `string` 모두 이용할 수 있다. 여기서 의문점이 든다. 왜 제네릭을 쓸까? `any` 를 써도 되는 것 아닐까?

**2.4.2 extends**

`any` 는 해당 변수나 함수에 대한 모든 타입의 값이 허용되기 때문에 타입 검사가 무력화된다. 따라서 컴파일러가 타입에 대한 안전성을 제공하지 않고, 애초에 타입 정보가 없는 것이기에 개발자가 타입 정보를 활용하여 코드를 유지보수 하는 것이 힘들어진다.

제네릭은 `any` 와 다르게 타입을 다음과 같이 제한할 수 있다 :
``` ts
function prt<T extends string | number, U extends boolean | object>
(params: T, params2: U) { 

    if(typeof params === "string") console.log("문자열");
    else if(typeof params === "number") console.log("숫자");

    if(typeof params2 === "boolean") console.log("불리언");
    else if(typeof params2 === "object") console.log("객체");
}

prt<string, boolean>("hello world", true);
prt<number, object>(123, {});
```

위 예시처럼 `extends` 를 활용하여 특정 타입만 들어갈 수 있도록 제한해 둘 수 있다.

---
### 2.5 데코레이터

**2.5.1 개념**

스프링의 'annotation' 을 생각하면 쉽다. 아래 예제 코드처럼 `@logClass`, `@logProperty`, `@logMethod`와 같이 `@` 기호로 시작하는 부분이 데코레이터이다. 데코레이터 함수는 특정 규칙에 따라 호출되며, 클래스나 클래스 멤버에 대한 메타데이터를 조작하거나 추가할 수 있다.

``` ts
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
    myProperty: number;

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
```

위 예제를 실행하면 함수를 따로 부르지도 않았는데 `@` 가 붙은 함수나 클래스가 컴파일 되면서 자동으로 실행된다 :

```
Property Decorator: myProperty
Method Decorator: myMethod
[class MyClass]
```

즉, 데코레이터 함수는 해당 데코레이터가 적용된 클래스, 메서드, 프로퍼티 등이 컴파일될 때 자동으로 실행되는 것을 알 수 있다. 따라서 이를 통해 컴파일 시점에서 메타데이터를 추가하거나 클래스/함수 동작을 수정할 수 있다.

---
### 2.6 모듈

**2.6.1 개념**

모듈의 개념을 그냥 설명하자면 프로그램을 여러 파일로 나누고 각 파일 간 코드를 공유할 수 있게 해주는 것이다. 다른 파일의 메서드를 불러와서 여러곳에 활용하며 코드를 더 쉽게 확장할 수 있도록 돕는다. 

아래 2.6.2 에서는 코드를 어떻게 내보내고 받는지에 대해서 다룬다.

**2.6.2 모듈 생성**

``` ts
export namespace Math {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function minus(a: number, b: number): number {
        return a + b;
    }
}
```

위 코드는 함수를 내보내는 페이지이다. `export` 를 이용하여 내보내고 싶은 메서드나 클래스를 내보낼 수 있다. `namespace` 는 받는 파일이 내보내는 메서드를 잘 찾을 수 있도록 그룹화 한 것이다. 만약 동일 이름의 메서드가 존재한다고 하면 찾기 힘들 것이다.

따라서 아래 예시 코드처럼 다른 파일의 메서드를 불러올 수 있다 :
``` ts
import * as m from "./module1";

console.log(m.Math.add(1, 2), m.Math.minus(5, 2));
```
