import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MadridCity } from './utils/models/madrid-city-model';
import { ITaxes } from './utils/interfaces';
import { BarcelonaCity } from './utils/models/barcelona-city-model';
import { ValenciaCity } from './utils/models/valencia-city.model';
import { ToledoCity } from './utils/models/toledo-city-model';
import { GuadalajaraCity } from './utils/models/guadalajara-city-model';
import { City } from './utils/models/city-model';
import { Constants } from './utils/constants';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        DropdownModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exercise-switch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('exercise-switch');
  });

  it(`should calculate taxes from Madrid`, () => {
    const result: ITaxes = new MadridCity().calculateTaxes(25000, false);
    expect(result.taxes).toEqual(7500);
    expect(result.irpf).toEqual(5000);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(17500);
  });

  it(`should calculate taxes from Madrid with donations`, () => {
    const result: ITaxes = new MadridCity().calculateTaxes(25000, true);
    expect(result.taxes).toEqual(7500);
    expect(result.irpf).toEqual(5000);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(17500);
  });

  it(`should calculate taxes from Barcelona`, () => {
    const result: ITaxes = new BarcelonaCity().calculateTaxes(25000, false);
    expect(result.taxes).toEqual(12900);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(5000);
    expect(result.salary).toEqual(12100);
  });

  it(`should calculate taxes from Barcelona with donations`, () => {
    const result: ITaxes = new BarcelonaCity().calculateTaxes(25000, true);
    expect(result.taxes).toEqual(13200);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(5000);
    expect(result.salary).toEqual(11800);
  });

  it(`should calculate taxes from Valencia`, () => {
    const result: ITaxes = new ValenciaCity().calculateTaxes(25000, false);
    expect(result.taxes).toEqual(5000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(20000);
  });

  it(`should calculate taxes from Valencia with donations`, () => {
    const result: ITaxes = new ValenciaCity().calculateTaxes(25000, true);
    expect(result.taxes).toEqual(6000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(3500);
    expect(result.salary).toEqual(19000);
  });

  it(`should calculate taxes from Toledo`, () => {
    const result: ITaxes = new ToledoCity().calculateTaxes(25000, false);
    expect(result.taxes).toEqual(10000);
    expect(result.irpf).toEqual(10000);
    expect(result.socialSecurity).toEqual(0);
    expect(result.salary).toEqual(15000);
  });

  it(`should calculate taxes from Toledo with donations`, () => {
    const result: ITaxes = new ToledoCity().calculateTaxes(25000, true);
    expect(result.taxes).toEqual(10100);
    expect(result.irpf).toEqual(10000);
    expect(result.socialSecurity).toEqual(100);
    expect(result.salary).toEqual(14900);
  });

  it(`should calculate taxes from Guadalajara`, () => {
    const result: ITaxes = new GuadalajaraCity().calculateTaxes(25000, false);
    expect(result.taxes).toEqual(5000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(20000);
  });

  it(`should calculate taxes from Guadalajara with donations`, () => {
    const result: ITaxes = new GuadalajaraCity().calculateTaxes(25000, true);
    expect(result.taxes).toEqual(5050);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2550);
    expect(result.salary).toEqual(19950);
  });

  it(`should calculate taxes from Albacete`, () => {
    const result: ITaxes = new City(Constants.CITY_ALBACETE, Constants.CODE_ALBACETE).calculateTaxes(25000, false);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should calculate taxes from Albacete with donations`, () => {
    const result: ITaxes = new City(Constants.CITY_ALBACETE, Constants.CODE_ALBACETE).calculateTaxes(25000, true);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });
  
  it(`should calculate taxes from Ciudad Real`, () => {
    const result: ITaxes = new City(Constants.CITY_CIUDAD_REAL, Constants.CODE_CIUDAD_REAL).calculateTaxes(25000, false);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should calculate taxes from Ciudad Real with donations`, () => {
    const result: ITaxes = new City(Constants.CITY_CIUDAD_REAL, Constants.CODE_CIUDAD_REAL).calculateTaxes(25000, true);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should not calculate negative taxes`, () => {
    const result: ITaxes = new ValenciaCity().calculateTaxes(25000, true);
    expect(result.taxes).toBeGreaterThanOrEqual(0);
    expect(result.irpf).toBeGreaterThanOrEqual(0);
    expect(result.socialSecurity).toBeGreaterThanOrEqual(0);
    expect(result.salary).toBeGreaterThanOrEqual(0);
  });

});
