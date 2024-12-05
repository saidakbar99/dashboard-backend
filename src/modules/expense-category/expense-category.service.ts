import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExpenseCategory } from './expense-category.entity';

@Injectable()
export class ExpenseCategoryService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly expenseCategoryRepository: Repository<ExpenseCategory>,
  ) {}

  async findAll(): Promise<ExpenseCategory[]> {
    return this.expenseCategoryRepository.find();
  }

  async create(categoryData: Partial<ExpenseCategory>): Promise<ExpenseCategory> {
    const category = this.expenseCategoryRepository.create(categoryData);
    return this.expenseCategoryRepository.save(category);
  }
}