import { Constants } from "../constants";
import { City } from "./city-model";

export class MadridCity extends City {

    override percentIRPF: number = 0.2;
    override percentSocialSecurity: number = 0.1;
    
    constructor() {
        super(Constants.CITY_MADRID, Constants.CODE_MADRID);
    }

    // override calculateTaxes(salaryTotal: number): ITaxes {
    //     return this.calculateTaxes(salaryTotal);
    // }
}