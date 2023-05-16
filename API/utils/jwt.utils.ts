import { settings } from '@config/settings';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export function signJwt(id: string) {
  const privateKey = settings.JWT_PRIVATE_KEY;
  const signature = Buffer.from(privateKey, 'base64').toString('ascii');
  const options: jwt.SignOptions = {
    expiresIn: settings.JWT_EXPIRES_IN,
    algorithm: 'RS256',
  };
  return jwt.sign({ id }, signature, options);
}
