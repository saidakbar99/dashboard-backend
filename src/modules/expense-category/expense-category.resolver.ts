import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpenseCategoryService } from './expense-category.service';
import { ExpenseCategory } from './expense-category.entity';

@Resolver(() => ExpenseCategory)
export class ExpenseCategoryResolver {
  constructor(private readonly expenseCategoryService: ExpenseCategoryService) {}

  @Query(() => [ExpenseCategory])
  async getExpenseCategories(): Promise<ExpenseCategory[]> {
    return this.expenseCategoryService.findAll();
  }

  @Mutation(() => ExpenseCategory)
  async createExpenseCategory(
    @Args('name') name: string,
    @Args('description') description: string,
  ): Promise<ExpenseCategory> {
    return this.expenseCategoryService.create({ name, description });
  }

  @Mutation(() => Boolean)
  async deleteExpenseCategory(@Args('id') id: string): Promise<boolean> {
    return this.expenseCategoryService.delete(id);
  }
}