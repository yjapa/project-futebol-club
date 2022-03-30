import { MatchModel } from '../../models/match';

class MatchService {
  private MatchModel = new MatchModel();

  async getAll() {
    const allMatchs = await this.MatchModel.getAll();
    return allMatchs;
  }
}

export default MatchService;
