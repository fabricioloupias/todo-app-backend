"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    title: String,
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.Task = mongoose_1.default.model('Task', TaskSchema);
