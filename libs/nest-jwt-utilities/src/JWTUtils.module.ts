import { Global, Module } from '@nestjs/common';
import { SecretsModule } from '@scylla-digital/nest-secrets';
import { JwtService } from '@nestjs/jwt';
import { JWTUtilService } from './services/JWTUtilService';

@Global()
@Module({
  imports: [SecretsModule],
  providers: [
    JWTUtilService,
    {
      provide: JwtService,
      useValue: new JwtService({}),
    },
  ],
  exports: [JWTUtilService],
})
export class JWTUtilsModule {}
