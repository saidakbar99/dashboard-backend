import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { Income } from '../income/income.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository
      .createQueryBuilder('project')
      .leftJoin(
        Income,
        'income',
        'income.project_id = project.id'
      )
      .addSelect('SUM(income.amount)', 'income_amount')
      .groupBy('project.id')
      .getRawAndEntities()
      .then(({ entities, raw }) => {
        return entities.map((project, index) => {
          project.income_amount = Number(raw[index].income_amount || 0);
          return project;
        });
      });
  }

  async create(projectData: Partial<Project>): Promise<Project> {
    const project = this.projectRepository.create(projectData);
    return this.projectRepository.save(project);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID "${id}" not found.`);
    }
    return true;
  }
}