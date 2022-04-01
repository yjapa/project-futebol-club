import db from '../../database/models';
import queryLeaderBoard from '../../utils/LeaderboardHelpers';

class LeaderboardModel {
  private queryDB = async (query: string) => db.query(query);

  async teamRanking() {
    const [result] = await this.queryDB(queryLeaderBoard);

    return result;
  }
}

export default LeaderboardModel;
