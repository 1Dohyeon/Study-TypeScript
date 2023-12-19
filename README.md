# Study-TypeScript
TS의 기본기와 응용 공부

### 1. ts 환경
#### 1.1 환경 설정
```
node -v
npm -v

npm install -g typescript
tsc -v

npm init
tsc --init
```

#### 1.2 컴파일
```
tsc 파일 이름.ts(ex: 1_basic-ts/ano.ts -> 1_basoc-ts 폴더 내의 ano.ts 파일)
```
ts를 js로 컴파일하기 위해서 위 명령문을 작성해야 한다. 자바스크립트로 컴파일 된 파일을 실행시키기 위해서는 다음과 같이 명령어를 실행시킨다 :
```
node 1_basic-ts/ano.js
```

위 과정을 한줄로 작성하려면 아래와 같이 작성하면 된다 :
```
tsc 파일 이름.ts && node 파일 이름.js
```

### function
```
const multiple1: (a: number, b: number) => () => number = (a: number, b: number): (() => number) => {
    return () => {
        return a * b * 2;
    };
};
```
const multiple1: (a: number, b: number) => () => number: 이 부분은 multiple1이라는 변수가 함수를 가리키는데, 이 함수는 number 타입의 매개변수 a와 b를 받고, 함수를 호출하면 다시 함수를 반환하는 구조입니다. 그리고 반환되는 함수는 다시 호출하면 number를 반환합니다.

= (a: number, b: number): (() => number) => {...}: 이 부분은 multiple1 변수에 할당되는 함수의 구현입니다. 이 함수는 a와 b를 받아들이는 함수이고, 호출되면 () => number 형태의 함수를 반환합니다.

구현된 함수 내용은 간단히 말하면, 매개변수 a와 b를 받아들이는 함수가 호출될 때마다, a * b * 2를 반환하는 함수를 생성하여 반환합니다.