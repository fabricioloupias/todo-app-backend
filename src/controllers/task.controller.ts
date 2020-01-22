import { Application } from 'express';
import { TaskService } from '../services/task.service';

export class TaskController {
  private taskService: TaskService;

  constructor(private app: Application) {
    this.taskService = new TaskService()
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.taskService.welcomeMessage);
    this.app.route('/tasks').get(this.taskService.getTasks);
    this.app.route('/task').post(this.taskService.addNewTask);
    this.app.route('/task/:id')
      .delete(this.taskService.deleteTaskById)
      .put(this.taskService.updateTask);
  }
}