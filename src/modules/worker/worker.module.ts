import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Worker } from './worker.entity';
import { WorkerService } from './worker.service';
import { WorkerResolver } from './worker.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Worker])],
  providers: [WorkerService, WorkerResolver],
})
export class WorkerModule {}