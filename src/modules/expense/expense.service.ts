import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
  ) {}

  async findAll(): Promise<Expense[]> {
    return this.expenseRepository.find();
  }

  async create(expenseData: Partial<Expense>): Promise<Expense> {
    const expense = this.expenseRepository.create(expenseData);
    return this.expenseRepository.save(expense);
  }
}