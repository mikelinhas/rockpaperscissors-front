import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ScoresService } from '../services/scores.service';
import { Injectable } from '@angular/core';
import {
  loadScores,
  loadScoresError,
  loadScoresSuccess,
  saveScoresError,
  showResult,
} from './game.actions';
import { of } from 'rxjs';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GameState } from './game.reducer';

@Injectable()
export class GameEffects {
  loadScores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadScores),
      withLatestFrom(this.store),
      mergeMap(([_, obj]) => {
        const state = obj as any;
        const playerName = state.gameState.playerName;
        return this.scoresService.getScores(playerName).pipe(
          map(response => {
            const scores = {
              won: response.gamesWon,
              tied: response.gamesTied,
              lost: response.gamesLost,
            };
            return loadScoresSuccess({ scores });
          }),
          catchError(() => of(loadScoresError()))
        );
      })
    )
  );

  saveScores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showResult),
      withLatestFrom(this.store),
      switchMap(([_, obj]) => {
        const state = obj as any;
        const gameState = state.gameState;
        return this.scoresService
          .saveScores(gameState)
          .pipe(catchError(() => of(saveScoresError())));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private scoresService: ScoresService,
    private store: Store<GameState>
  ) {}
}
function saveResultSuccess(): any {
  throw new Error('Function not implemented.');
}

function saveResultError(): any {
  throw new Error('Function not implemented.');
}
