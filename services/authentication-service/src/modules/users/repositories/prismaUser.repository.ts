import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { RepositoryInterface } from '../../../../prisma/interfaces/repository.interface';
import { Prisma, user } from '@prisma/client';

@Injectable()
export class PrismaUserRepository implements RepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async createOne(createInput: Prisma.userCreateInput): Promise<user> {
    return await this.prisma.user.create({ data: createInput });
  }

  async findOne(
    where: Prisma.userWhereInput,
  ): Promise<user> {
    return await this.prisma.user.findFirst({ where });
  }

  async findMany(
    where: Prisma.userWhereInput,
  ): Promise<user[]> {
    return await this.prisma.user.findMany({ where });
  }

  async updateOne(
    id: string,
    updateInput: Prisma.userUpdateInput,
  ): Promise<user> {
    return await this.prisma.user.update({
      where: { id },
      data: updateInput,
    });
  }

  async deleteMany(where: Prisma.userWhereInput): Promise<Prisma.BatchPayload> {
    return await this.prisma.user.deleteMany({ where });
  }

  async deleteOne(id: string): Promise<user> {
    return this.prisma.user.delete({ where: { id } });
  }
}
