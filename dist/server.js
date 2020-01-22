"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const todoApi_constants_1 = require("./constants/todoApi.constants");
app_1.default.listen(todoApi_constants_1.PORT, () => console.log(`Listening on port ${todoApi_constants_1.PORT}`));
