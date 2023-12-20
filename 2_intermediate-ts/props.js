// tsc 2_intermediate-ts/props.ts && node 2_intermediate-ts/props.js
function prt(params) {
    if ("name" in params)
        console.log(params.name);
    else if ("school" in params)
        console.log(params.school);
    else if ("city" in params)
        console.log(params.city);
    else
        console.log("error 500");
}
prt({ name: "dh" });
