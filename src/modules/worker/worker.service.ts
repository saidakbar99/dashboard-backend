import { Injectable } from '@nestjs/common';
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
}