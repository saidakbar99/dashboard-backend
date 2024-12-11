import { Resolver, Mutation, Args, Query, GraphQLISODateTime } from '@nestjs/graphql';
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
    @Args('amount') amount: number,
    @Args('description') description: string,
    @Args('category') category: ExpenseCategoryInput,
    @Args('worker') worker: WorkerInput,  
    @Args('project') project: ProjectInput,  
    @Args('expense_type') expense_type: 'general' | 'worker_salary' | 'worker_advance' | 'planned',
    @Args('expense_date') expense_date: Date,
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
      expense_type,
      expense_date,
    });
  }
}
