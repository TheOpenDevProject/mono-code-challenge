import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PricingRuleInput {
  @Field(() => String, { nullable: false })
  clientId: string;
}
