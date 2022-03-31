import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { NextFunction, Response } from 'express';
import { RequestAuth } from '../interfaces/Token';
import { StatusCode } from '../utils';

class ValidateToken {
  private readFileSync = (file: string) => readFileSync(file, { encoding: 'utf-8' });

  private StatusCode = StatusCode;

  constructor() {
    this.validate = this.validate.bind(this);
  }

  validate(req: RequestAuth, res: Response, next: NextFunction) {
    const SECRET = this.readFileSync('jwt.evaluation.key');
    const token = req.headers.authorization;

    if (!token) {
      return res.status(this.StatusCode.INVALID_FIELDS).json({ error: 'Token not found' });
    }

    try {
      const { id, email, role, username } = jwt.verify(token, SECRET) as jwt.JwtPayload;
      req.user = { id, email, role, username };
      return next();
    } catch (error) {
      return res.status(this.StatusCode.BAD_REQUEST).json({ error: 'Invalid token' });
    }
  }
}

export default ValidateToken;
