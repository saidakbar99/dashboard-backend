import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Worker } from './worker.entity';

@Injectable()
export class WorkerService {
  constructor(
    @InjectRepository(Worker)
    private readonly workerRepository: Repository<Worker>,
  ) {}

  async findAll(): Promise<Worker[]> {
    return this.workerRepository.find();
  }

  async create(workerData: Partial<Worker>): Promise<Worker> {
    const worker = this.workerRepository.create(workerData);
    return this.workerRepository.save(worker);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.workerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Worker with ID "${id}" not found.`);
    }
    return true;
  }
}