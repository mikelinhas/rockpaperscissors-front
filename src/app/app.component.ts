import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamePhase, Symbol } from './models/game';
import { Outcome, Scores } from './models/scores';
import { GameState } from './state/game.reducer';
import * as GameActions from './state/game.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  player$: Observable<string>;
  playerSelection$: Observable<Symbol>;
  computerSelection$: Observable<Symbol>;
  gamePhase$: Observable<GamePhase>;
  outcome$: Observable<Outcome>;
  scores$: Observable<Scores>;

  constructor(private store: Store<{ gameState: GameState }>) {
    const gameState$ = store.pipe(select('gameState'));
    this.player$ = gameState$.pipe(select('playerName'));
    this.gamePhase$ = gameState$.pipe(select('gamePhase'));
    this.outcome$ = gameState$.pipe(select('outcome'));
    this.playerSelection$ = gameState$.pipe(select('playerSelection'));
    this.computerSelection$ = gameState$.pipe(select('computerSelection'));
    this.scores$ = gameState$.pipe(select('scores'));
  }

  ngOnInit() {
    this.getScores();
  }

  onCountdownFinished() {
    this.store.dispatch(GameActions.showResult());
  }

  updateSelection(selection: string) {
    const symbol = selection as Symbol;
    this.store.dispatch(GameActions.selectSymbol({ symbol }));
  }

  getScores(): void {
    this.store.dispatch(GameActions.loadScores());
  }

  restartGame(): void {
    this.store.dispatch(GameActions.restartGame());
  }
}
