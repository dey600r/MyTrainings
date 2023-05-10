import { Constants } from "../constants";
import { City } from "./city-model";

export class ValenciaCity extends City {

    override percentIRPF: number = 0.1;
    override percentSocialSecurity: number = 0.1;
    override moneyDonation: number = 1000;
    
    constructor() {
        super(Constants.CITY_VALENCIA, Constants.CODE_VALENCIA);
    }
}