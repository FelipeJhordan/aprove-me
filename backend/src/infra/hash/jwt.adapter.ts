import jwt from 'jsonwebtoken';

import { IJwt, JwtPayload } from '../../common/interfaces/jwt.interface';
import { formatJwtString } from '../../common/utils/string-utils';
import { environment } from '../../common/configuration/config-global';

export class JwtAdapter implements IJwt {
  private JWT_SECRET_KEY = environment.JWT_SECRET_KEY ?? 'dev-jwt'; // poderia utilizar o configModule também ☣
  private JWT_EXP = environment.JWT_EXP || 2000;

  async sign(payload: JwtPayload): Promise<string> {
    const token = await jwt.sign(payload, this.JWT_SECRET_KEY, {
      expiresIn: this.JWT_EXP,
    });

    return token;
  }

  async verify(token: string): Promise<boolean | JwtPayload> {
    const tokenFormated = formatJwtString(token);
    try {
      const tokenResult = (await jwt.verify(
        tokenFormated,
        this.JWT_SECRET_KEY,
      )) as JwtPayload;

      const invalid = Object.values(tokenResult).length == 0;

      if (invalid) return false;

      return tokenResult;
    } catch (e) {
      return false;
    }
  }
}
