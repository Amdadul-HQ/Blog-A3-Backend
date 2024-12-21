import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: Record<string, unknown>,
  secret: string,
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
