import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { decodeBase64ToAscii } from '@scylla-digital/string-utils';
import { SecretsRepository } from '../repositories/SecretsRepository';
import { SecretNotFound } from '../exceptions/SecretNotFound';
import { ResourceNotFound } from '../exceptions/ResourceNotFound';
import { KeyEncodingFormat } from '../enum/KeyEncodingFormat';
import { InvalidKeyIdentifier } from '../exceptions/InvalidKeyIdentifier';

@Injectable()
export class SecretsService {
  constructor(
    private readonly secretsRepository: SecretsRepository,
    private readonly configService: ConfigService
  ) {}

  /**
   * Gets a specific secret value from a secrets repository.
   */
  public async getSecretValue<TPayload>(
    secretName: keyof TPayload,
    encodingFormat = KeyEncodingFormat.Base64,
    secretARN?: string
  ): Promise<string> {
    const secret =
      (await this.getLocalSecret(secretName)) ??
      (await this.getCloudSecret(secretName, secretARN));

    // Check to see if the secret we're looking for is already in the local runtime environment.

    return encodingFormat === KeyEncodingFormat.Base64
      ? decodeBase64ToAscii(secret)
      : secret;
  }

  private async getCloudSecret<TPayload>(
    secretName: keyof TPayload,
    secretARN?: string
  ): Promise<string> {
    const rawSecrets = await this.secretsRepository.getSecrets(secretARN);

    if (!SecretsService.keyIsString(secretName)) {
      throw new SecretNotFound(`Secret payload was invalid`);
    }
    if (!rawSecrets) {
      throw new ResourceNotFound(secretName);
    }

    // Parse the raw secrets into a usable format
    const secrets = JSON.parse(rawSecrets);

    // Check to see if the secret exists
    if (!secrets[secretName]) {
      throw new SecretNotFound(secretName);
    }

    return secrets[secretName];
  }

  /**
   * Gets a secret from the local runtime environment.
   */
  private async getLocalSecret<TPayload>(
    secretName: keyof TPayload
  ): Promise<string | undefined> {
    if (!SecretsService.keyIsString(secretName)) {
      throw new InvalidKeyIdentifier();
    }

    return (
      process.env[secretName] ?? this.configService.get(secretName, undefined)
    );
  }

  private static keyIsString(key: any): key is string {
    return typeof key === 'string';
  }
}
