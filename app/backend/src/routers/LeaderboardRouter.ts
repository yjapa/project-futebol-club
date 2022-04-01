import { Router } from 'express';

import { LeaderboardController } from '../controllers/leaderboard';

class Leaderboards {
  public router: Router;

  private LeaderboardController = new LeaderboardController();

  constructor() {
    this.router = Router();

    this.teamRanking();
  }

  private teamRanking() {
    this.router.get(
      '/home',
      this.LeaderboardController.teamRanking,
    );
  }
}

export default Leaderboards;
