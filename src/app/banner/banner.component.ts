import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Outcome } from '../models/scores';

const grey = '#C7C5CB';
const cyan = '#6CC4C8';
const purple = '#7D8CC6';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnChanges {
  @Input()
  outcome!: Outcome | null;

  color: string = grey;

  ngOnChanges(): void {
    if (!this.outcome) {
      return;
    }

    switch (this.outcome) {
      case Outcome.LOST:
        this.color = purple;
        break;
      case Outcome.WON:
        this.color = cyan;
        break;

      default:
        this.color = grey;
        break;
    }
  }
}
