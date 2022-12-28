import { createAction, props } from '@ngrx/store';
import { Symbol } from '../models/game';
import { Scores } from '../models/scores';

// Load Scores
export const loadScores = createAction('[Game] Load Scores');
export const loadScoresSuccess = createAction(
  '[Game] Load Scores Success',
  props<{ scores: Scores }>()
);
export const loadScoresError = createAction('[Game] Load Scores Error');

// Save Scores
export const saveScoresError = createAction('[Game] Save Scores Error');

// Game actions
export const restartGame = createAction('[Game] Start Selection');
export const startCountdown = createAction('[Game] Start Playing');
export const showResult = createAction('[Game] Show Result');
export const selectSymbol = createAction(
  '[Game] Select a symbol',
  props<{ symbol: Symbol }>()
);
