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
