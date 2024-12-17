import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Income } from './income.entity';
import { Project } from '../project/project.entity';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income)
    private readonly incomeRepository: Repository<Income>,
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Income[]> {
    return this.incomeRepository.find({ relations: ['project'] });
  }

  async create(incomeData: Partial<Income>): Promise<Income> {
    const income = this.incomeRepository.create(incomeData);
    return this.incomeRepository.save(income);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.incomeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Income with ID "${id}" not found.`);
    }
    return true;
  }
}