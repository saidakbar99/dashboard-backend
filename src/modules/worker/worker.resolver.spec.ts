import { Test, TestingModule } from '@nestjs/testing';
import { WorkerResolver } from './worker.resolver';

describe('WorkerResolver', () => {
  let resolver: WorkerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkerResolver],
    }).compile();

    resolver = module.get<WorkerResolver>(WorkerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
