import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Food, FoodDocument } from '../database/schema/food.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<FoodDocument>) {}

  create(createFoodDto: CreateFoodDto) {
    return 'This action adds a new food';
  }

  findAll() {
    return `This action returns all food`;
  }

  async findOne(id: number) {
    const $group = {
      $group: {
        _id: '$cateType',
        category: { $last: '$cateType' },
      },
    };

    const $project = {
      $project: {
        _id: 0,
        category: 1,
      },
    };
    const foodsCate = await this.foodModel.aggregate([$group, $project]);
    console.log(foodsCate);

    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
