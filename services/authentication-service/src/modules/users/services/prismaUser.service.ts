import { MailService } from '../../mail/services/mailService.service';
import { ActivationJWTPayload } from '../types/ActivationJWTPayload';
import { CryptoHelper } from '../../common/tools/CryptoHelper';
import { ActivateUserInput } from '../types/ActivateUser.input';
import { InviteTemplate } from '../types/InviteTemplate.type';
import { Injectable } from '@nestjs/common';
import { JWTUtilService } from '@scylla-digital/nest-jwt-utilities';
import { Prisma } from '@prisma/client';
import { PrismaUserRepository } from '../repositories/prismaUser.repository';

import { ResetPasswordTemplateType } from '../types/ResetPasswordTemplate.type';

import { user } from '@prisma/client';

@Injectable()
export class PrismaUserService {
  constructor(
    private readonly userRepository: PrismaUserRepository,
    private readonly mailService: MailService,
    private readonly jwtService: JWTUtilService,
  ) {}

  async createActivationJWT(user: user): Promise<string> {
    return this.jwtService.createToken<ActivationJWTPayload>(
      {
        email: user.email,
        sub: user.id,
        iss: 'SCYLLADIGITAL',
      },
      '7d',
    );
  }

  async createUser(user: Prisma.userCreateInput): Promise<user> {
    // Force hash the password
    user.password = await CryptoHelper.hashPassword(user.password);

    // Create the user
    return this.userRepository.createOne(user);
  }

  async activateUser(input: ActivateUserInput): Promise<user> {
    const payload = await this.jwtService.verifyToken<ActivationJWTPayload>(
      input.token,
    );
    const user = await this.userRepository.findOne({ email: payload.email });

    return this.userRepository.updateOne(user.id, {
      password: await CryptoHelper.hashPassword(input.password),
    });
  }

  public async sendPasswordResetEmail(user: user): Promise<void> {
    if (!user) {
      return;
    }

    await this.mailService.sendTemplatedMail<ResetPasswordTemplateType>(
      user.email,
      'Reset your password',
      {
        firstName: user.firstName,
        resetPasswordLink: `${
          process.env.CORS_CLIENT_URL
        }/authentication/reset-password/${await this.createActivationJWT(
          user,
        )}`,
      },
      'forgot-password.template',
    );
  }

  public async sendUserInvitation(user: user): Promise<void> {
    if (!user) {
      return;
    }

    await this.mailService.sendTemplatedMail<InviteTemplate>(
      user.email,
      `You've been invited to join Seek Demo`,
      {
        firstName: user.firstName,
        activationLink: `${
          process.env.CORS_CLIENT_URL
        }/authentication/activate/${await this.createActivationJWT(user)}`,
      },
      'welcome.template',
    );
  }

  /**
   * @param {string} email
   * @param include
   * @returns {Promise<User | undefined>}
   */
  async findUserByEmail(email: string): Promise<user | undefined> {
    return this.userRepository.findOne({ email });
  }

  async findUsersByIds(ids: string[]): Promise<user[]> {
    return this.userRepository.findMany({ id: { in: ids } });
  }

  async findOneUserById(id: string): Promise<user> {
    return this.userRepository.findOne({ id });
  }

  async firstOrCreate(
    where: Prisma.userWhereInput,
    create: Prisma.userCreateInput,
  ): Promise<user | undefined> {
    const user = await this.userRepository.findOne(where);
    if (user) {
      return user;
    }

    try {
      const newUser = await this.createUser(create);
      await this.sendUserInvitation(newUser);
      return newUser;
    } catch (e) {
      return undefined;
    }
  }
}
