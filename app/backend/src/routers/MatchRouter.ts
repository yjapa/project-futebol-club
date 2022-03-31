import { Router } from 'express';
import { MatchController } from '../controllers/match';
import Auth from '../middlewares/auth';
// import ValidateMatch from '../middlewares/ValidateMatch';

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
}

export default Match;
