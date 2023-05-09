import { Constants } from "./constants";

export interface ICity {
    name: string;
    code: string;
}

export interface ITaxes {
    irpf: number;
    socialSecurity: number;
    taxes: number;
    salary: number;
}

export class City implements ICity {
    name: string;
    code: string;
    constructor(n: string, c: string) {
        this.name = n;
        this.code = c;
    }

    calculateTaxes(salaryTotal: number): ITaxes {
        return {
            irpf: 0,
            socialSecurity: 0,
            taxes: 0,
            salary: 0
        };
    }
}

export class MadridCity extends City {
    
    constructor() {
        super(Constants.CITY_MADRID, Constants.CODE_MADRID)
    }

}