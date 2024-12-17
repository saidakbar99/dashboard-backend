import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Float, GraphQLISODateTime } from '@nestjs/graphql';
import { ExpenseCategory } from '../expense-category/expense-category.entity';
import { Worker } from '../worker/worker.entity';
import { Project } from '../project/project.entity';

@ObjectType()
@Entity()
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column('decimal', { precision: 15, scale: 2 })
  @Field(() => Float)
  amount: number;

  @Column('text')
  @Field()
  description: string;

  @ManyToOne(() => ExpenseCategory, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'category_id' })
  @Field(() => ExpenseCategory)
  category: ExpenseCategory;

  @ManyToOne(() => Worker, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'worker_id' })
  @Field(() => Worker, { nullable: true })
  worker: Worker | null;

  @ManyToOne(() => Project, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'project_id' })
  @Field(() => Project, { nullable: true })
  project: Project | null;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;

  @Column({ type: 'date', nullable: false })
  @Field(() => GraphQLISODateTime, { nullable: false })
  expense_date: Date;
}