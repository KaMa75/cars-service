import { Car } from './../models/car';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  carForm: FormGroup;

  constructor(private carsService: CarsService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: [this.car.model , Validators.required],
      type: [this.car.type],
      plate: [this.car.plate, [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: [this.car.deliveryDate],
      deadline: [this.car.deadline],
      color: [this.car.color],
      power: [this.car.power],
      clientFirstName: [this.car.clientFirstName],
      clientSurname: [this.car.clientSurname],
      cost: [this.car.cost],
      isFullyDamaged: [this.car.isFullyDamaged],
      year: [this.car.year]
    });
  }

  loadCar() {
    // const id = +this.route.snapshot.params['id'];
    // this.carsService.getCar(id).subscribe((car: Car) => {
    //   this.car = car;
    // });
    this.car = this.route.snapshot.data['car'];
  }

  updateCar() {
    this.carsService.updateCar(this.car.id, this.carForm.value).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

}
