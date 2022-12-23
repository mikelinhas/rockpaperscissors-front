import { Action } from '@ngrx/store';
import { GameState } from '../models/game';
import { ActionTypes } from './game.actions';

export const initialState = GameState.SELECTING_SYMBOL;

export function gameReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.StartSelection:
      return (state = GameState.SELECTING_SYMBOL);
    case ActionTypes.StartPlaying:
      return (state = GameState.WAITING_FOR_COUNTDOWN);
    case ActionTypes.ShowResult:
      return (state = GameState.FINISHED);
    default:
      return state;
  }
}
