import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scores, StatsResponse } from '../models/scores';
import { GameState } from '../state/game.reducer';

@Injectable()
export class ScoresService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getScores(playerName: string) {
    return this.httpClient.get<StatsResponse>(
      this.baseUrl + '/game-results/stats?playerName=' + playerName
    );
  }

  saveScores(gameState: GameState) {
    const requestBody = {
      playerName: gameState.playerName,
      playerSymbol: gameState.playerSelection,
      computerSymbol: gameState.computerSelection,
      outcome: gameState.outcome,
    };
    return this.httpClient.post<any>(
      this.baseUrl + '/game-results',
      requestBody
    );
  }
}
