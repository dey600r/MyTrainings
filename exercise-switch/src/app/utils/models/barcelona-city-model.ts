import { Constants } from "../constants";
import { ITaxes } from "../interfaces";
import { City } from "./city-model";

export class BarcelonaCity extends City {

    override percentSocialSecurity: number = 0.2;
    override moneyDonation: number = 300;
    
    constructor() {
        super(Constants.CITY_BARCELONA, Constants.CODE_BARCELONA);
    }

    override calculateTaxes(salaryTotal: number, donation: boolean): ITaxes {
        const irpf = this.calculateMoneyFromPercent(salaryTotal, this.percentIRPF);
        const socialSecurity = this.calculateMoneyFromPercent(salaryTotal, this.percentSocialSecurity);
        const taxes = this.calculateAllTaxes(irpf, socialSecurity) + (donation ? this.moneyDonation : 0);
        return { irpf, socialSecurity, taxes, salary: this.calculateSalary(salaryTotal, taxes) };
    }
}