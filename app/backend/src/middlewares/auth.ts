import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { NextFunction, Response } from 'express';
import { RequestAuth } from '../interfaces/interfaces';
import statusCode from '../enums/StatusCode';

class ValidateToken {
  private readFileSync = (file: string) => readFileSync(file, { encoding: 'utf-8' });

  validate(req: RequestAuth, res: Response, next: NextFunction) {
    const SECRET = this.readFileSync('jwt.evaluation.key');
    const token = req.headers.authorization;

    if (!token) {
      return res.status(statusCode.INVALID_FIELD).json({ error: 'Token not found' });
    }

    try {
      const { id, email, role, username } = jwt.verify(token, SECRET) as jwt.JwtPayload;
      req.user = { id, email, role, username };
      next();
    } catch (error) {
      return res.status(statusCode.INVALID_FIELD).json({ error: 'Invalid token' });
    }
  }
}

export default ValidateToken;
