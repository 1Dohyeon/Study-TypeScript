function prt4() {
    console.log("hello world4")
}

const ob = {
    name: "dh",
    age: 22,
    
    func1: function prt() {
        console.log("hello world1")
    },

    func2: () => {
        console.log("hello world2");
    },

    func3() {
        console.log("hello world3")
    },

    func4: prt4, // 같다면 생략 가능
}

ob.func1();
ob.func2();
ob.func3();
ob.func4();

const test = "test word";
const liter = `test word but ${test}`;
console.log(liter);

// 변수 명을 동적으로 만들고 싶은 경우
const ob2 = {
    [test]: 1,
    [1*2*3]: 6, // [] 안은 어차피 문자열로 바뀜
};
console.log(ob2);







