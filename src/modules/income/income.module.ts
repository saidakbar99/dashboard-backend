import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './income.entity';
import { IncomeService } from './income.service';
import { IncomeResolver } from './income.resolver';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [ProjectModule, TypeOrmModule.forFeature([Income])],
  providers: [IncomeService, IncomeResolver],
})
export class IncomeModule {}