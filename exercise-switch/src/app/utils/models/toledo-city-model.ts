import { Constants } from "../constants";
import { City } from "./city-model";

export class ToledoCity extends City {

    protected override percentIRPF: number = 0.4;
    override percentSocialSecurity: number = 0;
    override moneyDonation: number = 100;
    
    constructor() {
        super(Constants.CITY_TOLEDO, Constants.CODE_TOLEDO);
    }
}