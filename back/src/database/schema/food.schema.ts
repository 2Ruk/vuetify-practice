import {
  AsyncModelFactory,
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Food & Document;

@Schema()
export class Food {
  @Prop()
  idx: number;

  @Prop()
  cateType: string;

  @Prop()
  categoryKor: string;

  @Prop()
  food: string;

  @Prop()
  weightType: string;

  @Prop()
  imgUrl: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
export const FoodFactory: AsyncModelFactory = {
  name: Food.name,
  useFactory: () => FoodSchema,
};
const modelFactory: AsyncModelFactory[] = [FoodFactory];
export const FoodFeature = MongooseModule.forFeatureAsync(modelFactory, 'Food');
