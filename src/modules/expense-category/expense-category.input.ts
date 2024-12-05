import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ExpenseCategoryInput {
  @Field(() => Int)
  id: number;
}