// tsc 2_intermediate-ts/props.ts && node 2_intermediate-ts/props.js

// interface Name {
//     name: string;
// }

// interface School {
//     school: string;
// }

// interface City {
//     city: string;
// }

interface SuperKey {
    [props: string]: string;
}

function prt(params: SuperKey) {
    if ("name" in params) console.log(params.name);
    else if ("school" in params) console.log(params.school);
    else if ("city" in params) console.log(params.city);
    else console.log("error 500");
}
prt({name: "dh"});