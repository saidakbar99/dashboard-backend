import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkerService } from './worker.service';
import { Worker } from './worker.entity';

@Resolver(() => Worker)
export class WorkerResolver {
  constructor(private readonly workerService: WorkerService) {}

  @Query(() => [Worker])
  async getWorkers(): Promise<Worker[]> {
    return this.workerService.findAll();
  }

  @Mutation(() => Worker)
  async createWorker(
    @Args('name') name: string,
    @Args('role') role: string,
    @Args('salary') salary: number,
  ): Promise<Worker> {
    return this.workerService.create({ name, role, salary });
  }

  @Mutation(() => Boolean)
  async deleteWorker(@Args('id') id: string): Promise<boolean> {
    return this.workerService.delete(id);
  }
}