// tsc 2_intermediate-ts/generic.ts && node 2_intermediate-ts/generic.js
function prt(params) {
    console.log(typeof params.data);
}
prt({ data: [22, 23, 24, 25, 26], name: "dohyeon" });
