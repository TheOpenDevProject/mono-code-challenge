import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @Field()
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  middleName?: string;

  @Field()
  @IsString()
  lastName?: string;
}
