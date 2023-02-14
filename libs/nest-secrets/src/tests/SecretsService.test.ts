import { ConfigService } from '@nestjs/config';
import { SecretsService } from '../services/SecretsService';
import { SecretsRepository } from '../repositories/SecretsRepository';
import { SecretNotFound } from '../exceptions/SecretNotFound';
import { KeyEncodingFormat } from '../enum/KeyEncodingFormat';

type Payload = {
  jwtPrivateKey: string;
  jwtPublicKey: string;
};

describe('Tests the secrets service ', () => {
  let secretsRepository: SecretsRepository;
  let configService: ConfigService;

  beforeEach(() => {
    // This is just to make the type checker happy, we mock away any usage of this anyway.
    configService = new ConfigService();
    // Mock the result of our secrets repository.
    secretsRepository = new SecretsRepository(configService);
    jest.spyOn(secretsRepository, 'getSecrets').mockImplementation(() =>
      Promise.resolve(`{
  "jwtPublicKey": "sampleValue",
  "jwtPrivateKey:": "sampleValue"}`)
    );
  });

  it('should throw an error when a non-existent secret is accessed', async () => {
    const secretsService = new SecretsService(secretsRepository, configService);
    await expect(
      async () =>
        await secretsService.getSecretValue<Payload>('nonExistentSecret' as any)
    ).rejects.toThrow(SecretNotFound);
  });

  it('should check to see if a local secret has been set in process.env first', async () => {
    const secretsService = new SecretsService(secretsRepository, configService);
    const secret = await secretsService.getSecretValue<Payload>(
      'jwtPrivateKey',
      KeyEncodingFormat.PlainText
    );
    expect(secret).toBe('sampleValueLOCAL');
  });

  it('should fallback to the secrets store when no runtime options are available', async () => {
    const secretsService = new SecretsService(secretsRepository, configService);
    const secret = await secretsService.getSecretValue<Payload>(
      'jwtPublicKey',
      KeyEncodingFormat.PlainText
    );
    expect(secret).toBe('sampleValue');
  });
});
