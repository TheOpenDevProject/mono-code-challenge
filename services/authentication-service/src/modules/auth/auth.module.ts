import { Global, Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthenticationService } from './services/authentication.service';
import { UsersModule } from '../users/users.module';
import { JWTStrategy } from './JWTStrategy.strategy';

@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthResolver, AuthenticationService, JWTStrategy],
  exports: [AuthenticationService],
})
export class AuthModule {}
