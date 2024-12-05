import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseCategoryResolver } from '../expense-category/expense-category.resolver';

describe('ExpenseCategoryResolver', () => {
  let resolver: ExpenseCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpenseCategoryResolver],
    }).compile();

    resolver = module.get<ExpenseCategoryResolver>(ExpenseCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
