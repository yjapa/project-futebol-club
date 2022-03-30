import { Router } from 'express';
import { MatchController } from '../controllers/match';

class Match {
  public router: Router;

  private MatchController = new MatchController();

  constructor() {
    this.router = Router();
    this.getAll();
  }

  private getAll() {
    this.router.get(
      '/',
      this.MatchController.getAll,
    );
  }
}

export default Match;
