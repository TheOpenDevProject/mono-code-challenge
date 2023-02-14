import { Global, Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaUserRepository } from './repositories/prismaUser.repository';
import { PrismaUserService } from './services/prismaUser.service';

@Global()
@Module({
  imports: [],
  providers: [UsersResolver, PrismaUserRepository, PrismaUserService],
  exports: [PrismaUserService, PrismaUserRepository],
})
export class UsersModule {}
