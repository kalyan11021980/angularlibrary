import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
