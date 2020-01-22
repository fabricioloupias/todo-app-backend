"use strict";
//doc https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-2-b56
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const task_controller_1 = require("./controllers/task.controller");
const mongoose_1 = __importDefault(require("mongoose"));
const todoApi_constants_1 = require("./constants/todoApi.constants");
class App {
    constructor() {
        this.app = express_1.default();
        this.setConfig();
        this._setMongoConfig();
        this.todoController = new task_controller_1.TaskController(this.app);
    }
    setConfig() {
        //Allows us to receive requests with data in json format
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
        //Enables cors   
        this.app.use(cors_1.default());
    }
    _setMongoConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(todoApi_constants_1.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
                console.log('db connected');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new App().app;
