export interface Scores {
  won: number;
  lost: number;
  tied: number;
}

export interface StatsResponse {
  playerName: string;
  gamesWon: number;
  gamesTied: number;
  gamesLost: number;
}
