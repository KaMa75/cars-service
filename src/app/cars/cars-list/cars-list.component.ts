import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit {

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;

  cars: Car[];

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit() {
    this.loadCars();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

}
