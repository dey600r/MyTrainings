import { Constants } from "../constants";
import { City } from "./city-model";

export class GuadalajaraCity extends City {

    protected override percentIRPF: number = 0.1;
    override percentSocialSecurity: number = 0.1;
    override moneyDonation: number = 50;
    
    constructor() {
        super(Constants.CITY_GUADALAJARA, Constants.CODE_GUADALAJARA);
    }
}