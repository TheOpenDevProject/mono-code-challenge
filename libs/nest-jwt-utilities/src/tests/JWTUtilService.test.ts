import { JwtService } from '@nestjs/jwt';
import { SecretsRepository, SecretsService } from '@scylla-digital/nest-secrets';
import { ConfigService } from '@nestjs/config';
import { JWTUtilService } from '../services/JWTUtilService';
import { jwtPrivateKey, jwtPublicKey } from './jest-env';

type ExpectedJWTPayload = {
  sub: string;
  iat: number;
  iss: string;
  aud: string;
  jti: string;
};

describe('JWTUtilService tests', () => {
  let service: JWTUtilService;
  let secretsService: SecretsService;
  let secretsRepository: SecretsRepository;
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService();
    secretsRepository = new SecretsRepository(configService);
    jest.spyOn(secretsRepository, 'getSecrets').mockImplementation(() =>
      Promise.resolve(`
      {
  "JWT_PRIVATE_KEY": "${jwtPrivateKey}",
  "JWT_PUBLIC_KEY": "${jwtPublicKey}"
  }
      `)
    );

    secretsService = new SecretsService(secretsRepository, configService);

    service = new JWTUtilService(new JwtService({}), secretsService);
  });

  it('should create a token based on the given payload', async () => {
    const token = await service.createToken<ExpectedJWTPayload>({
      aud: '',
      iat: 0,
      iss: '',
      jti: '',
      sub: '',
    });

    expect(await service.verifyToken<ExpectedJWTPayload>(token)).toMatchObject({
      aud: '',
      iat: expect.any(Number),
      iss: '',
      jti: '',
      sub: '',
      exp: expect.any(Number),
    });
  });
});
