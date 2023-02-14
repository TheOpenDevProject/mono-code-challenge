import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class PricingRuleDto {
  @Field((type) => ID)
  id: string;

  @Field()
  /**
   * The number of items you get for free for each multiple of items purchased
   */
  @Field({ nullable: true })
  freeItemMultiplier?: number;
  /**
   * The number of items that must be purchased to get the free item
   */
  @Field({ nullable: true })
  freeItemMultiple?: number;

  @Field()
  clientId: string;

  @Field()
  productId: string;

  @Field({ nullable: true })
  alternativePrice?: number;
}
