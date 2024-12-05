import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
    @Args('source') source: string,
    @Args('project_id') project_id: number,
  ): Promise<Income> {
    return this.incomeService.create({ amount, source, project: { id: project_id } as any });
  }
}