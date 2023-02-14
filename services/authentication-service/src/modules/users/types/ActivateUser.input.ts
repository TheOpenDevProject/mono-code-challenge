import { IsJWT, MaxLength, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ActivateUserInput {
  @IsJWT()
  @Field()
  token: string;
  @MinLength(8)
  @MaxLength(36)
  @Field()
  password: string;
}
