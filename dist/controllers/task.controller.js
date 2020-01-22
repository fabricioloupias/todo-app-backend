"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_service_1 = require("../services/task.service");
class TaskController {
    constructor(app) {
        this.app = app;
        this.taskService = new task_service_1.TaskService();
        this.routes();
    }
    routes() {
        this.app.route('/').get(this.taskService.welcomeMessage);
        this.app.route('/tasks').get(this.taskService.getTasks);
        this.app.route('/task').post(this.taskService.addNewTask);
        this.app.route('/task/:id')
            .delete(this.taskService.deleteTaskById)
            .put(this.taskService.updateTask);
    }
}
exports.TaskController = TaskController;
