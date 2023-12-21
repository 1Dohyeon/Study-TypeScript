interface City {
    name: string;
}
interface School extends City {
    year: number;
}

type ConditionType = School extends City ? number : string;
const test: ConditionType = 123;