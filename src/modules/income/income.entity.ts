import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Project } from '../project/project.entity';

@ObjectType()
@Entity()
export class Income {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Float)
  @Column('decimal', { precision: 15, scale: 2 })
  amount: number;

  @Field()
  @Column()
  source: string;

  @Field(() => Project)
  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}