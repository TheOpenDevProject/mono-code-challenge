/* eslint-disable no-console */
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { SecretsService } from '@scylla-digital/nest-secrets';

export type BasePayload = {
  sub: string;
  iss: string;
};
export type Payload<T> = T extends BasePayload ? T : BasePayload & T;

export type SecretsPayload = {
  JWT_PRIVATE_KEY: string;
  JWT_PUBLIC_KEY: string;
};

@Injectable()
export class JWTUtilService {
  constructor(private readonly jwtService: JwtService, private readonly secretsService: SecretsService) {}

  public async createToken<T>(payload: Payload<T>, expiresIn: string = '3d'): Promise<string> {
    const privateKey = await this.secretsService.getSecretValue<SecretsPayload>('JWT_PRIVATE_KEY');

    return this.jwtService.signAsync(payload, {
      algorithm: 'RS256',
      privateKey,
      expiresIn,
    });
  }

  public async verifyToken<T>(token: string): Promise<Payload<T>> {
    const publicKey = await this.secretsService.getSecretValue<SecretsPayload>('JWT_PUBLIC_KEY');

    return this.jwtService.verify<Payload<T>>(token, {
      publicKey,
      algorithms: ['RS256'],
      ignoreExpiration: false,
    });
  }

  public async getPublicKey(): Promise<string> {
    return this.secretsService.getSecretValue<SecretsPayload>('JWT_PUBLIC_KEY');
  }

  public async getPrivateKey(): Promise<string> {
    return this.secretsService.getSecretValue<SecretsPayload>('JWT_PRIVATE_KEY');
  }
}
