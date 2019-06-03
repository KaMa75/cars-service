import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';

@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsModule { }
