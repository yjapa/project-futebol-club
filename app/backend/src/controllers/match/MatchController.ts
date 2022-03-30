import { NextFunction, Request, Response } from 'express';
import { MatchService } from '../../services/match';
import { StatusCode } from '../../utils';
import InProgressDTO from '../../interfaces/match/InProgressDTO';

class MatchController {
  private MatchService = new MatchService();

  private StatusCode = StatusCode;

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response, _next: NextFunction) {
    const { inProgress } = req.query as unknown as InProgressDTO;
    const allMatchs = await this.MatchService.getAll(inProgress);
    return res.status(this.StatusCode.OK).json(allMatchs);
  }
}

export default MatchController;
