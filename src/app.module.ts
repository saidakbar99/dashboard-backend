import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { IncomeModule } from './modules/income/income.module';
import { WorkerModule } from './modules/worker/worker.module';
import { ExpenseCategoryModule } from './modules/expense-category/expense-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'superuser',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true, // Disable it in production
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    ProjectModule,
    ExpenseModule,
    IncomeModule,
    WorkerModule,
    ExpenseCategoryModule,
  ],
})
export class AppModule {}