import { Action } from '@ngrx/store';
export enum ActionTypes {
  StartSelection = '[Game] Start Selection',
  StartPlaying = '[Game] Start Playing',
  ShowResult = '[Game] Show Result',
}
export class StartSelection implements Action {
  readonly type = ActionTypes.StartSelection;
}
export class StartPlaying implements Action {
  readonly type = ActionTypes.StartPlaying;
}
export class ShowResult implements Action {
  readonly type = ActionTypes.ShowResult;
}
