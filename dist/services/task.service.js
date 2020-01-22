"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_1 = require("../models/task.model");
class TaskService {
    welcomeMessage(req, res) {
        return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
    }
    getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            task_model_1.Task.find({}, (error, task) => {
                if (error) {
                    console.log(error);
                    return res.json(error);
                }
                else {
                    res.json(task);
                }
            });
        });
    }
    addNewTask(req, res) {
        const newTask = new task_model_1.Task(req.body);
        newTask.save((error, task) => {
            if (error)
                res.send(error);
            const message = 'Added new task';
            res.json(message);
        });
    }
    deleteTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = req.params.id;
            task_model_1.Task.findByIdAndDelete(_id, (error) => {
                if (error)
                    return res.send(error);
                const message = 'Deleted succesfully';
                res.send(message);
            });
        });
    }
    updateTask(req, res) {
        const taskId = req.params.id;
        const taskToUpdate = req.body;
        task_model_1.Task.findByIdAndUpdate(taskId, taskToUpdate, (error, task) => {
            if (error)
                res.send(error);
            const message = task ? 'Updated successfully' : 'Task not found :(';
            res.send(message);
        });
    }
}
exports.TaskService = TaskService;
