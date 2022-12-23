import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameState } from './models/game';
import { Scores } from './models/scores';
import { ScoresService } from './services/scores.service';
import { StartPlaying } from './state/game.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Rock Paper Scissors';
  player = 'Mike';
  scores: Scores = { won: 0, lost: 0, tied: 0 };
  playerSymbol = '';

  gameState$: Observable<GameState>;

  constructor(
    private scoresService: ScoresService,
    private store: Store<{ gameState: GameState }>
  ) {
    this.gameState$ = store.pipe(select('gameState'));
    this.gameState$.subscribe(something => console.log(something));
  }

  ngOnInit() {
    this.getScores();
  }

  updateSelection(selection: string): void {
    this.playerSymbol = selection;
  }

  getScores(): void {
    this.scoresService.getScores().subscribe(
      data =>
        (this.scores = {
          won: data.gamesWon,
          tied: data.gamesTied,
          lost: data.gamesLost,
        })
    );
  }

  refreshScores(): void {
    this.store.dispatch(new StartPlaying());
    this.scores.won = this.scores.won + 1;
  }
}
