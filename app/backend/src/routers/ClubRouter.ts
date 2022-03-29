import { Router } from 'express';
import { ClubController } from '../controllers/club';

class Club {
  public router: Router;

  private ClubController = new ClubController();

  constructor() {
    this.router = Router();
    this.getAll();
    this.getById();
  }

  private getAll() {
    this.router.get(
      '/',
      this.ClubController.getAll,
    );
  }

  private getById() {
    this.router.get(
      '/:id',
      this.ClubController.getById,
    );
  }
}

export default Club;
