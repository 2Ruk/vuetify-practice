"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerFactory = exports.AnswerSchema = exports.Answer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Answer = class Answer {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "Q1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "Q2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "Q3", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Answer.prototype, "Q4", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Answer.prototype, "createDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Answer.prototype, "updateDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Answer.prototype, "isDelete", void 0);
Answer = __decorate([
    (0, mongoose_1.Schema)()
], Answer);
exports.Answer = Answer;
exports.AnswerSchema = mongoose_1.SchemaFactory.createForClass(Answer);
exports.AnswerFactory = {
    name: Answer.name,
    useFactory: () => exports.AnswerSchema,
};
//# sourceMappingURL=answer.schema.js.map