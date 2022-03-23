import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface TokenPayload {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface RequestAuth extends Request {
  user?: JwtPayload,
}

export default TokenPayload;
