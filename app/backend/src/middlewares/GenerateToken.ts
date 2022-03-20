import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';
import TokenPayload from '../interfaces/Token';

const SECRET = readFileSync('jwt.evaluation.key', { encoding: 'utf8' });
const jwtConfig = {
  expiresIn: '7d',
};

export default function generateToken(payload: TokenPayload): string {
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
}
