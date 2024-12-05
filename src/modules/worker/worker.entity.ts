import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType() // Make sure the class is decorated with @ObjectType()
@Entity()
export class Worker {
  @Field(() => Int)  // Fields should have @Field() decorator
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ nullable: true })
  role: string;

  @Field(() => Float)  // If the field is a number type, use Float or Int accordingly
  @Column('decimal', { precision: 15, scale: 2, default: 0 })
  salary: number;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}