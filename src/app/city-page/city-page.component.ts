import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ForecastItem} from '../shared/forecast-item';
import {ForecastItemService} from '../shared/forecast-item.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit {
  id: number;
  currentWeather:ForecastItem[] = [];
  daysForecast:ForecastItem[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ForecastItemService: ForecastItemService) {}

  currentWeatherRequest(id: number){
    this.ForecastItemService.currentWeather(id)
    .subscribe(data => this.currentWeather=data.slice(0,1));  
  }

  daysForecastRequest(id: number){
    this.ForecastItemService.daysForecast(id)
    .subscribe(data => this.daysForecast=data);  
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    this.daysForecastRequest(this.id);
    this.currentWeatherRequest(this.id);
  }

}
