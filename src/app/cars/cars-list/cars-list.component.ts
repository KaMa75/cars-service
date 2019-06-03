import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';

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

  constructor(private carsService: CarsService) { }

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
      console.log(this.cars);
    });
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
