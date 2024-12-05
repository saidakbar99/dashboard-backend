import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class WorkerInput {
  @Field()
  id: number;
}