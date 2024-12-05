import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { ExpenseCategoryInput } from '../expense-category/expense-category.input';  // Import the InputType
import { WorkerInput } from '../worker/worker.input';
import { ProjectInput } from '../project/project.input';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  @Mutation(() => Expense)
  async createExpense(
    @Args('amount') amount: number,
    @Args('description') description: string,
    @Args('category') category: ExpenseCategoryInput,  // Use ExpenseCategoryInput here
    @Args('worker') worker: WorkerInput,  
    @Args('project') project: ProjectInput,  
    @Args('expense_type') expense_type: 'general' | 'worker_salary' | 'worker_advance' | 'planned',
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
    });
  }
}
