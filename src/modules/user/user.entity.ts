import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  role: string;

  @Field(() => Float)
  @Column('decimal')
  salary: number;

  @Field(() => [Float], { nullable: true })
  @Column('decimal', { array: true, nullable: true })
  advances: number[];
}