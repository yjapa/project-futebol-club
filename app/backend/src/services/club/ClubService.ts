import { ClubModel } from '../../models/club';

class ClubService {
  private ClubModel = new ClubModel();

  async getAll() {
    const allClubs = await this.ClubModel.getAll();
    return allClubs;
  }
}

export default ClubService;
