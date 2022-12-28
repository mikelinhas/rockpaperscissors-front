import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { startCountdown } from '../state/game.actions';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit {
  count: number = 3;

  @Output() finished = new EventEmitter();

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    const timer = setInterval(() => {
      if (this.count <= 1) {
        clearInterval(timer);
        this.finished.emit();
      } else {
        this.count--;
      }
    }, 1000);
  }
}
