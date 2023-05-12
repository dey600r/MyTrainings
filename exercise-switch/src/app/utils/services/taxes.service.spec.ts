import { TestBed } from '@angular/core/testing';

import { TaxesService } from './taxes.service';
import { Taxes } from '../model/taxes.model';
import { Constants } from '../constants';

describe('TaxesService', () => {
  let service: TaxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should calculate taxes from Madrid`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_MADRID, 25000, false);
    expect(result.taxes).toEqual(7500);
    expect(result.irpf).toEqual(5000);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(17500);
  });

  it(`should calculate taxes from Madrid with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_MADRID, 25000, true);
    expect(result.taxes).toEqual(7500);
    expect(result.irpf).toEqual(5000);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(17500);
  });

  it(`should calculate taxes from Barcelona`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_BARCELONA, 25000, false);
    expect(result.taxes).toEqual(12900);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(5000);
    expect(result.salary).toEqual(12100);
  });

  it(`should calculate taxes from Barcelona with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_BARCELONA, 25000, true);
    expect(result.taxes).toEqual(13200);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(5000);
    expect(result.salary).toEqual(11800);
  });

  it(`should calculate taxes from Valencia`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_VALENCIA, 25000, false);
    expect(result.taxes).toEqual(5000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(20000);
  });

  it(`should calculate taxes from Valencia with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_VALENCIA, 25000, true);
    expect(result.taxes).toEqual(6000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(3500);
    expect(result.salary).toEqual(19000);
  });

  it(`should calculate taxes from Toledo`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_TOLEDO, 25000, false);
    expect(result.taxes).toEqual(10000);
    expect(result.irpf).toEqual(10000);
    expect(result.socialSecurity).toEqual(0);
    expect(result.salary).toEqual(15000);
  });

  it(`should calculate taxes from Toledo with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_TOLEDO, 25000, true);
    expect(result.taxes).toEqual(10100);
    expect(result.irpf).toEqual(10000);
    expect(result.socialSecurity).toEqual(100);
    expect(result.salary).toEqual(14900);
  });

  it(`should calculate taxes from Guadalajara`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_GUADALAJARA, 25000, false);
    expect(result.taxes).toEqual(5000);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2500);
    expect(result.salary).toEqual(20000);
  });

  it(`should calculate taxes from Guadalajara with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_GUADALAJARA, 25000, true);
    expect(result.taxes).toEqual(5050);
    expect(result.irpf).toEqual(2500);
    expect(result.socialSecurity).toEqual(2550);
    expect(result.salary).toEqual(19950);
  });

  it(`should calculate taxes from Albacete`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_ALBACETE, 25000, false);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should calculate taxes from Albacete with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_ALBACETE, 25000, true);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });
  
  it(`should calculate taxes from Ciudad Real`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_CIUDAD_REAL, 25000, false);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should calculate taxes from Ciudad Real with donations`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_CIUDAD_REAL, 25000, true);
    expect(result.taxes).toEqual(17500);
    expect(result.irpf).toEqual(7500);
    expect(result.socialSecurity).toEqual(10000);
    expect(result.salary).toEqual(7500);
  });

  it(`should not calculate negative taxes`, () => {
    const result: Taxes = service.calculateTaxes(Constants.CODE_VALENCIA, 25000, true);
    expect(result.taxes).toBeGreaterThanOrEqual(0);
    expect(result.irpf).toBeGreaterThanOrEqual(0);
    expect(result.socialSecurity).toBeGreaterThanOrEqual(0);
    expect(result.salary).toBeGreaterThanOrEqual(0);
  });
});
