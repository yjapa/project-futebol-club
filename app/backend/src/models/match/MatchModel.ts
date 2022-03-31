import Match from '../../database/models/Match';
import Club from '../../database/models/Club';
import { StatusCode } from '../../utils';
import { NewMatch } from '../../interfaces/match/NewMatch';
import { ClubModel } from '../club';
import { ScoreDTO } from '../../interfaces/match/ScoreDTO';

class MatchModel {
  private matchModel = Match;

  private clubModel = Club;

  private StatusCode = StatusCode;

  private ClubModel = new ClubModel();

  async getAll() {
    const allMatches = await this.matchModel.findAll({
      include: [
        { model: this.clubModel, as: 'homeClub', attributes: ['clubName'] },
        { model: this.clubModel, as: 'awayClub', attributes: ['clubName'] },
      ],
    });

    return allMatches;
  }

  async getAllInProgress() {
    const allMatches = await this.matchModel.findAll({
      where: { inProgress: true },
      include: [
        { model: this.clubModel, as: 'homeClub', attributes: ['clubName'] },
        { model: this.clubModel, as: 'awayClub', attributes: ['clubName'] },
      ],
    });

    return allMatches;
  }

  async getAllFinished() {
    const allMatches = await this.matchModel.findAll({
      where: { inProgress: false },
      include: [
        { model: this.clubModel, as: 'homeClub', attributes: ['clubName'] },
        { model: this.clubModel, as: 'awayClub', attributes: ['clubName'] },
      ],
    });

    return allMatches;
  }

  async findById(id: string) {
    const match = await this.matchModel.findByPk(id, {
      include: [
        { model: this.clubModel, as: 'homeClub', attributes: ['clubName'] },
        { model: this.clubModel, as: 'awayClub', attributes: ['clubName'] },
      ],
    });

    return { code: this.StatusCode.OK, data: match };
  }

  async createMatch(createDTO: NewMatch) {
    const teams = await Promise.all([
      this.ClubModel.getById(createDTO.homeTeam.toString()),
      this.ClubModel.getById(createDTO.awayTeam.toString()),
    ]);

    if (teams.includes(null)) {
      return { code: 401, data: { message: 'There is no team with such id!' } };
    }

    const newMatch = await this.matchModel.create(createDTO);

    return { code: this.StatusCode.CREATED, data: newMatch };
  }

  async finishMatch(id: string) {
    const [result] = await this.matchModel.update({ inProgress: false }, { where: { id } });

    if (!result) {
      return { code: this.StatusCode.UNPROCESSABLE_ENTITY,
        data: { message: 'Match finished or not found' } };
    }

    return { code: this.StatusCode.OK, data: { message: 'Finished match' } };
  }

  async updateMatch(id: string, score: ScoreDTO) {
    const [result] = await this.matchModel.update(score, { where: { id, inProgress: true } });

    return result
      ? { code: this.StatusCode.OK, data: { message: 'Updated match' } }
      : { code: 422, data: { message: 'Match already over or does not exist' } };
  }
}

export default MatchModel;
