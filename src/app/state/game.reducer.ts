import { createReducer, on } from '@ngrx/store';
import { GamePhase, Symbol } from '../models/game';
import { Outcome, Scores } from '../models/scores';
import { calculateOutcome } from '../services/outcome.service';
import * as GameActions from './game.actions';

export interface GameState {
  playerName: string;
  playerSelection: Symbol;
  computerSelection: Symbol;
  gamePhase: GamePhase;
  outcome: Outcome;
  scores: Scores;
}

function randomSymbol(): Symbol {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return Symbol.PAPER;

    case 1:
      return Symbol.ROCK;

    default:
      return Symbol.SCISSORS;
  }
}

export const initialState: GameState = {
  playerName: 'Jan',
  playerSelection: Symbol.NONE,
  computerSelection: randomSymbol(),
  gamePhase: GamePhase.SELECTING_SYMBOL,
  outcome: Outcome.TIED,
  scores: { won: 0, tied: 0, lost: 0 },
};

export const gameReducer = createReducer(
  initialState,

  // Fetch scores from server - SUCCESS!
  on(GameActions.loadScoresSuccess, (state, { scores }) => {
    return { ...state, scores };
  }),

  // Fetch scores from server - ERROR!
  on(GameActions.loadScoresError, state => {
    console.warn(
      'Oh no, the server is not working, using standalone mode to play'
    );
    return { ...state };
  }),

  // Save scores to server - ERROR!
  on(GameActions.saveScoresError, state => {
    console.warn(
      'Oh no, the server is not working, the scores are not being saved'
    );
    return { ...state };
  }),

  // Save scores from server - SUCCESS!
  on(GameActions.loadScoresSuccess, (state, { scores }) => {
    return { ...state, scores };
  }),

  // Restart game
  on(GameActions.restartGame, state => ({
    ...state,
    playerSelection: Symbol.NONE,
    computerSelection: randomSymbol(),
    gamePhase: GamePhase.SELECTING_SYMBOL,
    outcome: Outcome.NONE,
    scores: state.scores,
  })),

  // Player selected symbol
  on(GameActions.selectSymbol, (state, { symbol }) => {
    if (state.gamePhase !== GamePhase.SELECTING_SYMBOL) {
      console.warn('Not in selection phase');
      return state;
    }

    return {
      ...state,
      computerSelection: state.computerSelection,
      gamePhase: GamePhase.WAITING_FOR_COUNTDOWN,
      playerSelection: symbol,
      outcome: state.outcome,
      scores: state.scores,
    };
  }),

  // Started to countdown after player selection
  on(GameActions.startCountdown, state => ({
    ...state,
    gamePhase: GamePhase.WAITING_FOR_COUNTDOWN,
  })),

  // Countdown finished, outcome calculated and added to scores
  on(GameActions.showResult, state => {
    const outcome = calculateOutcome({
      playerSelection: state.playerSelection,
      computerSelection: state.computerSelection,
    });
    const scores = { ...state.scores };
    switch (outcome) {
      case Outcome.WON:
        scores.won++;
        break;
      case Outcome.TIED:
        scores.tied++;
        break;
      case Outcome.LOST:
        scores.lost++;
        break;

      default:
        break;
    }

    return {
      ...state,
      gamePhase: GamePhase.FINISHED,
      outcome,
      scores,
    };
  })
);
