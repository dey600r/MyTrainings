import { ICity, ITaxes } from "../interfaces";

export class City implements ICity {
    name: string;
    code: string;

    protected percentIRPF: number = 0.3;
    protected percentSocialSecurity: number = 0.4;
    protected moneyDonation: number = 0;

    constructor(n: string, c: string) {
        this.name = n;
        this.code = c;
    }

    calculateMoneyFromPercent(salaryTotal: number, percent: number) {
        return salaryTotal * percent;
    }

    calculateAllTaxes(irpf: number, socialSecurity: number) {
        return irpf + socialSecurity;
    }

    calculateSalary(salaryTotal: number, taxes: number) {
        return salaryTotal < taxes ? 0 : salaryTotal - taxes;
    }

    calculateTaxes(salaryTotal: number, donation: boolean): ITaxes {
        const irpf = this.calculateMoneyFromPercent(salaryTotal, this.percentIRPF);
        const socialSecurity = this.calculateMoneyFromPercent(salaryTotal, this.percentSocialSecurity) + (donation ? this.moneyDonation : 0);
        const taxes = this.calculateAllTaxes(irpf, socialSecurity);
        return { irpf, socialSecurity, taxes, salary: this.calculateSalary(salaryTotal, taxes) };
    }

}