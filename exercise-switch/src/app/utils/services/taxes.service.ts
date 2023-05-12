import { Injectable } from '@angular/core';
import { Taxes } from '../model/taxes.model';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  calculateTaxes(city: string | undefined, salaryTotal: number, donation: boolean): Taxes {
    let result: Taxes = new Taxes();
    switch(city) {
      case Constants.CODE_MADRID:
        result = this.calculateMadridTaxes(salaryTotal);
        break;
      case Constants.CODE_BARCELONA:
        result = this.calculateBarcelonaTaxes(salaryTotal, donation);
        break;
      case Constants.CODE_VALENCIA:
        result = this.calculateValenciaTaxes(salaryTotal, donation);
        break;
      case Constants.CODE_TOLEDO:
        result = this.calculateToledoTaxes(salaryTotal, donation);
        break;
      case Constants.CODE_GUADALAJARA:
        result = this.calculateGuadalajaraTaxes(salaryTotal, donation);
        break;
      default:
        result = this.calculateDefaultTaxes(salaryTotal);
    }
    
    result.salary = result.salary < 0 ? 0 : result.salary;
    return result;
  }

  private calculateMadridTaxes(salaryTotal: number): Taxes {
    const irpf = salaryTotal * 0.2;
    const socialSecurity = salaryTotal * 0.1;
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateBarcelonaTaxes(salaryTotal: number, donation: boolean): Taxes {
    const irpf = salaryTotal * 0.3;
    const socialSecurity = salaryTotal * 0.2;
    const taxes = irpf + socialSecurity + (donation ? 300 : 0) + 400;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateValenciaTaxes(salaryTotal: number, donation: boolean): Taxes {
    const irpf = salaryTotal * 0.1;
    const socialSecurity = salaryTotal * 0.1 + (donation ? 1000 : 0);
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateToledoTaxes(salaryTotal: number, donation: boolean): Taxes {
    const irpf = salaryTotal * 0.4;
    const socialSecurity = salaryTotal * 0 + (donation ? 100 : 0);
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateGuadalajaraTaxes(salaryTotal: number, donation: boolean): Taxes {
    const irpf = salaryTotal * 0.1;
    const socialSecurity = salaryTotal * 0.1 + (donation ? 50 : 0);
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }

  private calculateDefaultTaxes(salaryTotal: number): Taxes {
    const irpf = salaryTotal * 0.3;
    const socialSecurity = salaryTotal * 0.4;
    const taxes = irpf + socialSecurity;
    return { irpf, socialSecurity, taxes, salary: salaryTotal - taxes };
  }
}
