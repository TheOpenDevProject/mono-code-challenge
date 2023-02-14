import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BasicAuthenticationInput {
  @Field((type) => String, { nullable: false })
  public username: string;
  @Field((type) => String, { nullable: false })
  public password: string;
}
