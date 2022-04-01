import { NextFunction, Request, Response } from 'express';

import { LeaderboardService } from '../../services/leaderboard';

import { StatusCode } from '../../utils';

class LeaderboardController {
  private LeaderboardService = new LeaderboardService();

  private StatusCode = StatusCode;

  constructor() {
    this.teamRanking = this.teamRanking.bind(this);
  }

  async teamRanking(_req: Request, res: Response, _nextMiddleware: NextFunction) {
    const ranking = await this.LeaderboardService.teamRanking();

    return res.status(this.StatusCode.OK).json(ranking);
  }
}

export default LeaderboardController;
