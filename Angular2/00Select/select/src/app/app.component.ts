import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: Country = new Country(0, '');
  countries: Country[];
  states: State[];
  text: string;

  constructor(private _dataService: DataService) {
    this.countries = this._dataService.getCountries();
    this.text = `tesx text text text text text`;
  }

  onSelect(countryid) {
    this.states = this._dataService.getStates().filter((item) => item.countryid == countryid);
  }

}
