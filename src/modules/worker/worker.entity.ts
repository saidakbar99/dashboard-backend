import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Worker {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  role: string;

  @Field(() => Float)
  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  salary: number;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}