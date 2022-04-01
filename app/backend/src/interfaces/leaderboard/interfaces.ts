export interface ILeaderboardMatchsGoals {
  id: number;
  goalsFavor: number;
  goalsOwn: number
}

export interface ISequelizeClubsHistory {
  get(param: { plain: true }): IClubsHistory;
}

export interface IClubsHistory {
  clubName: string;
  homeMatchs: ILeaderboardMatchsGoals[];
  awayMatchs: ILeaderboardMatchsGoals[];
}

export interface IClubStats {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}
