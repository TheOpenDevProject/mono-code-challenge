import { Injectable } from '@nestjs/common';
import { CryptoHelper } from '../../common/tools/CryptoHelper';
import { JWTUtilService } from '@scylla-digital/nest-jwt-utilities';
import { PrismaUserService } from '../../users/services/prismaUser.service';
import { user } from '@prisma/client';
@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: PrismaUserService,
    private readonly jwtService: JWTUtilService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<user | undefined> {
    if (!email || !password) {
      return;
    }

    const user = await this.userService.findUserByEmail(email);

    if (
      !user ||
      !(await CryptoHelper.validatePassword(password, user.password))
    ) {
      return;
    }

    return user;
  }

  async issueRefreshToken(user: user): Promise<string> {
    return this.jwtService.createToken(
      {
        email: user.email,
        sub: user.id,
        iss: 'SCYLLA-DIGITAL',
      },
      '30m',
    );
  }

  async login(user: user): Promise<string> {
    const payload = {
      email: user.email,
      sub: user.id,
      iss: 'SCYLLA-DIGITAL',
      refresh_token: await this.issueRefreshToken(user),
    };
    return this.jwtService.createToken(payload, '60m');
  }
}
