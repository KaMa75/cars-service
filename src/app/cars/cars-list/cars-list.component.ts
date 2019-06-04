import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  carForm: FormGroup;

  constructor(private carsService: CarsService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: [''],
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: [''],
      deadline: [''],
      color: [''],
      power: [''],
      clientFirstName: [''],
      clientSurname: [''],
      cost: [''],
      isFullyDamaged: [''],
      year: ['']
    });
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

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {
      this.loadCars();
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
