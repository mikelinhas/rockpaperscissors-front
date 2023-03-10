import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input()
  label!: string;

  @Input()
  count!: number | null;

  constructor() {
    if (!this.count) {
      this.count = 0;
    }
  }
}
