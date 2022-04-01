import { LeaderboardModel } from '../../models/leaderboard';

class LeaderboardService {
  private LeaderboardModel = new LeaderboardModel();

  async teamRanking() {
    const ranking = await this.LeaderboardModel.teamRanking();

    return ranking;
  }
}

export default LeaderboardService;
