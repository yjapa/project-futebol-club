import { ClubService } from '../../services/club';

class ClubController {
  private ClubService = new ClubService();

  async getAll() {
    const allClubs = await this.ClubService.getAll();
    return allClubs;
  }
}

export default ClubController;
