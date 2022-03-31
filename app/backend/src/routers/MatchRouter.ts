import { Router } from 'express';
import { MatchController } from '../controllers/match';
import Auth from '../middlewares/auth';

class Match {
  public router: Router;

  private MatchController = new MatchController();

  private auth = new Auth();

  constructor() {
    this.router = Router();
    this.getAll();
    this.findById();
    this.createMatch();
    this.finishMatch();
    this.updateMatch();
  }

  private getAll() {
    this.router.get(
      '/',
      this.MatchController.getAll,
    );
  }

  private findById() {
    this.router.get(
      '/:id',
      this.MatchController.findById,
    );
  }

  private createMatch() {
    this.router.post(
      '/',
      this.auth.validate,
      this.MatchController.createMatch,
    );
  }

  private finishMatch() {
    this.router.patch(
      '/:id/finish',
      this.MatchController.finishMatch,
    );
  }

  private updateMatch() {
    this.router.patch(
      '/:id',
      this.MatchController.updateMatch,
    );
  }
}

export default Match;
