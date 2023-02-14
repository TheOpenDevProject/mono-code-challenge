import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SecretsService } from './services/SecretsService';
import { SecretsRepository } from './repositories/SecretsRepository';

@Global()
@Module({
  imports: [],
  providers: [SecretsService, SecretsRepository, ConfigService],
  exports: [SecretsService, SecretsRepository, ConfigService],
})
export class SecretsModule {}
