import { NextFunction, Request, Response } from 'express';

import { StatusCode } from '../utils';

import { matchJoi } from '../validations';

import { NewMatch } from '../interfaces/match/NewMatch';

class ValidateMatch {
  private StatusCode = StatusCode;

  private matchJoi = matchJoi;

  constructor() {
    this.validate = this.validate.bind(this);
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    const matchDTO = req.body as NewMatch;

    const { error } = this.matchJoi.validate(matchDTO);
    if (error) {
      return res.status(this.StatusCode.INVALID_FIELDS).json({ message: error.message });
    }

    next();
  }
}

export default ValidateMatch;
