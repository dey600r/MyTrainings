import { Component, OnInit } from '@angular/core';
import { ICity } from './utils/interfaces';
import { Constants } from './utils/constants';
import { Taxes } from './utils/model/taxes.model';
import { TaxesService } from './utils/services/taxes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-switch';
  
  cities: ICity[] = [
    { name: Constants.CITY_MADRID, code: Constants.CODE_MADRID },
    { name: Constants.CITY_BARCELONA, code: Constants.CODE_BARCELONA },
    { name: Constants.CITY_VALENCIA, code: Constants.CODE_VALENCIA },
    { name: Constants.CITY_TOLEDO, code: Constants.CODE_TOLEDO },
    { name: Constants.CITY_GUADALAJARA, code: Constants.CODE_GUADALAJARA },
    { name: Constants.CITY_ALBACETE, code: Constants.CODE_ALBACETE },
    { name: Constants.CITY_CIUDAD_REAL, code: Constants.CODE_CIUDAD_REAL }
];
  selectedCity: ICity | undefined;
  salaryTotal: number = 25000;

  donation: boolean = false;

  results: Taxes = new Taxes();

  constructor(private taxesService: TaxesService) {}

  ngOnInit() {
    this.calculateTaxes();
  }

  calculateTaxes() {
    this.results = this.taxesService.calculateTaxes(this.selectedCity?.code, this.salaryTotal, this.donation);
  }
}
