import Club from '../../database/models/Club';

class ClubModel {
  private clubModel = Club;

  async getAll() {
    const allClubs = await this.clubModel.findAll();
    return allClubs;
  }
}

export default ClubModel;
