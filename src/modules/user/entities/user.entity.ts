import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Number)
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field(() => Float)
  salary: number;

  @Field(() => [Float])
  advances: number[];
}