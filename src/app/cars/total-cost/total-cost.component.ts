import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent {

  @Input()
  totalCost: number;

  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();

  private VAT = 1.23;

  showGross() {
    this.shownGross.emit(this.totalCost * this.VAT);
  }

}
