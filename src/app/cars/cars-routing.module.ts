import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

const CARS_ROUTES: Route[] = [
  // {
  //   path: 'cars/:id',
  //   component: CarsDetailsComponent
  // }
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
