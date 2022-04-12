import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { FoodFeature } from '../database/schema/food.schema';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [FoodFeature],
})
export class FoodModule {}
