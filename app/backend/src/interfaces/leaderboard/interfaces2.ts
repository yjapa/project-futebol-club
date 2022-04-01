export interface IClubStatistics {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
}

export interface IMatchStatistics {
  goalsFavor: number;
  goalsOwn: number;
  points: number;
  victory: number;
  draw: number;
  loss: number;
}
