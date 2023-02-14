import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
@Directive('@key(fields: "id")')
export class SafeUserDto {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  @IsOptional()
  middleName?: string;

  @Field()
  lastName: string;

  @Field()
  email?: string;

  @Field()
  activated?: boolean;
}
