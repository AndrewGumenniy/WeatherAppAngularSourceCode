import { Component, OnInit, Input } from '@angular/core';
import {ForecastItem} from '../../shared/forecast-item';

@Component({
  selector: 'app-days-forecast',
  templateUrl: './days-forecast.component.html',
  styleUrls: ['./days-forecast.component.css']
})
export class DaysForecastComponent implements OnInit {
  
  @Input() data:ForecastItem[] = [];
  @Input() currentPage: boolean = false;
  
  constructor(){}
  
  ngOnInit() {
  }

}
