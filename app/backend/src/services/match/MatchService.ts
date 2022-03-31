import { MatchModel } from '../../models/match';
import { StatusCode } from '../../utils';
import { NewMatch } from '../../interfaces/match/NewMatch';
import { ScoreDTO } from '../../interfaces/match/ScoreDTO';
import Match from '../../database/models/Match';

class MatchService {
  private MatchModel = new MatchModel();

  private StatusCode = StatusCode;

  private matchModel = Match;

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

  async updateMatch(id: string, score: ScoreDTO) {
    const [success] = await this.matchModel.update(score, { where: { id, inProgress: true } });

    return success ? { code: 200, data: { message: 'Match score updated' } }
      : { code: 422, data: { message: 'Match already over or does not exist' } };
  }
}

export default MatchService;
