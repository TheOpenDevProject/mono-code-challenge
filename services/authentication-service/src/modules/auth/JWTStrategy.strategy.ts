import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { JWTUtilService } from '@scylla-digital/nest-jwt-utilities';
import { FastifyExtractJwt } from '../common/tools/FastifyExtractJwt';
import { PrismaUserService } from '../users/services/prismaUser.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: PrismaUserService,
    private readonly jwtService: JWTUtilService,
  ) {
    super({
      jwtFromRequest: (request) =>
        FastifyExtractJwt.fromAuthCookieAsBearerToken(request),
      ignoreExpiration: false,
      secretOrKeyProvider: async (req, payload, done) => {
        const secret = await this.jwtService.getPublicKey();
        if (!secret) {
          return done(new UnauthorizedException(), false);
        }
        done(null, secret);
      },
    });
    console.log('JWTStrategy created');
  }

  async validate(token: any): Promise<any> {
    const user = await this.userService.findUserByEmail(token.email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
