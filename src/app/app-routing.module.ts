import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cars'
  },
  {
    path: 'cars',
    component: CarsListComponent
  },
  {
    path: 'users',
    component: CarsListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
