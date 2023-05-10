import { Component, OnInit } from '@angular/core';
import { ICity } from './utils/interfaces';
import { Constants } from './utils/constants';
import { MadridCity } from './utils/models/madrid-city-model';
import { City } from './utils/models/city-model';
import { Taxes } from './utils/models/taxes-model';
import { BarcelonaCity } from './utils/models/barcelona-city-model';
import { ValenciaCity } from './utils/models/valencia-city.model';
import { ToledoCity } from './utils/models/toledo-city-model';
import { GuadalajaraCity } from './utils/models/guadalajara-city-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-switch';
  
  cities: ICity[] = [
    new MadridCity(),
    new BarcelonaCity(),
    new ValenciaCity(),
    new ToledoCity(),
    new GuadalajaraCity(),
    new City(Constants.CITY_ALBACETE, Constants.CODE_ALBACETE),
    new City(Constants.CITY_CIUDAD_REAL, Constants.CODE_CIUDAD_REAL)
  ];
  selectedCity: City = new MadridCity();
  salaryTotal: number = 25000;
  donation: boolean = false;

  results: Taxes = new Taxes();

  ngOnInit() {
    this.calculateTaxes();
  }

  calculateTaxes() {
    this.results = this.selectedCity?.calculateTaxes(this.salaryTotal, this.donation);
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
