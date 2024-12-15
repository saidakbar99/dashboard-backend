import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType() 
@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column('text')
  @Field()
  description: string;

  @Field(() => Float, { nullable: true })
  income_amount?: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created_at: Date;
}