import { Component, OnInit } from '@angular/core';
import { City, ICity, ITaxes, MadridCity } from './models/interfaces';
import { Constants } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-switch';
  
  cities: ICity[] = [];
  selectedCity: City | undefined;
  salaryTotal: number = 25000;

  taxes: number = 0;
  irpf: number = 0;
  socialSecurity: number = 0;
  salary: number = 0;

  donation: boolean = false;

  ngOnInit() {
    this.cities = [
      new MadridCity(),
      new City(Constants.CITY_BARCELONA, Constants.CODE_BARCELONA)
    ];
    // this.cities = [
    //     { name: Constants.CITY_MADRID, code: Constants.CODE_MADRID },
    //     { name: Constants.CITY_BARCELONA, code: Constants.CODE_BARCELONA },
    //     { name: Constants.CITY_VALENCIA, code: Constants.CODE_VALENCIA },
    //     { name: Constants.CITY_TOLEDO, code: Constants.CODE_TOLEDO },
    //     { name: Constants.CITY_GUADALAJARA, code: Constants.CODE_GUADALAJARA },
    //     { name: Constants.CITY_ALBACETE, code: Constants.CODE_ALBACETE },
    //     { name: Constants.CITY_CIUDAD_REAL, code: Constants.CODE_CIUDAD_REAL }
    // ];
    this.calculateTaxes();
  }

  calculateTaxes() {
    if(this.selectedCity) {
      const data: ITaxes = this.selectedCity?.calculateTaxes(this.salaryTotal);
      this.irpf = data.irpf;
      this.socialSecurity = data.socialSecurity;
      this.taxes = data.taxes;
      this.salary = data.salary;
    }
    // switch(this.selectedCity?.code) {
    //   case Constants.CODE_MADRID:
    //     this.irpf = this.salaryTotal * 0.2;
    //     this.socialSecurity = this.salaryTotal * 0.1;
    //     this.taxes = this.irpf + this.socialSecurity;
    //     this.salary = this.salaryTotal - this.taxes;
    //     break;
    //   case 'B':
    //     this.irpf = this.salaryTotal * 0.3;
    //     this.socialSecurity = this.salaryTotal * 0.2;
    //     this.taxes = this.irpf + this.socialSecurity + (this.donation ? 300 : 0);
    //     this.salary = this.salaryTotal - this.taxes;
    //     break;
    //   case 'V':
    //     this.irpf = this.salaryTotal * 0.1;
    //     this.socialSecurity = this.salaryTotal * 0.1 + (this.donation ? 1000 : 0);
    //     this.taxes = this.irpf + this.socialSecurity;
    //     this.salary = this.salaryTotal - this.taxes;
    //     break;
    //   case 'T':
    //     this.irpf = this.salaryTotal * 0.4;
    //     this.socialSecurity = this.salaryTotal * 0 + (this.donation ? 100 : 0);
    //     this.taxes = this.irpf + this.socialSecurity;
    //     this.salary = this.salaryTotal - this.taxes;
    //     break;
    //   case 'G':
    //     this.irpf = this.salaryTotal * 0.1;
    //     this.socialSecurity = this.salaryTotal * 0.1 + (this.donation ? 50 : 0);
    //     this.taxes = this.irpf + this.socialSecurity;
    //     this.salary = this.salaryTotal - this.taxes;
    //     break;
    //   default:
    //     this.irpf = this.salaryTotal * 0.3;
    //     this.socialSecurity = this.salaryTotal * 0.4;
    //     this.taxes = this.irpf + this.socialSecurity;
    //     this.salary = this.salaryTotal - this.taxes;
    // }

    // this.salary = this.salary < 0 ? 0 : this.salary;
  }
}
