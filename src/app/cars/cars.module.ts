import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent,
    CarDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsModule { }
