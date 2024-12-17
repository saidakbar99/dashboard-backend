import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseCategory } from './expense-category.entity';
import { Expense } from '../expense/expense.entity';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly expenseCategoryRepository: Repository<ExpenseCategory>,
  ) {}

  async findAll(): Promise<ExpenseCategory[]> {
      return this.expenseCategoryRepository
        .createQueryBuilder('expense_category')
        .leftJoin(
          Expense,
          'expense',
          'expense.category = expense_category.id'
        )
        .addSelect('SUM(expense.amount)', 'expense_amount')
        .groupBy('expense_category.id')
        .getRawAndEntities()
        .then(({ entities, raw }) => {
          return entities.map((expense_category, index) => {
            expense_category.expense_amount = Number(raw[index].expense_amount || 0);
            return expense_category;
          });
        });
    }

  async create(categoryData: Partial<ExpenseCategory>): Promise<ExpenseCategory> {
    const category = this.expenseCategoryRepository.create(categoryData);
    return this.expenseCategoryRepository.save(category);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.expenseCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Expense Category with ID "${id}" not found.`);
    }
    return true;
  }
}