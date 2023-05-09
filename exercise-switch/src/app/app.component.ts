import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-switch';
  
  cities: any[] = [];
  selectedCity: any | undefined;
  salaryTotal: number = 25000;

  taxes: number = 0;
  irpf: number = 0;
  socialSecurity: number = 0;
  salary: number = 0;

  donation: boolean = false;

  ngOnInit() {
    this.cities = [
        { name: 'Madrid', code: 'M' },
        { name: 'Barcelona', code: 'B' },
        { name: 'Valencia', code: 'V' },
        { name: 'Toledo', code: 'T' },
        { name: 'Guadalajara', code: 'G' },
        { name: 'Albacete', code: 'A' },
        { name: 'Ciudad Real', code: 'CR' }
    ];
    this.calculateTaxes();
  }

  calculateTaxes() {
    switch(this.selectedCity?.code) {
      case 'M':
        this.irpf = this.salaryTotal * 0.2;
        this.socialSecurity = this.salaryTotal * 0.1;
        this.taxes = this.irpf + this.socialSecurity;
        this.salary = this.salaryTotal - this.taxes;
        break;
      case 'B':
        this.irpf = this.salaryTotal * 0.3;
        this.socialSecurity = this.salaryTotal * 0.2;
        this.taxes = this.irpf + this.socialSecurity + (this.donation ? 300 : 0);
        this.salary = this.salaryTotal - this.taxes;
        break;
      case 'V':
        this.irpf = this.salaryTotal * 0.1;
        this.socialSecurity = this.salaryTotal * 0.1 + (this.donation ? 1000 : 0);
        this.taxes = this.irpf + this.socialSecurity;
        this.salary = this.salaryTotal - this.taxes;
        break;
      case 'T':
        this.irpf = this.salaryTotal * 0.4;
        this.socialSecurity = this.salaryTotal * 0 + (this.donation ? 100 : 0);
        this.taxes = this.irpf + this.socialSecurity;
        this.salary = this.salaryTotal - this.taxes;
        break;
      case 'G':
        this.irpf = this.salaryTotal * 0.1;
        this.socialSecurity = this.salaryTotal * 0.1 + (this.donation ? 50 : 0);
        this.taxes = this.irpf + this.socialSecurity;
        this.salary = this.salaryTotal - this.taxes;
        break;
      default:
        this.irpf = this.salaryTotal * 0.3;
        this.socialSecurity = this.salaryTotal * 0.4;
        this.taxes = this.irpf + this.socialSecurity;
        this.salary = this.salaryTotal - this.taxes;
    }
    
    this.salary = this.salary < 0 ? 0 : this.salary;
  }
}
