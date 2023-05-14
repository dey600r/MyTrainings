import { Injectable } from '@angular/core';
import { Taxes } from '../model/taxes.model';
import { Constants } from '../constants';
import { IDictionary, IMatrixCitiesTaxes } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {


  private getMatrixTaxes(): IDictionary {
    return { 
      [Constants.CODE_MADRID]: (salary: number) => this.calculateMadridTaxes(salary), 
      [Constants.CODE_BARCELONA]: (salary: number, donation: boolean) => this.calculateBarcelonaTaxes(salary, donation), 
      [Constants.CODE_VALENCIA]: (salary: number, donation: boolean) => this.calculateValenciaTaxes(salary, donation), 
      [Constants.CODE_TOLEDO]: (salary: number, donation: boolean) => this.calculateToledoTaxes(salary, donation), 
      [Constants.CODE_GUADALAJARA]: (salary: number, donation: boolean) => this.calculateGuadalajaraTaxes(salary, donation), 
      [Constants.CODE_ALBACETE]: (salary: number) => this.calculateDefaultTaxes(salary), 
      [Constants.CODE_CIUDAD_REAL]: (salary: number) => this.calculateDefaultTaxes(salary), 
    };
  }

  // private getMatrixTaxes(): IMatrixCitiesTaxes[] {
  //   return [
  //     { code: Constants.CODE_MADRID, callback: (salary: number) => this.calculateMadridTaxes(salary) },
  //     { code: Constants.CODE_BARCELONA, callback: (salary: number, donation: boolean) => this.calculateBarcelonaTaxes(salary, donation) },
  //     { code: Constants.CODE_VALENCIA, callback: (salary: number, donation: boolean) => this.calculateValenciaTaxes(salary, donation) },
  //     { code: Constants.CODE_TOLEDO, callback: (salary: number, donation: boolean) => this.calculateToledoTaxes(salary, donation) },
  //     { code: Constants.CODE_GUADALAJARA, callback: (salary: number, donation: boolean) => this.calculateGuadalajaraTaxes(salary, donation) },
  //     { code: Constants.CODE_ALBACETE, callback: (salary: number) => this.calculateDefaultTaxes(salary) },
  //     { code: Constants.CODE_CIUDAD_REAL, callback: (salary: number) => this.calculateDefaultTaxes(salary) }
  //   ];
  // }

  calculateTaxes(city: string, salaryTotal: number, donation: boolean): Taxes {
    //let result: Taxes | undefined = this.getMatrixTaxes().find(x => x.code === city)?.callback(salaryTotal, donation);
    let result: Taxes = this.getMatrixTaxes()[city](salaryTotal, donation);
    result.salary = result.salary < 0 ? 0 : result.salary;
    return result;
  }

  private calculateMadridTaxes(salaryTotal: number): Taxes {
    return this.calculateTaxesWithDonation(salaryTotal, 0.2, 0.1, 0);
  }

  private calculateBarcelonaTaxes(salaryTotal: number, donation: boolean): Taxes {
    const irpf = salaryTotal * 0.3;
    const socialSecurity = salaryTotal * 0.2;
    const taxes = irpf + socialSecurity + (donation ? 300 : 0) + 400;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateValenciaTaxes(salaryTotal: number, donation: boolean): Taxes {
    return this.calculateTaxesWithDonation(salaryTotal, 0.1, 0.1, (donation ? 1000 : 0));
  }

  private calculateToledoTaxes(salaryTotal: number, donation: boolean): Taxes {
    return this.calculateTaxesWithDonation(salaryTotal, 0.4, 0, (donation ? 100 : 0));
  }

  private calculateGuadalajaraTaxes(salaryTotal: number, donation: boolean): Taxes {
    return this.calculateTaxesWithDonation(salaryTotal, 0.1, 0.1, (donation ? 50 : 0));
  }

  private calculateDefaultTaxes(salaryTotal: number): Taxes {
    return this.calculateTaxesWithDonation(salaryTotal, 0.3, 0.4, 0);
  }

  private calculateTaxesWithDonation(salaryTotal: number, irpfPercent: number, socialSecurityPercent: number, donation: number): Taxes {
    const irpf = salaryTotal * irpfPercent;
    const socialSecurity = salaryTotal * socialSecurityPercent + donation;
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }
}
