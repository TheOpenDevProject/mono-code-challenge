import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SecretsRepository {
  private client = new SecretsManagerClient({
    region: this.configService.get('AWS_REGION', 'ap-southeast-2'),
  });

  public constructor(private configService: ConfigService) {}

  /**
   *
   * @returns {Promise<string | undefined>}
   */
  public async getSecrets(
    secretARN: string = this.configService.get('AWS_SECRETS_ARN', 'INVALID_ARN')
  ): Promise<string | undefined> {
    const getSecretValue = new GetSecretValueCommand({
      SecretId: secretARN,
    });

    const { SecretString } = await this.client.send(getSecretValue);

    return SecretString;
  }
}
