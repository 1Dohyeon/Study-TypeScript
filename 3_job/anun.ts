// ts-node 3_job/anun.ts

// any 와 unknown

const user: any = {
    ID: "dohyeon",
};

console.log(user.name);
console.log(user.length);

const newUser: unknown = {
    ID: "dohyeon",
};

// unknown 은 알 수 없다면 에러를 띄움. 잘 안쓰임
// console.log(newUser.ID);
// console.log(newUser.name);
// console.log(newUser.length);