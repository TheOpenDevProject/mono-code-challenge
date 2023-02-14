import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

export class CryptoHelper {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, await bcrypt.genSalt());
  }

  static async validatePassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  static async generateSecureRandomPassword(length: number): Promise<string> {
    return CryptoHelper.hashPassword(
      await CryptoHelper.generateSecureRandom(length),
    );
  }

  static async generateSecureRandom(length: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      randomBytes(length, (err, buf) => {
        if (err) {
          reject(err);
        } else {
          resolve(buf.toString('hex'));
        }
      });
    });
  }
}
