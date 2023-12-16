const ob = {
    name: "dh",
    age: 22,
    uni: "mu",
    major: "sw",
};

// 아래 country는 없는 key값이기에 undefined 가 뜸
console.log(ob.country);

// ob.country 가 없다면 undefined 출력
console.log(ob?.country?.hi);

// 값이 있으면 있는 값 출력, 없으면 "seoul" 출력
console.log(ob.country ? ob.country : "seoul"); 
console.log(ob.country ?? "seoul"); // 위 문법을 줄인 것