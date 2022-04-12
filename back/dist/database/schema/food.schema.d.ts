/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { AsyncModelFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare type FoodDocument = Food & Document;
export declare class Food {
    idx: number;
    cateType: string;
    categoryKor: string;
    food: string;
    weightType: string;
    imgUrl: string;
}
export declare const FoodSchema: import("mongoose").Schema<Document<Food, any, any>, import("mongoose").Model<Document<Food, any, any>, any, any, any>, any, any>;
export declare const FoodFactory: AsyncModelFactory;
export declare const FoodFeature: import("@nestjs/common").DynamicModule;
