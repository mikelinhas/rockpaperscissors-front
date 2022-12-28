import { Symbol } from '../models/game';
import { Outcome } from '../models/scores';

export function calculateOutcome({
  playerSelection,
  computerSelection,
}: {
  playerSelection: Symbol;
  computerSelection: Symbol;
}): Outcome {
  if (playerSelection === Symbol.NONE || computerSelection === Symbol.NONE) {
    console.warn(
      'The result could not be calculated since the player or the computer have not selected a symbol'
    );
    return Outcome.NONE;
  }

  let outcome = Outcome.NONE;
  if (playerSelection === Symbol.PAPER) {
    switch (computerSelection) {
      case Symbol.ROCK:
        outcome = Outcome.WON;
        break;

      case Symbol.SCISSORS:
        outcome = Outcome.LOST;
        break;

      default:
        outcome = Outcome.TIED;
    }
  }
  if (playerSelection === Symbol.ROCK) {
    switch (computerSelection) {
      case Symbol.PAPER:
        outcome = Outcome.LOST;
        break;

      case Symbol.SCISSORS:
        outcome = Outcome.WON;
        break;

      default:
        outcome = Outcome.TIED;
    }
  }
  if (playerSelection === Symbol.SCISSORS) {
    switch (computerSelection) {
      case Symbol.PAPER:
        outcome = Outcome.WON;
        break;

      case Symbol.ROCK:
        outcome = Outcome.LOST;
        break;

      default:
        outcome = Outcome.TIED;
    }
  }

  return outcome;
}
