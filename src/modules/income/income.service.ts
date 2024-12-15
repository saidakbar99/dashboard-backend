import { Injectable } from '@nestjs/common';
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
}