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
  }
}
