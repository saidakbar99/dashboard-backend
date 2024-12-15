import { Resolver, Query, Mutation, Args, GraphQLISODateTime } from '@nestjs/graphql';
import { IncomeService } from './income.service';
import { Income } from './income.entity';

@Resolver(() => Income)
export class IncomeResolver {
  constructor(private readonly incomeService: IncomeService) {}

  @Query(() => [Income])
  async getIncomes(): Promise<Income[]> {
    return this.incomeService.findAll();
  }

  @Mutation(() => Income)
  async createIncome(
    @Args('amount') amount: number,
    @Args('income_date', { type: () => GraphQLISODateTime }) income_date: Date,
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('project', { type: () => String}) project?: string
  ): Promise<Income> {
    //@ts-ignore
    return this.incomeService.create({ amount, description, income_date, project });
  }
}