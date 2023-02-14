import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthenticateUserInput } from '../users/types/AuthenticateUser.input';
import { AuthenticationService } from './services/authentication.service';
import { WithContext } from './guards/WithContext.decorator';
import { PrismaUserService } from '../users/services/prismaUser.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService: PrismaUserService,
    private readonly authService: AuthenticationService,
  ) {}

  @Query(() => String)
  async requestAccessToken(
    @WithContext() context: { req; reply },
    @Args('input') input: AuthenticateUserInput,
  ): Promise<boolean | string> {
    const { email, password } = input;
    const user = await this.authService.validateUser(email, password);

    if (!user) {
      return 'LOGIN_FAILURE';
    }

    if (!user.activated) {
      return 'ACTIVATION_FAILURE';
    }

    // Todo: Move this into a helper class
    context.reply.header(
      'Set-Cookie',
      `Authorization=Bearer ${await this.authService.login(
        user,
      )}; Secure; HttpOnly`,
    );

    return !!user;
  }
}
