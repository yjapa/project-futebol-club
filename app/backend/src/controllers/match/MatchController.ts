import { NextFunction, Request, Response } from 'express';
import { MatchService } from '../../services/match';
import { StatusCode } from '../../utils';

class MatchController {
  private MatchService = new MatchService();

  private StatusCode = StatusCode;

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response, _next: NextFunction) {
    const allMatchs = await this.MatchService.getAll();
    return res.status(this.StatusCode.OK).json(allMatchs);
  }
}

export default MatchController;
