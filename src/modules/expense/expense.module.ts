import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { ExpenseService } from './expense.service';
import { ExpenseResolver } from './expense.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  providers: [ExpenseService, ExpenseResolver],
})
export class ExpenseModule {}