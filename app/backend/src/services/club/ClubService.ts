import { ClubModel } from '../../models/club';
import { StatusCode } from '../../utils';

class ClubService {
  private ClubModel = new ClubModel();

  async getAll() {
    const allClubs = await this.ClubModel.getAll();
    return allClubs;
  }

  async getById(id: string) {
    const club = await this.ClubModel.getById(id);

    return club
      ? { code: StatusCode.OK, data: club }
      : { code: StatusCode.NOT_FOUND, data: { message: 'Club not found' } };
  }
}

export default ClubService;
