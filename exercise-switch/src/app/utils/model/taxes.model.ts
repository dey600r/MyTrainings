import { ITaxes } from "../interfaces";

export class Taxes implements ITaxes {
    irpf: number = 0;
    socialSecurity: number = 0;
    taxes: number = 0;
    salary: number = 0;
}