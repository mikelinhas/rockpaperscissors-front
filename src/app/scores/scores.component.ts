import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Scores } from '../models/scores';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})
export class ScoresComponent implements OnChanges {
  @Input()
  scores!: Scores | null;

  won = 0;
  tied = 0;
  lost = 0;

  ngOnChanges(changes: SimpleChanges): void {
    const currentScores: Scores = changes['scores'].currentValue;
    this.won = currentScores.won;
    this.tied = currentScores.tied;
    this.lost = currentScores.lost;
  }
}
