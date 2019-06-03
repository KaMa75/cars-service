import { Car } from './../models/car';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCar();
  }

  loadCar() {
    const id = +this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe((car: Car) => {
      this.car = car;
    });
  }

}
