import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { CitySearchComponent } from './main-page/city-search/city-search.component';
import { ForecastItemService } from './shared/forecast-item.service';
import { CityPageComponent } from './city-page/city-page.component';
import { TabsComponent } from './city-page/tabs/tabs.component';
import { TabComponent } from './city-page/tabs/tab/tab.component';
import { CurrentWeatherComponent } from './city-page/current-weather/current-weather.component';
import { DaysForecastComponent } from './city-page/days-forecast/days-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    CitySearchComponent,
    CityPageComponent,
    TabsComponent,
    TabComponent,
    CurrentWeatherComponent,
    DaysForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ForecastItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }