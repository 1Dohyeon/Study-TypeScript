### 1.1 타입

**1.1.1 타입**

타입스크립트는 자바스크립트와 달리 변수에 타입을 부여할 수 있고, 타입이 다르다면 타입에러를 뜨게할 수도 있다. 다음과 같이 변수에 타입을 설정할 수 있다 :
``` ts
const a: number = 22;
```

크게 5개의 타입으로 나뉜다 :
1. any : 모든 타입을 다 수용할 수 있다. 따라서 타입을 쓰는 의미가 없기에 안쓰는 것을 추천
2. object : 객체계의 any이다. 이것도 안쓰는 것을 추천
3. number : int, short 등 숫자 데이터 타입을 의미한다.
4. string : 문자열 데이터 타입
5. boolean : true or false

**1.1.2 타입 추론**

`let d = 1;` 이라고 변수를 선언하고 다시 `d` 를 수정할 때, 문자열을 저장하려고 한다면 에러가 뜬다. `d` 를 `number` 타입으로 추론했기 때문이다.

또한 객체를 아래와 같이 생성했다고 가정해보자 :
``` ts
const man = {
    name: "dh",
    age: 22,
};
```
여기서 `console.log(man.city)` 를 실행한다면 없는 속성이기 때문에 추론이 되어 에러 표시가 뜬다.

그렇다면 만약 함수를 통해서 없는 객체의 속성에 접근하면 어떻게 될까?
``` ts
function prt(params: any) {
    console.log(params.city);
}
prt(man);
```
위 메서드를 실행해보면 `undefined` 가 나타남을 알 수 있다. 하지만 만약 함수 내부의 로직이 데이터베이스에 접근하는 등 복잡한 로직이라면 에러가 떠서 프로그램이 다운될 것이다. 어떻게 해결하면 좋을까. `console.log(params?.city ?? "default city");` 와 같이 값이 없을 경우 따로 진행시키도록 할 수 있다. 

옵셔널 체이닝(`?.`) 을 통해서 `params` 가 정의되어 있으면 `params.city` 를 참조하고 그렇지 않으면 `undefined` 를 반환하도록 한다. 이는 `params`가 `null` 또는 `undefined`인 경우에도 에러를 방지하면서 안전하게 프로퍼티에 접근할 수 있게 한다.

`??`: 널 병합 연산자는 왼쪽 피연산자가 `null` 또는 `undefined`일 때만 오른쪽 피연산자를 반환한다.

### 1.2 Interface

``` ts
interface Person {
    name: string;
    age: number;
}
```
인터페이스를 선언하는 것은 객체와 모양이 비슷하지만 마지막에 `,` 가 아닌 `;`를 붙인다. 인터페이스란 객체를 생성하는 것이 아니라 설계한다고 생각하면 된다. 즉 객체의 구조를 정의하는 것이다.

### 1.3 Array

**1.3.1 배열 선언**
``` ts
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];
```
위와 같이 배열을 선언할 수 있다. <> 는 제네릭 타입을 의미한다. 자바스크립트처럼 배열 안에 원소 타입을 다 다르게 지정할  수 있지만 쓰이지는 않는다.

**1.3.2 튜플**
``` ts
const arr7: [number, string, object, any[]] = [1, "hi", {}, []]
```
타입스크립트는 튜플이 따로 없다. 따라서 배열을 이용해서 만들 수 있는데, 위처럼 타입을 지정하면서 배열의 크기까지 지정하여 튜플 형태를 띤 배열을 생성할 수 있다. 튜플이란 배열의 길이와 안에 원소를 바꿀 수 없는 것이다. 불변성 유지의 특성을 활용할 때 쓰인다.

### 1.4 enum
``` ts
enum categoryEnum {
    // 아무 설정도 안하면 default 값으로 0, 1, 2 가 담김
    H = "H",
    K = "K",
    S = "S",
}
const category: categoryEnum = categoryEnum.K;
```
enum 은 열거형을 나타내며 상수 집합을 정의하고 코드를 읽기 쉽고 유지 보수하기 쉽게 만드는데 도움을 준다.

### 1.5 function

**1.5.1 함수 선언**
``` ts
const minusString = (a: number, b: number): string => String(a - b);
```
함수를 선언할 때 다음과 같이 함수에도 타입을 지정해 줄 수 있다. `number` 타입 파라미터 `a, b` 를 받고 `string` 을 반환하는 함수이다. 

이것은 함수를 선언한 것이고, 아래와 같이 함수 표현식을 변수에 할당할 수 있다 : 
``` ts
const minus2: (a: number, b: number) => string = (
    a: number,
    b: number
): string => String(a - b);
```

이렇게 표현식을 쓰다보면 아래 예시처럼 코드가 복잡해질 수도 있다.
``` ts
const multiple1: (a: number, b: number) => () => number = (a: number, b: number): (() => number) => {
    return () => {
        return a * b * 2;
    };
};
```

**1.5.2 타입 치환**

`type` 을 이용하여 타입 따로 지정하고 복잡해 보이는 함수의 타입을 치환하여 간단하게 코드를 짤 수 있다.
``` ts
type subMultiple = () => number; // 파라미터를 받지 않고 number 을 반환
type mainMultiple = (a: number, b: number) => subMultiple;

// 따라서 위 multiple1 함수는 아래와 같이 변경 가능
const multiple2: mainMultiple = (a: number, b: number): subMultiple => {
    return () => {
        return a * b * 2;
    };
};
```

### 1.6 null & undefined

null 과 undefined 는 같은 값이라고 봐도 무방하다. undefined 는 모든 타입의 최하위 계층이다. 굳이 차이를 두자면 다음과 같다 :

- `undefined`: 변수가 선언되었지만 값을 할당하지 않은 경우 또는 함수에서 명시적으로 값을 반환하지 않은 경우에 자동으로 할당되는 값.
- `null`: 프로그래머가 명시적으로 값이 없음을 나타내기 위해 할당하는 값.