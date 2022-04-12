/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { AsyncModelFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export declare type AnswerDocument = Answer & Document;
export declare class Answer {
    userId: string;
    status: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
    createDate: Date;
    updateDate: Date;
    isDelete: boolean;
}
export declare const AnswerSchema: import("mongoose").Schema<Document<Answer, any, any>, import("mongoose").Model<Document<Answer, any, any>, any, any, any>, any, any>;
export declare const AnswerFactory: AsyncModelFactory;
