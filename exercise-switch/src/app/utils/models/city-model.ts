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

    protected calculateMoneyFromPercent(salaryTotal: number, percent: number): number {
        return salaryTotal * percent;
    }

    protected calculateAllTaxes(irpf: number, socialSecurity: number): number {
        return irpf + socialSecurity;
    }

    protected calculateSalary(salaryTotal: number, taxes: number): number {
        return salaryTotal < taxes ? 0 : salaryTotal - taxes;
    }

    protected calculateDonations(donation: boolean): number {
        return (donation ? this.moneyDonation : 0);
    }

    calculateTaxes(salaryTotal: number, donation: boolean): ITaxes {
        const irpf = this.calculateMoneyFromPercent(salaryTotal, this.percentIRPF);
        const socialSecurity = this.calculateMoneyFromPercent(salaryTotal, this.percentSocialSecurity) + this.calculateDonations(donation);
        const taxes = this.calculateAllTaxes(irpf, socialSecurity);
        return { irpf, socialSecurity, taxes, salary: this.calculateSalary(salaryTotal, taxes) };
    }

}