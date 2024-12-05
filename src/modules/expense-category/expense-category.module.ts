import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategory } from './expense-category.entity';
import { ExpenseCategoryService } from './expense-category.service';
import { ExpenseCategoryResolver } from './expense-category.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])],
  providers: [ExpenseCategoryService, ExpenseCategoryResolver],
})
export class ExpenseCategoryModule {}