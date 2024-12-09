import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class ExpenseCategory {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}