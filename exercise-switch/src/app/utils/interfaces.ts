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

export interface IMatrixCitiesTaxes {
    code: string;
    callback(salary: number, donation: boolean): ITaxes;
}

export interface IDictionary {
    [code: string]: any;
}

