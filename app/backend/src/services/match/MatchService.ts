import { MatchModel } from '../../models/match';
import { StatusCode } from '../../utils';
import { NewMatch } from '../../interfaces/match/NewMatch';
// import { ClubModel } from '../../models/club';

class MatchService {
  private MatchModel = new MatchModel();

  private StatusCode = StatusCode;

  // private ClubModel = new ClubModel();

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

  async findById(id: string) {
    const match = await this.MatchModel.findById(id);

    if (!match) {
      return { code: this.StatusCode.NOT_FOUND, data: { message: 'Match not found' } };
    }

    return match;
  }

  async createMatch(createDTO: NewMatch) {
    const { homeTeam, awayTeam } = createDTO;
    if (homeTeam === awayTeam) {
      return { code: this.StatusCode.INVALID_FIELDS,
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }

    const { code, data } = await this.MatchModel.createMatch(createDTO);

    return { code, data };
  }

  async finishMatch(id: string) {
    const { code, data } = await this.MatchModel.finishMatch(id);

    return { code, data };
  }
}

export default MatchService;
