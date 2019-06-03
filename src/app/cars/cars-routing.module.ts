import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarDetailComponent } from './car-detail/car-detail.component';

const CARS_ROUTES: Route[] = [
  {
    path: 'cars/:id',
    component: CarDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { }
