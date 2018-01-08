import { Component, OnInit } from '@angular/core';
import {ForecastItemService} from '../../shared/forecast-item.service';
import {ForecastItem} from '../../shared/forecast-item';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  cityForecastItems: ForecastItem[] = [];
  city: string;
  showExample: boolean = true;

  constructor(private ForecastItemService: ForecastItemService){}
  
  searchCity(city){
    this.ForecastItemService.searchCity(city)
    .subscribe(data => this.cityForecastItems=data);  
  }

  ngOnInit() {
    this.searchCity("Dnipro");
  }

}