import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType() 
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column('text')
  @Field()
  description: string;

  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  @Field(() => Float)
  income_amount: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  updated_at: Date;
}