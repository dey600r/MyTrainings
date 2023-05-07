import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exercise-switch';
  
  cities: City[] = [];
  selectedCity: City | undefined;
  salary: number = 25000;

  taxes: number = 0;
  irpf: number = 0;
  socialSecurity: number = 0;

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
  }

  calculateTaxes() {
    switch(this.selectedCity?.code) {
      case 'M':
        this.irpf = this.salary * 0.2;
        this.socialSecurity = this.salary * 0.1;
        this.taxes = this.irpf + this.socialSecurity;
        break;
      case 'B':
        this.irpf = this.salary * 0.3;
        this.socialSecurity = this.salary * 0.2;
        this.taxes = this.irpf + this.socialSecurity;
        break;
      case 'V':
        this.irpf = this.salary * 0.1;
        this.socialSecurity = this.salary * 0.1 + 1000;
        this.taxes = this.irpf + this.socialSecurity;
        break;
      case 'T':
        this.irpf = this.salary * 0.4;
        this.socialSecurity = this.salary * 0 + 200;
        this.taxes = this.irpf + this.socialSecurity;
        break;
      case 'G':
        this.irpf = this.salary * 0.1;
        this.socialSecurity = this.salary * 0.1 + 50;
        this.taxes = this.irpf + this.socialSecurity;
        break;
      default:
        this.irpf = this.salary * 0.3;
        this.socialSecurity = this.salary * 0.4;
        this.taxes = this.irpf + this.socialSecurity;
    }

  }
}

interface City {
  name: string;
  code: string;
}
