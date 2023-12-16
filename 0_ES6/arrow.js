// 기본 func
function add(a, b) {
    return a + b; 
}

// arrow func 기본형
const add2 = (a, b) => {
    return a + b;
};

// 1줄일때 return 생략
const add3 = (a, b) => a + b;

// param 1개일 때
const add4 = a => a + 4;

// 객체 반환
const add5 = (a) => {
    return { hello: "world" };
};

// 객체를 반환할 때, 한줄로 작성하게 될 경우(return 없이 작성할 경우) 
// "{ }" 중괄호가 객체를 가리키는 중괄호인지, 리턴을 할 전체 중괄호인지 인식하지 못하기 때문에 소괄호로 감싸줌.
const add6 = (a) => ({ hello: "world" });