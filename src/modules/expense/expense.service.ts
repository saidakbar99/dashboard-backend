import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.expenseRepository.find({
      relations: ['category', 'worker', 'project'],
    });
  }

  async create(expenseData: Partial<Expense>): Promise<Expense> {
    const expense = this.expenseRepository.create(expenseData);
    return this.expenseRepository.save(expense);
  }

  async update(id: string, updateData: Partial<Expense>): Promise<Expense> {
    await this.expenseRepository.update(id, updateData);
    return this.expenseRepository.findOne({ where: { id }, relations: ['category', 'worker', 'project'] });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.expenseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Expense with ID "${id}" not found.`);
    }
    return true;
  }
}