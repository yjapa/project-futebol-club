import { NextFunction, Request, Response } from 'express';
import { MatchService } from '../../services/match';
import { StatusCode } from '../../utils';
import InProgressDTO from '../../interfaces/match/InProgressDTO';

class MatchController {
  private MatchService = new MatchService();

  private StatusCode = StatusCode;

  constructor() {
    this.getAll = this.getAll.bind(this);
    this.findById = this.findById.bind(this);
    this.createMatch = this.createMatch.bind(this);
    this.finishMatch = this.finishMatch.bind(this);
  }

  async getAll(req: Request, res: Response, _next: NextFunction) {
    const { inProgress } = req.query as unknown as InProgressDTO;
    const allMatchs = await this.MatchService.getAll(inProgress);
    return res.status(this.StatusCode.OK).json(allMatchs);
  }

  async findById(req: Request, res: Response) {
    const { code, data } = await this.MatchService.findById(req.params.id);

    return res.status(code).json(data);
  }

  async createMatch(req: Request, res: Response) {
    const { code, data } = await this.MatchService.createMatch(req.body);

    return res.status(code).json(data);
  }

  async finishMatch(req: Request, res: Response) {
    const { code, data } = await this.MatchService.finishMatch(req.params.id);

    return res.status(code).json(data);
  }
}

export default MatchController;
