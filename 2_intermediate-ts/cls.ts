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

const user = new UserInfo("도현", 22, "seoul");
console.log(user.name, user.age, user.city);

// 밖에서 수정을 할 수 있음 -> 안좋은 방법
user.age = 27;
console.log(user.name, user.age, user.city);

// public, private(아무도 접근 못함), protected(상속한 애들도 접근 가능)
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

const user2 = new UserInfo2("도현", 21, "seoul");
// console.log(user2.name, user2._age, user2.city); // user2._age 에 따로 접근할 수 없음
console.log(user2.name, user2.age, user2.city); // user2.age 는 get age() 를 불러옴