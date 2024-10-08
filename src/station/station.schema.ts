import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Station extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  location: string;
  @Prop({ default: 0 })
  fuelAvailable: number;
}

export const StationSchema = SchemaFactory.createForClass(Station);
