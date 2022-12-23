import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scores, StatsResponse } from '../models/scores';

@Injectable()
export class ScoresService {
  baseUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getScores() {
    return this.httpClient.get<StatsResponse>(
      this.baseUrl + '/game-results/stats?playerName=mike'
    );
  }
}
