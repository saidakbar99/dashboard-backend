import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Float, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Project } from '../project/project.entity';

@ObjectType()
@Entity()
export class Income {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Float)
  @Column('decimal', { precision: 15, scale: 2 })
  amount: number;

  @Field()
  @Column()
  description?: string;

  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.income_amount, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Field(() => GraphQLISODateTime)
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  income_date: Date; 

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}