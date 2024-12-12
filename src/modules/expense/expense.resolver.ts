import { Resolver, Mutation, Args, Query, GraphQLISODateTime, Float } from '@nestjs/graphql';
import { formatISO } from 'date-fns';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { ExpenseCategoryInput } from '../expense-category/expense-category.input';
import { WorkerInput } from '../worker/worker.input';
import { ProjectInput } from '../project/project.input';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  @Query(() => [Expense])
  async getExpenses(): Promise<Expense[]> {
    const expenses = await this.expenseService.findAll();
    return expenses.map(expense => ({
      ...expense,
      expense_date: new Date(expense.expense_date),
    }));
  }

  @Mutation(() => Expense)
  async createExpense(
    @Args('amount', { type: () => Float }) amount: number,
    @Args('category', { type: () => String }) category: string,
    @Args('expense_date', { type: () => Date }) expense_date: Date,
    @Args('description', { type: () => String, nullable: true }) description?: string,
    @Args('worker', { type: () => String, nullable: true }) worker?: string,
    @Args('project', { type: () => String, nullable: true }) project?: string
  ): Promise<Expense> {
    return this.expenseService.create({
      amount,
      description,
      //@ts-ignore
      category,
      //@ts-ignore
      worker,
      //@ts-ignore
      project,
      expense_date,
    });
  }
}
