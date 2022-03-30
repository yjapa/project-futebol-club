import Match from '../../database/models/Match';
import Club from '../../database/models/Club';

class MatchModel {
  private matchModel = Match;

  private clubModel = Club;

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
}

export default MatchModel;
