// tsc 2_intermediate-ts/transfer.ts && node 2_intermediate-ts/transfer.js

class Transfer {
    // private는 접근 제한자. readyonly는 값을 아예 못바꿈(like final)
    // public readonly ID;
    // public readonly PW;

    // constructor(ID: string, PW: string) {
    //     this.ID = ID;
    //     this.PW = PW;
    // }

    // 위 코드와 아래는 같은 코드임
    constructor(public readonly ID: string, public readonly PW: string) {
        this.ID = ID;
        this.PW = PW;
    }

}

const LoginDTO = new Transfer("hi", "1234");
// LoginDTO.ID = "set"; // public 이지만, readonly 때문에 값을 바꿀 수 없음.
console.log(LoginDTO);
console.log(LoginDTO.ID); // 하지만 접근은 가능함