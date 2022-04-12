import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodDocument } from "../database/schema/food.schema";
import { Model } from "mongoose";
export declare class FoodService {
    private foodModel;
    constructor(foodModel: Model<FoodDocument>);
    create(createFoodDto: CreateFoodDto): string;
    findAll(): string;
    findOne(id: number): Promise<string>;
    update(id: number, updateFoodDto: UpdateFoodDto): string;
    remove(id: number): string;
}
