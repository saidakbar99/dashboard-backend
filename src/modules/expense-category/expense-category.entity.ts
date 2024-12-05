import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType() // Decorate the class with @ObjectType()
@Entity()
export class ExpenseCategory {
  @Field(() => Int)  // Use @Field() decorator for each field
  @PrimaryGeneratedColumn()
  id: number;

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