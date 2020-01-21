
//doc https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-2-b56

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { TaskController } from './controllers/task.controller';
import mongoose from 'mongoose';
import { MONGODB_URI } from './constants/todoApi.constants';

class App {
    public app: Application;
    public todoController: TaskController

    constructor() {
        this.app = express();
        this.setConfig();
        this._setMongoConfig();
        this.todoController = new TaskController(this.app);
    }

    private setConfig() {
        //Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({ limit: '50mb' }));

        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

        //Enables cors   
        this.app.use(cors());
    }

    private async _setMongoConfig() {
        try {
            await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
            console.log('db connected')
        } catch (error) {
            console.log(error)
        }
    }
}

export default new App().app;