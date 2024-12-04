import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  salary: number;

  @Prop({ type: [Number], default: [] })
  advances: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);