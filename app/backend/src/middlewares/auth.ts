import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import { NextFunction, Response, RequestHandler } from 'express';
import { RequestAuth } from '../interfaces/interfaces';
import statusCode from '../enums/StatusCode';

const auth: RequestHandler = async (req: RequestAuth, res: Response, next: NextFunction) => {
  const SECRET = readFileSync('jwt.evaluation.key', { encoding: 'utf8' });
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
};

export default auth;
