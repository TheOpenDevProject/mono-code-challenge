import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Logger, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/GqlAuthGuard.guard';
import { WithUser } from '../common/decorators/WithUser.decorator';
import { MailService } from '../mail/services/mailService.service';
import { ActivateUserInput } from './types/ActivateUser.input';
import { PrismaUserService } from './services/prismaUser.service';

import { SafeUserDto } from './dto/SafeUser.dto';
import { user } from '@prisma/client';

@Resolver((of) => SafeUserDto)
export class UsersResolver {
  constructor(
    private readonly usersService: PrismaUserService,
    private readonly mailService: MailService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query((returns) => SafeUserDto)
  async whoAmI(@WithUser() activeUser: user): Promise<SafeUserDto> {
    return activeUser;
  }

  @Mutation(() => SafeUserDto)
  async activateUser(@Args('input') input: ActivateUserInput): Promise<user> {
    Logger.log(`Activating user with email ${input.token}`);
    return this.usersService.activateUser(input);
  }

  @Mutation(() => Boolean)
  async resetPassword(@Args('email') email: string): Promise<boolean> {
    const user = await this.usersService.findUserByEmail(email);
    if (!user) {
      return false;
    }
    await this.usersService.sendPasswordResetEmail(user);

    return true;
  }

  @UseGuards(GqlAuthGuard)
  @Query((returns) => [SafeUserDto])
  async findUsersByUuid(
    @WithUser() activeUser: user,
    @Args({
      name: 'uuid',
      type: () => [String],
    })
    uuids: Array<string>,
  ): Promise<user[]> {
    return this.usersService.findUsersByIds(uuids);
  }
}
