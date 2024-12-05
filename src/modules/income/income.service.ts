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
    if (incomeData.project?.id) {
      const project = await this.projectRepository.findOneBy({ id: incomeData.project.id });
      if (!project) {
        throw new Error(`Project with ID ${incomeData.project.id} not found`);
      }
      incomeData.project = project;
    }

    const income = this.incomeRepository.create(incomeData);
    return this.incomeRepository.save(income);
  }
}