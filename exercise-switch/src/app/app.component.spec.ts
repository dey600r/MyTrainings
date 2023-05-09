import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

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
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Madrid', code: 'M'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(7500);
    expect(app.irpf).toEqual(5000);
    expect(app.socialSecurity).toEqual(2500);
    expect(app.salary).toEqual(17500);
  });

  it(`should calculate taxes from Madrid with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Madrid', code: 'M'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(7500);
    expect(app.irpf).toEqual(5000);
    expect(app.socialSecurity).toEqual(2500);
    expect(app.salary).toEqual(17500);
  });

  it(`should calculate taxes from Barcelona`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Barcelona', code: 'B'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(12500);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(5000);
    expect(app.salary).toEqual(12500);
  });

  it(`should calculate taxes from Barcelona with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Barcelona', code: 'B'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(12800);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(5000);
    expect(app.salary).toEqual(12200);
  });

  it(`should calculate taxes from Valencia`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Valencia', code: 'V'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(5000);
    expect(app.irpf).toEqual(2500);
    expect(app.socialSecurity).toEqual(2500);
    expect(app.salary).toEqual(20000);
  });

  it(`should calculate taxes from Valencia with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Valencia', code: 'V'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(6000);
    expect(app.irpf).toEqual(2500);
    expect(app.socialSecurity).toEqual(3500);
    expect(app.salary).toEqual(19000);
  });

  it(`should calculate taxes from Toledo`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Toledo', code: 'T'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(10000);
    expect(app.irpf).toEqual(10000);
    expect(app.socialSecurity).toEqual(0);
    expect(app.salary).toEqual(15000);
  });

  it(`should calculate taxes from Guadalajara`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Guadalajara', code: 'G'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(5000);
    expect(app.irpf).toEqual(2500);
    expect(app.socialSecurity).toEqual(2500);
    expect(app.salary).toEqual(20000);
  });

  it(`should calculate taxes from Guadalajara with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Guadalajara', code: 'G'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(5050);
    expect(app.irpf).toEqual(2500);
    expect(app.socialSecurity).toEqual(2550);
    expect(app.salary).toEqual(19950);
  });

  it(`should calculate taxes from Albacete`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Albacete', code: 'A'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(17500);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(10000);
    expect(app.salary).toEqual(7500);
  });

  it(`should calculate taxes from Albacete with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Albacete', code: 'A'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(17500);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(10000);
    expect(app.salary).toEqual(7500);
  });
  
  it(`should calculate taxes from Ciudad Real`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Ciudad Real', code: 'CR'};
    app.salaryTotal = 25000;
    app.calculateTaxes();
    expect(app.taxes).toEqual(17500);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(10000);
    expect(app.salary).toEqual(7500);
  });

  it(`should calculate taxes from Ciudad Real with donations`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Ciudad Real', code: 'CR'};
    app.salaryTotal = 25000;
    app.donation = true;
    app.calculateTaxes();
    expect(app.taxes).toEqual(17500);
    expect(app.irpf).toEqual(7500);
    expect(app.socialSecurity).toEqual(10000);
    expect(app.salary).toEqual(7500);
  });

  it(`should not calculate negative taxes`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedCity = { name: 'Valencia', code: 'V'};
    app.donation = true;
    app.salaryTotal = 500;
    app.calculateTaxes();
    expect(app.taxes).toBeGreaterThanOrEqual(0);
    expect(app.irpf).toBeGreaterThanOrEqual(0);
    expect(app.socialSecurity).toBeGreaterThanOrEqual(0);
    expect(app.salary).toBeGreaterThanOrEqual(0);
  });

});
