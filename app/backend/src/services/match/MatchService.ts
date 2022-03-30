import { MatchModel } from '../../models/match';

class MatchService {
  private MatchModel = new MatchModel();

  async getAll(inProgress: string | undefined) {
    let match;
    switch (inProgress) {
      case 'true':
        match = await this.MatchModel.getAllInProgress();
        return match;
      case 'false':
        match = await this.MatchModel.getAllFinished();
        return match;
      default:
        match = await this.MatchModel.getAll();
        return match;
    }
  }
}

export default MatchService;
