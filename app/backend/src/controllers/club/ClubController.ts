import { NextFunction, Request, Response } from 'express';
import { ClubService } from '../../services/club';
import { StatusCode } from '../../utils';

class ClubController {
  private ClubService = new ClubService();

  private StatusCode = StatusCode;

  constructor() {
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(_req: Request, res: Response, _next: NextFunction) {
    const allClubs = await this.ClubService.getAll();
    return res.status(this.StatusCode.OK).json(allClubs);
  }

  async getById(req: Request, res: Response, _nextMiddleware: NextFunction) {
    const { id } = req.params;

    const { code, data } = await this.ClubService.getById(id);

    return res.status(code).json(data);
  }
}

export default ClubController;
