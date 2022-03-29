import Club from '../../database/models/Club';
import { ClubDTO } from '../../interfaces/club';

class ClubModel {
  private clubModel = Club;

  async getAll() {
    const allClubs = await this.clubModel.findAll();
    return allClubs;
  }

  async getById(id: string): Promise< ClubDTO | null> {
    const club = await this.clubModel.findByPk(id);
    return club;
  }
}

export default ClubModel;
