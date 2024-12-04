import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field(() => Int)
  salary: number;

  @Field(() => [Int])
  advances: number[];
}